

export const fileToBase64 = (file: File): Promise<{ base64: string; mimeType: string }> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result as string;
      const base64 = result.split(',')[1];
      if (base64) {
        resolve({ base64, mimeType: file.type });
      } else {
        reject(new Error("Failed to read file as Base64."));
      }
    };
    reader.onerror = (error) => reject(error);
  });
};

export const dataUrlToFile = async (dataUrl: string, filename: string): Promise<File> => {
    const res = await fetch(dataUrl);
    const blob = await res.blob();
    return new File([blob], filename, { type: blob.type });
};

/**
 * Loads an image from a data URL.
 * @param dataUrl The data URL of the image.
 * @returns A Promise that resolves with the loaded HTMLImageElement.
 */
export const loadImage = (dataUrl: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => resolve(img);
        img.onerror = (err) => reject(new Error("Failed to load image from data URL."));
        img.src = dataUrl;
    });
};

/**
 * Resizes a source image to match the dimensions of a target image.
 * @param sourceDataUrl The data URL of the image to resize.
 * @param targetImage The loaded HTMLImageElement with the target dimensions.
 * @returns A Promise that resolves with the data URL of the resized image.
 */
export const resizeImageToMatch = (sourceDataUrl: string, targetImage: HTMLImageElement): Promise<string> => {
     return new Promise((resolve, reject) => {
       const canvas = document.createElement('canvas');
       const ctx = canvas.getContext('2d');
       if (!ctx) {
         return reject(new Error("Could not get canvas context."));
       }
       
       const sourceImage = new Image();
       sourceImage.crossOrigin = "anonymous";
       sourceImage.onload = () => {
         canvas.width = targetImage.naturalWidth;
         canvas.height = targetImage.naturalHeight;
         
         ctx.drawImage(sourceImage, 0, 0, canvas.width, canvas.height);
         resolve(canvas.toDataURL('image/png'));
       };
       sourceImage.onerror = () => reject(new Error("Failed to load source image for resizing."));
       sourceImage.src = sourceDataUrl;
     });
};


/**
 * Converts a string to its binary representation.
 * @param text The string to convert.
 * @returns A string of 0s and 1s.
 */
const textToBinary = (text: string): string => {
    return text.split('').map(char => {
        return char.charCodeAt(0).toString(2).padStart(8, '0');
    }).join('');
};

/**
 * Embeds an invisible watermark into an image using steganography (LSB).
 * @param imageUrl The data URL of the image to watermark.
 * @param text The text to embed.
 * @returns A Promise that resolves with the data URL of the watermarked image.
 */
export const embedWatermark = (imageUrl: string, text: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) {
            return reject(new Error("Could not get canvas context."));
        }

        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);

            const watermarkText = text + "::END"; // Add a delimiter
            const binaryMessage = textToBinary(watermarkText);
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;

            if (binaryMessage.length > data.length / 4 * 3) {
                 console.warn("Watermark is too long for the image. Skipping.");
                 return resolve(imageUrl); // Return original if too long
            }

            let messageIndex = 0;
            for (let i = 0; i < data.length && messageIndex < binaryMessage.length; i += 4) {
                // Embed in R, G, B channels
                for (let j = 0; j < 3 && messageIndex < binaryMessage.length; j++) {
                    const bit = parseInt(binaryMessage[messageIndex], 2);
                    // Clear the LSB and then set it
                    data[i + j] = (data[i + j] & 0xFE) | bit;
                    messageIndex++;
                }
            }

            ctx.putImageData(imageData, 0, 0);
            resolve(canvas.toDataURL('image/png'));
        };
        img.onerror = () => reject(new Error("Failed to load image for watermarking."));
        img.src = imageUrl;
    });
};

/**
 * Programmatically triggers a file download for a given data URL.
 * @param url The data URL of the file to download.
 * @param filename The desired name for the downloaded file.
 */
