import type { Transformation } from './types';

// Transformaciones adaptadas a Hispania Colors para contenido premium en RRSS
export const TRANSFORMATIONS: Transformation[] = [
  {
    title: "Prompt personalizado",
    prompt: "CUSTOM",
    emoji: "✍️",
    description: "Escribe exactamente el contenido que quieres generar para la marca."
  },
  {
    title: "Hero de producto (feed)",
    prompt: "Use the accessory from the input image as the clear hero (do not omit it). Create a high‑end 1:1 commercial packshot: centered on a pure white seamless background with soft studio lighting, realistic reflections and a gentle soft shadow beneath. 4K detail, crisp edges, dust‑free, no fingerprints. Optional subtle brand accents only if they enhance the shot (never mandatory). No text, no watermark.",
    emoji: "🎯",
    description: "Packshot premium en fondo blanco con acentos rojos/amarillos."
  },
  {
    title: "Lifestyle en muñeca",
    prompt: "Use the accessory from the input image and show it worn on a model wrist in a tasteful lifestyle scene (café/terraza mediterránea). Natural daylight, soft bokeh, warm skin tones, impeccable realism, 4K. Keep the bracelet in crisp focus with elegant hand pose. Color accents may be used tastefully but are not required. No text, no watermark.",
    emoji: "🤝",
    description: "Foto realista del accesorio llevado en mano o muñeca."
  },
  {
    title: "Macro de detalle",
    prompt: "Create an extreme macro close‑up using the input accessory (do not replace it): show leather grain, metal edges and stitching with focus‑stacked sharpness. High contrast micro‑lighting, clean specular highlights, 4K clarity. Keep palette neutral and elegant; avoid strong color tints unless they improve realism. Avoid national crests or printed emblems unless present in the input band. No text, no watermark.",
    emoji: "🔎",
    description: "Primerísimo primer plano con texturas perfectas."
  },
  {
    title: "Flat lay minimalista",
    prompt: "Generate a premium flat‑lay featuring the actual input accessory on a neutral #F5F5F5 background with natural soft shadows. Arrange 2–3 minimal props (marble chip, olive twig, linen swatch). Clean negative space, perfectly balanced 1:1 composition. No text, no watermark.",
    emoji: "🧩",
    description: "Composición superior limpia sobre fondo neutro."
  },
  {
    title: "Mármol elegante",
    prompt: "Photograph the input accessory on a white Carrara marble slab with soft lateral daylight, clean reflections and premium editorial look. Realistic scale, 4K clarity. Keep tones natural and tasteful; no forced brand coloring. No text, no watermark.",
    emoji: "🪨",
    description: "Packshot sobre mármol con luz natural suave."
  },
  {
    title: "Madera cálida",
    prompt: "Place the input accessory on warm oak wood with soft window light and natural shadows. Color grade for warmth and sophistication. Preserve true material color; avoid forced brand coloring. No text, no watermark.",
    emoji: "🪵",
    description: "Packshot sobre madera con look cálido y natural."
  },
  {
    title: "Bandera sutil",
    prompt: "Use the input accessory as the hero and create a tasteful backdrop that can, optionally, reference Spain’s flag with soft minimal bands (only if it enhances the shot). Elegant, premium lighting, 4K. No text, no watermark.",
    emoji: "🇪🇸",
    description: "Fondo con referencia elegante a la bandera."
  },
  {
    title: "Patrón flor de lis",
    prompt: "Design a refined repeating background pattern inspired by the fleur‑de‑lis (neutral luxury palette). Place the input accessory centered with clean realistic shadows. Premium luxury look, 4K. No text, no watermark.",
    emoji: "⚜️",
    description: "Motivo de flor de lis sutil y elegante de marca."
  },
  {
    title: "Grid de colección (4 vistas)",
    prompt: "Generate a perfectly aligned 2x2 grid using the same input accessory: (1) hero on white, (2) macro texture detail, (3) lifestyle on wrist, (4) packaging arrangement. Equal margins and consistent lighting. Neutral, timeless palette unless the product color suggests otherwise. 1:1 canvas, 4K. No text, no watermark.",
    emoji: "🗂️",
    description: "Cuadrícula para mostrar 4 vistas del mismo producto."
  },
  {
    title: "Campaña temporada",
    prompt: "Create a seasonal campaign around the actual input accessory: celebratory confetti and ribbons with an elegant, tasteful color palette (not mandatory to use brand colors). Clean white/light background, generous copy‑space on one side (no text rendered). 4K cleanliness, premium light. No watermark.",
    emoji: "🎉",
    description: "Imagen festiva de campaña con espacio para copy."
  },
  {
    title: "Story vertical 9:16",
    prompt: "Compose a vertical 9:16 Instagram Story where the input accessory is the unmistakable hero (occupies ~35–45% of frame). Centered product, premium studio rim‑light and micro highlights, with dynamic diagonal light beams or subtle motion blur streaks behind. High‑key white or refined neutral background with elegant soft shadow; top/bottom safe areas preserved. Absolutely include the accessory (never output only a background). No text, no watermark.",
    emoji: "📱",
    description: "Composición vertical lista para stories."
  },
  {
    title: "Portada Reels",
    prompt: "Design a punchy Reels cover using the actual input accessory: dark premium backdrop with a soft spotlight, centered product brightly lit with crisp speculars, subtle diagonal accents if needed. High contrast, cinematic depth, 4K. No text, no watermark.",
    emoji: "🎬",
    description: "Imagen impactante tipo portada para reels."
  },
  {
    title: "Lifestyle urbano",
    prompt: "Place the input accessory in a stylish outdoor Spanish setting (plaza/café) at golden hour. Show it worn on wrist or held in hand, natural skin tones, soft bokeh, cinematic warmth, 4K realism. Keep palette tasteful and realistic; accents optional. No text, no watermark.",
    emoji: "🏙️",
    description: "Escena realista en exterior con look cálido."
  },
  {
    title: "Packaging premium",
    prompt: "Create an elegant packaging mockup for the actual accessory: premium matte box with thin accent stripe (color palette chosen to flatter the product), open with the product resting on a soft cushion. Shoot on a white surface with soft daylight. 4K cleanliness. No text, no watermark.",
    emoji: "🎁",
    description: "Mockup de caja premium con el producto."
  },
  {
    title: "Patrón con logo (multi)",
    prompt: "Use the second image as the brand logo to build a subtle repeating background behind the actual input accessory. Keep the product centered, realistic soft shadows; ensure the pattern color palette remains elegant and not distracting. Clean 4K result. No text, no watermark.",
    emoji: "🧩",
    description: "Usa tu logo para crear un patrón de fondo elegante.",
    isMultiImage: true,
    primaryUploaderTitle: "Producto",
    primaryUploaderDescription: "Foto del accesorio principal",
    secondaryUploaderTitle: "Logotipo o patrón",
    secondaryUploaderDescription: "SVG/PNG del logo o imagen patrón para el fondo"
  },
  {
    title: "Recolorear a paleta de marca",
    prompt: "Recolor only the fabric/cord elements of the input accessory to a tasteful palette aligned with the brand when relevant (e.g., deep red, warm gold), but choose the most elegant option for the shot. Preserve metals and natural materials true to life; maintain realism and texture. High‑end commercial finish, 4K. No text, no watermark.",
    emoji: "🎨",
    description: "Adapta colores del producto a rojo/amarillo corporativos."
  }
  ,
  {
    title: "Mármol con plantas",
    prompt: "Photograph the input accessory on white Carrara marble with two small minimalist green plants (succulents or an olive twig). Soft Mediterranean daylight, gentle shadows, 4K cleanliness. Keep the product hero sharp; allow subtle natural greens if they enhance realism. No text, no watermark.",
    emoji: "🪴",
    description: "Mármol blanco + plantas pequeñas como acento natural."
  },
  {
    title: "Escena marítima mediterránea",
    prompt: "Create a refined maritime still‑life around the actual accessory: light weathered driftwood, nautical rope, a few seashells and a hint of fine sand. Ocean breeze mood, cool daylight with soft warmth, 4K. Keep the product crisp, elegant and premium; avoid kitsch. Palette nautical/neutral (no color mandates). No text, no watermark.",
    emoji: "🌊",
    description: "Naturaleza marina elegante: cuerda náutica, conchas y madera clara."
  },
  {
    title: "Corte de muñeca (camisa formal)",
    prompt: "Tight crop of a wrist wearing the input bracelet partially under a crisp formal shirt cuff (white or light blue). Natural soft daylight, shallow depth‑of‑field, clean skin, premium editorial look, 4K. Show only forearm and hand; neutral background. No text, no watermark.",
    emoji: "👔",
    description: "Primer plano de la muñeca con camisa formal."
  },
  {
    title: "Proceso artesano (manos)",
    prompt: "Show artisan hands crafting the actual bracelet at a workbench: leather cord, needles, thread, small pliers and polishing cloth. Natural wood surface, directional window light, macro detail, 4K realism. Clean elegant composition that celebrates handcraft. No text, no watermark.",
    emoji: "👐",
    description: "Manos elaborando la pieza en banco de trabajo."
  },
  {
    title: "Exhibición en muñecas (grid)",
    prompt: "Produce a clean 2x3 grid where each panel shows a different model wrist wearing the input bracelet in showroom style. Consistent soft lighting, neutral backgrounds, diverse skin tones, elegant hand poses. Keep the accessory sharply focused in every panel. 1:1 square grid. No text, no watermark.",
    emoji: "🖼️",
    description: "Seis vistas en muñeca con iluminación homogénea."
  },
  {
    title: "Producto + versículo (tipografía)",
    prompt: "Create a premium product photo of the actual accessory on a clean white/light background and include an elegant Spanish Bible verse as a typographic overlay in a refined serif (moderate size, high contrast). Reserve generous negative space; ensure the accessory remains hero and typography perfectly readable. Color palette chosen to flatter the product. 4K. No watermark.",
    emoji: "📜",
    description: "Producto con una cita bíblica inspiradora en tipografía elegante."
  },
  {
    title: "Cambiar bandera de la pulsera",
    prompt: "Using the input photo, change ONLY the masked flag band on the bracelet to the national flag of {country}. Respect the exact mask region; keep the rest of the image (leather braid, blue cords, tag, clasp, lighting, shadows, background, camera angle) completely unchanged. The new flag must be accurate in colors, stripe order and orientation (e.g., Italy = vertical green on the left, white center, red on the right). Preserve scale, texture and stitching continuity where the band meets the leather. Do not invent extra logos or crests unless the real flag contains them. Ultra‑realistic 4K result, no text, no watermark.",
    emoji: "🚩",
    description: "Reemplaza exclusivamente la bandera por la del país elegido.",
    requiresInputParam: true,
    paramLabel: "País",
    paramPlaceholder: "Italia",
    paramOptions: [
      'España','Italia','Francia','Alemania','Portugal','Países Bajos','Bélgica','Irlanda','Polonia','Austria','Rumanía','Hungría'
    ],
    paramToken: "{country}",
    forceMaskTool: true
  }
];


