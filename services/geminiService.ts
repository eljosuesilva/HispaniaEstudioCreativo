
import { GoogleGenAI, Modality } from "@google/genai";
import type { GeneratedContent } from '../types';

if (!process.env.API_KEY) {
throw new Error("La variable de entorno API_KEY no está definida.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function editImage(
    base64ImageData: string, 
    mimeType: string, 
    prompt: string,
    maskBase64: string | null,
    secondaryImage: { base64: string; mimeType: string } | null
): Promise<GeneratedContent> {
  try {
    let fullPrompt = prompt;
    const parts: any[] = [
      {
        inlineData: {
          data: base64ImageData,
          mimeType: mimeType,
        },
      },
    ];

    // The mask should immediately follow the image it applies to.
    if (maskBase64) {
      parts.push({
        inlineData: {
          data: maskBase64,
          mimeType: 'image/png', // Masks are always drawn as PNGs
        },
      });
      fullPrompt = `Apply the following instruction only to the masked area of the image: "${prompt}". Preserve the unmasked area.`;
    }
    
    if (secondaryImage) {
        parts.push({
            inlineData: {
                data: secondaryImage.base64,
                mimeType: secondaryImage.mimeType,
            },
        });
    }

    parts.push({ text: fullPrompt });

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image-preview',
      contents: { parts },
      config: {
        responseModalities: [Modality.IMAGE, Modality.TEXT],
      },
    });

    const result: GeneratedContent = { imageUrl: null, text: null };

    // Safely access response parts to prevent crashes
    const responseParts = response.candidates?.[0]?.content?.parts;

    if (responseParts) {
      for (const part of responseParts) {
        if (part.text) {
          result.text = (result.text ? result.text + "\n" : "") + part.text;
        } else if (part.inlineData) {
          const base64ImageBytes: string = part.inlineData.data;
          result.imageUrl = `data:${part.inlineData.mimeType};base64,${base64ImageBytes}`;
        }
      }
    }

    if (!result.imageUrl) {
        const finishReason = response.candidates?.[0]?.finishReason;
        const safetyRatings = response.candidates?.[0]?.safetyRatings;
let errorMessage = "El modelo no devolvió una imagen. Es posible que haya rechazado la solicitud. Prueba con una imagen o prompt diferente.";
        
        if (finishReason === 'SAFETY') {
            const blockedCategories = safetyRatings?.filter(r => r.blocked).map(r => r.category).join(', ');
errorMessage = `La solicitud fue bloqueada por motivos de seguridad. Categorías: ${blockedCategories || 'Desconocidas'}. Modifica tu prompt o imagen.`;
        }
        
        throw new Error(errorMessage);
    }

    return result;

  } catch (error) {
console.error("Error al llamar a la API de Gemini:", error);
    if (error instanceof Error) {
        let errorMessage = error.message;
        try {
            // The error message from the SDK might be a JSON string.
            const parsedError = JSON.parse(errorMessage);
            if (parsedError.error && parsedError.error.message) {
                // Add a user-friendly message for common errors.
                if (parsedError.error.status === 'RESOURCE_EXHAUSTED') {
errorMessage = "Probablemente has superado el límite de solicitudes. Espera un momento antes de intentarlo de nuevo.";
                } else if (parsedError.error.code === 500 || parsedError.error.status === 'UNKNOWN') {
errorMessage = "Ocurrió un error inesperado en el servidor. Puede ser temporal. Inténtalo de nuevo en unos momentos.";
                } else {
                    errorMessage = parsedError.error.message;
                }
            }
        } catch (e) {
            // Not a JSON string, use the original message.
        }
        throw new Error(errorMessage);
    }
throw new Error("Ocurrió un error desconocido al comunicarse con la API.");
  }
}