export const downloadImage = (url: string, filename: string) => {
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * Draws a rounded rectangle path on a canvas context
 */
const roundRect = (ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) => {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
};

export interface OverlayLogoOptions {
  logoUrl?: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  /** Percentage of the shorter image side used as logo width (0–1) */
  maxWidthRatio?: number;
  /** Percentage of the shorter image side used as margin (0–1) */
  marginRatio?: number;
  /** If true, draws a subtle rounded white plate behind the logo for legibility */
  backdrop?: boolean;
}

/**
 * Overlays the Hispania Colors logo on top of the generated image with premium look.
 * Returns a new data URL (PNG) with the logo composited in.
 */
export const overlayLogo = async (
  baseImageDataUrl: string,
  options: OverlayLogoOptions = {}
): Promise<string> => {
  const defaultLogoUrl = options.logoUrl ?? 'https://i.imgur.com/nlRBQtX.png';
  const position = options.position ?? 'bottom-right';
  const maxWidthRatio = options.maxWidthRatio ?? 0.16; // 16% of shorter side
  const marginRatio = options.marginRatio ?? 0.04; // 4% margin
  const useBackdrop = options.backdrop ?? true;

  const baseImg = await loadImage(baseImageDataUrl);

  // Fetch logo as blob → object URL to avoid CORS tainting issues
  const res = await fetch(defaultLogoUrl, { mode: 'cors' });
  const blob = await res.blob();
  const logoObjUrl = URL.createObjectURL(blob);
  const logoImg = await loadImage(logoObjUrl);
  URL.revokeObjectURL(logoObjUrl);

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Could not get canvas context.');

  canvas.width = baseImg.width;
  canvas.height = baseImg.height;
  ctx.imageSmoothingEnabled = true;
  // @ts-ignore - not all TS dom libs have the union type for quality
  ctx.imageSmoothingQuality = 'high';

  // Draw base
  ctx.drawImage(baseImg, 0, 0, canvas.width, canvas.height);

  // Compute logo size
  const shorter = Math.min(canvas.width, canvas.height);
  const logoW = Math.max(1, Math.round(shorter * maxWidthRatio));
  const scale = logoW / logoImg.width;
  const logoH = Math.max(1, Math.round(logoImg.height * scale));
  const margin = Math.round(shorter * marginRatio);

  // Position
  let x = margin;
  let y = margin;
  if (position.includes('right')) x = canvas.width - logoW - margin;
  if (position.includes('bottom')) y = canvas.height - logoH - margin;
  if (position === 'center') {
    x = Math.round((canvas.width - logoW) / 2);
    y = Math.round((canvas.height - logoH) / 2);
  }

  // Backplate for legibility
  if (useBackdrop) {
    const pad = Math.max(6, Math.round(logoH * 0.18));
    const plateX = x - pad;
    const plateY = y - pad;
    const plateW = logoW + pad * 2;
    const plateH = logoH + pad * 2;
    const radius = Math.round(Math.min(plateW, plateH) * 0.18);

    ctx.save();
    ctx.shadowColor = 'rgba(0,0,0,0.18)';
    ctx.shadowBlur = Math.max(4, Math.round(shorter * 0.012));
    ctx.shadowOffsetY = Math.max(2, Math.round(shorter * 0.006));
    roundRect(ctx, plateX, plateY, plateW, plateH, radius);
    ctx.fillStyle = 'rgba(255,255,255,0.88)';
    ctx.fill();
    ctx.restore();
  }

  // Draw logo
  ctx.drawImage(logoImg, x, y, logoW, logoH);

  return canvas.toDataURL('image/png');
};

// -------------------------
// Flag replacement pipeline
// -------------------------

type FlagOrientation = 'vertical' | 'horizontal';

interface FlagStripe { color: string; ratio: number; }

export interface FlagSpec { orientation: FlagOrientation; stripes: FlagStripe[]; }

const NAMED_FLAGS: Record<string, FlagSpec> = {
  // Italy / Italia
  'italy': { orientation: 'vertical', stripes: [
    { color: '#009246', ratio: 1 },
    { color: '#FFFFFF', ratio: 1 },
    { color: '#CE2B37', ratio: 1 },
  ] },
  'italia': { orientation: 'vertical', stripes: [
    { color: '#009246', ratio: 1 },
    { color: '#FFFFFF', ratio: 1 },
    { color: '#CE2B37', ratio: 1 },
  ] },
  // Spain / España (simplified, without crest)
  'spain': { orientation: 'horizontal', stripes: [
    { color: '#AA151B', ratio: 2 },
    { color: '#F1BF00', ratio: 4 },
    { color: '#AA151B', ratio: 2 },
  ] },
  
  'france': { orientation: 'vertical', stripes: [
    { color: '#0055A4', ratio: 1 },
    { color: '#FFFFFF', ratio: 1 },
    { color: '#EF4135', ratio: 1 },
  ] },
  'francia': { orientation: 'vertical', stripes: [
    { color: '#0055A4', ratio: 1 },
    { color: '#FFFFFF', ratio: 1 },
    { color: '#EF4135', ratio: 1 },
  ] },
  'germany': { orientation: 'horizontal', stripes: [
    { color: '#000000', ratio: 1 },
    { color: '#DD0000', ratio: 1 },
    { color: '#FFCC00', ratio: 1 },
  ] },
  'alemania': { orientation: 'horizontal', stripes: [
    { color: '#000000', ratio: 1 },
    { color: '#DD0000', ratio: 1 },
    { color: '#FFCC00', ratio: 1 },
  ] },
  'portugal': { orientation: 'vertical', stripes: [
    { color: '#006600', ratio: 2 },
    { color: '#FF0000', ratio: 3 },
  ] },
  'españa': { orientation: 'horizontal', stripes: [
    { color: '#AA151B', ratio: 2 },
    { color: '#F1BF00', ratio: 4 },
    { color: '#AA151B', ratio: 2 },
  ] },
  'netherlands': { orientation: 'horizontal', stripes: [
    { color: '#AE1C28', ratio: 1 },
    { color: '#FFFFFF', ratio: 1 },
    { color: '#21468B', ratio: 1 },
  ] },
  'países bajos': { orientation: 'horizontal', stripes: [
    { color: '#AE1C28', ratio: 1 },
    { color: '#FFFFFF', ratio: 1 },
    { color: '#21468B', ratio: 1 },
  ] },
  'belgium': { orientation: 'vertical', stripes: [
    { color: '#000000', ratio: 1 },
    { color: '#FDDA24', ratio: 1 },
    { color: '#EF3340', ratio: 1 },
  ] },
  'bélgica': { orientation: 'vertical', stripes: [
    { color: '#000000', ratio: 1 },
    { color: '#FDDA24', ratio: 1 },
    { color: '#EF3340', ratio: 1 },
  ] },
  'ireland': { orientation: 'vertical', stripes: [
    { color: '#169B62', ratio: 1 },
    { color: '#FFFFFF', ratio: 1 },
    { color: '#FF883E', ratio: 1 },
  ] },
  'irlanda': { orientation: 'vertical', stripes: [
    { color: '#169B62', ratio: 1 },
    { color: '#FFFFFF', ratio: 1 },
    { color: '#FF883E', ratio: 1 },
  ] },
  'poland': { orientation: 'horizontal', stripes: [
    { color: '#FFFFFF', ratio: 1 },
    { color: '#DC143C', ratio: 1 },
  ] },
  'polonia': { orientation: 'horizontal', stripes: [
    { color: '#FFFFFF', ratio: 1 },
    { color: '#DC143C', ratio: 1 },
  ] },
  'austria': { orientation: 'horizontal', stripes: [
    { color: '#ED2939', ratio: 1 },
    { color: '#FFFFFF', ratio: 1 },
    { color: '#ED2939', ratio: 1 },
  ] },
  'romania': { orientation: 'vertical', stripes: [
    { color: '#002B7F', ratio: 1 },
    { color: '#FCD116', ratio: 1 },
    { color: '#CE1126', ratio: 1 },
  ] },
  'rumanía': { orientation: 'vertical', stripes: [
    { color: '#002B7F', ratio: 1 },
    { color: '#FCD116', ratio: 1 },
    { color: '#CE1126', ratio: 1 },
  ] },
  'hungary': { orientation: 'horizontal', stripes: [
    { color: '#CD2A3E', ratio: 1 },
    { color: '#FFFFFF', ratio: 1 },
    { color: '#436F4D', ratio: 1 },
  ] },
  'hungría': { orientation: 'horizontal', stripes: [
    { color: '#CD2A3E', ratio: 1 },
    { color: '#FFFFFF', ratio: 1 },
    { color: '#436F4D', ratio: 1 },
  ] },
};

export const getFlagSpec = (countryRaw: string): FlagSpec | null => {
  const k = (countryRaw || '').trim().toLowerCase();
  if (!k) return null;
  if (NAMED_FLAGS[k]) return NAMED_FLAGS[k];
  // Try to normalize with accents removed
  const norm = k.normalize('NFD').replace(/\p{Diacritic}/gu, '');
  if (NAMED_FLAGS[norm]) return NAMED_FLAGS[norm];
  return null; // Unknown
};

/**
 * Replace the masked region with a clean flag pattern while preserving shading/texture.
 * 1) Paint stripes into a canvas
 * 2) Clip by mask
 * 3) Composite onto the base using source-over (color) + multiply with grayscale shading
 */
export const applyFlagToMaskedRegion = async (
  baseImageDataUrl: string,
  maskDataUrl: string,
  flag: FlagSpec
): Promise<string> => {
  const baseImg = await loadImage(baseImageDataUrl);
  const maskImg = await loadImage(maskDataUrl);

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Could not get canvas context.');
  canvas.width = baseImg.width;
  canvas.height = baseImg.height;
  ctx.drawImage(baseImg, 0, 0);

  // Build stripes layer over a separate canvas
  const stripes = document.createElement('canvas');
  stripes.width = canvas.width;
  stripes.height = canvas.height;
  const sctx = stripes.getContext('2d')!;

  // Determine mask bounding box to limit painted area
  const tmpMask = document.createElement('canvas');
  tmpMask.width = canvas.width;
  tmpMask.height = canvas.height;
  const mctx = tmpMask.getContext('2d')!;
  mctx.drawImage(maskImg, 0, 0, canvas.width, canvas.height);
  const mdata = mctx.getImageData(0, 0, canvas.width, canvas.height).data;
  let minX = canvas.width, minY = canvas.height, maxX = 0, maxY = 0;
  let sumX = 0, sumY = 0, sumXX = 0, sumYY = 0, sumXY = 0, count = 0;
  for (let y = 0; y < canvas.height; y++) {
    for (let x = 0; x < canvas.width; x++) {
      const a = mdata[(y * canvas.width + x) * 4 + 3];
      if (a > 8) { // mask pixel present
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
        // stats for PCA
        sumX += x; sumY += y; sumXX += x * x; sumYY += y * y; sumXY += x * y; count++;
      }
    }
  }
  if (minX > maxX || minY > maxY) {
    // No mask found; return original
    return baseImageDataUrl;
  }

  const bw = maxX - minX + 1;
  const bh = maxY - minY + 1;
  const cx = (minX + maxX) / 2;
  const cy = (minY + maxY) / 2;

  // Estimate dominant axis angle using PCA on mask pixels
  let theta = 0;
  if (count > 0) {
    const meanX = sumX / count, meanY = sumY / count;
    const covXX = sumXX / count - meanX * meanX;
    const covYY = sumYY / count - meanY * meanY;
    const covXY = sumXY / count - meanX * meanY;
    theta = 0.5 * Math.atan2(2 * covXY, covXX - covYY); // major eigenvector angle
  }

  // Paint stripes inside bounding box
  const total = flag.stripes.reduce((acc, s) => acc + s.ratio, 0);
  // Draw stripes in a rotated coordinate system aligned with the mask's long axis
  sctx.save();
  sctx.translate(cx, cy);
  sctx.rotate(theta); // band axis ~ horizontal in this frame
  if (flag.orientation === 'vertical') {
    let cursor = -bw / 2;
    for (let i = 0; i < flag.stripes.length; i++) {
      const seg = flag.stripes[i];
      const isLast = i === flag.stripes.length - 1;
      const w = isLast ? (-cursor + bw / 2) : Math.round((seg.ratio / total) * bw);
      sctx.fillStyle = seg.color;
      sctx.fillRect(cursor, -bh / 2, Math.max(1, w), bh);
      cursor += w;
    }
  } else {
    let cursor = -bh / 2;
    for (let i = 0; i < flag.stripes.length; i++) {
      const seg = flag.stripes[i];
      const isLast = i === flag.stripes.length - 1;
      const h = isLast ? (-cursor + bh / 2) : Math.round((seg.ratio / total) * bh);
      sctx.fillStyle = seg.color;
      sctx.fillRect(-bw / 2, cursor, bw, Math.max(1, h));
      cursor += h;
    }
  }
  sctx.restore();

  // Clip stripes to mask
  sctx.globalCompositeOperation = 'destination-in';
  sctx.drawImage(maskImg, 0, 0, canvas.width, canvas.height);
  sctx.globalCompositeOperation = 'source-over';

  // Shading: grayscale mask of base × multiply over stripes for texture
  const shade = document.createElement('canvas');
  shade.width = canvas.width; shade.height = canvas.height;
  const shctx = shade.getContext('2d')!;
  shctx.filter = 'grayscale(1)';
  shctx.drawImage(baseImg, 0, 0);
  shctx.filter = 'none';
  shctx.globalCompositeOperation = 'destination-in';
  shctx.drawImage(maskImg, 0, 0, canvas.width, canvas.height);
  shctx.globalCompositeOperation = 'source-over';

  // Composite onto base: first clear masked color slightly to reduce bleed
  ctx.globalCompositeOperation = 'destination-out';
  ctx.drawImage(maskImg, 0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = 'source-over';

  // Lay stripes
  ctx.drawImage(stripes, 0, 0);
  // Add shading
  ctx.globalCompositeOperation = 'multiply';
  ctx.drawImage(shade, 0, 0);
  ctx.globalCompositeOperation = 'source-over';

  return canvas.toDataURL('image/png');
};

/**
 * Composes the edited image into the base image strictly within the mask region.
 * Outside the mask, the original base remains intact regardless of model output.
 */
export const compositeWithMask = async (
  baseImageDataUrl: string,
  editedImageDataUrl: string,
  maskDataUrl: string
): Promise<string> => {
  const baseImg = await loadImage(baseImageDataUrl);
  const editedImg = await loadImage(editedImageDataUrl);
  const maskImg = await loadImage(maskDataUrl);

  const canvas = document.createElement('canvas');
  canvas.width = baseImg.width; canvas.height = baseImg.height;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Could not get canvas context.');

  // Start with original base
  ctx.drawImage(baseImg, 0, 0);

  // Create edited × mask layer
  const masked = document.createElement('canvas');
  masked.width = baseImg.width; masked.height = baseImg.height;
  const mctx = masked.getContext('2d')!;
  mctx.drawImage(editedImg, 0, 0, masked.width, masked.height);
  mctx.globalCompositeOperation = 'destination-in';
  mctx.drawImage(maskImg, 0, 0, masked.width, masked.height);
  mctx.globalCompositeOperation = 'source-over';

  // Overlay masked edit onto base
  ctx.drawImage(masked, 0, 0);

  return canvas.toDataURL('image/png');
};

