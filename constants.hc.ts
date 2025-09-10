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
    prompt: "Isolate the accessory (bracelet, keychain or pendant) and create a high‑end commercial product hero for social media. Present it centered on a pure white seamless background with soft studio lighting, realistic reflections and a gentle soft shadow beneath. 4K detail, crisp edges, dust‑free, no fingerprints. Add subtle brand accent stripes using colors #C60000 and #FFC71F in props or background micro‑details. No text, no watermark.",
    emoji: "🎯",
    description: "Packshot premium en fondo blanco con acentos rojos/amarillos."
  },
  {
    title: "Lifestyle en muñeca",
    prompt: "Place the accessory on a model hand or wrist in a tasteful lifestyle scene. Natural Mediterranean daylight, soft bokeh, warm skin tones, impeccable realism, 4K. Keep the accessory in crisp focus. Use brand color accents (#C60000, #FFC71F) subtly in clothing or props. No text, no watermark.",
    emoji: "🤝",
    description: "Foto realista del accesorio llevado en mano o muñeca."
  },
  {
    title: "Macro de detalle",
    prompt: "Create an extreme macro close‑up of the accessory showing textures of leather, metal and stitching. High contrast micro‑lighting, 4K sharpness, clean specular highlights. Subtle brand color reflection using #C60000 and #FFC71F. No text, no watermark.",
    emoji: "🔎",
    description: "Primerísimo primer plano con texturas perfectas."
  },
  {
    title: "Flat lay minimalista",
    prompt: "Generate a premium flat‑lay composition of the accessory on a neutral #F5F5F5 background with natural soft shadows. Arrange 2–3 minimal props that echo the brand colors #C60000 and #FFC71F. Clean, breathable negative space, 1:1 composition for Instagram. No text, no watermark.",
    emoji: "🧩",
    description: "Composición superior limpia sobre fondo neutro."
  },
  {
    title: "Mármol elegante",
    prompt: "Shoot the accessory on a white Carrara marble slab with soft daylight from the side, clean reflections and premium look. Maintain realistic scale, 4K clarity. Add very subtle brand color hints (#C60000, #FFC71F). No text, no watermark.",
    emoji: "🪨",
    description: "Packshot sobre mármol con luz natural suave."
  },
  {
    title: "Madera cálida",
    prompt: "Place the accessory on warm oak wood with soft window light and natural shadows. Color grade for warmth and sophistication. Preserve true material color; introduce discreet brand accents in #C60000 and #FFC71F. No text, no watermark.",
    emoji: "🪵",
    description: "Packshot sobre madera con look cálido y natural."
  },
  {
    title: "Bandera sutil",
    prompt: "Keep the accessory as the hero and create a tasteful background that subtly references Spain’s flag using soft bands of #C60000 and #FFC71F, very minimal and elegant. High‑end editorial light, 4K. No text, no watermark.",
    emoji: "🇪🇸",
    description: "Fondo con referencia elegante a la bandera."
  },
  {
    title: "Patrón flor de lis",
    prompt: "Design a refined repeating background pattern inspired by the fleur‑de‑lis motif, using #C60000 and #FFC71F on white. Place the accessory centered with clean shadows. Premium luxury look, 4K. No text, no watermark.",
    emoji: "⚜️",
    description: "Motivo de flor de lis sutil y elegante de marca."
  },
  {
    title: "Grid de colección (4 vistas)",
    prompt: "Generate a 4‑panel square grid of the same accessory: (1) hero packshot on white, (2) macro texture detail, (3) lifestyle on wrist, (4) packaging arrangement. Clean and consistent lighting, brand accents in #C60000 and #FFC71F. No text, no watermark.",
    emoji: "🗂️",
    description: "Cuadrícula para mostrar 4 vistas del mismo producto."
  },
  {
    title: "Campaña temporada",
    prompt: "Create a seasonal campaign image for social media: the accessory as hero with celebratory confetti and ribbons colored #C60000 and #FFC71F on a clean white or light background. Keep copy‑space on one side, but do not render any text. 4K cleanliness, no watermark.",
    emoji: "🎉",
    description: "Imagen festiva de campaña con espacio para copy."
  },
  {
    title: "Story vertical 9:16",
    prompt: "Compose a vertical 9:16 Instagram Story style image: the accessory centered with large breathable margins (safe areas), soft gradients of light and brand accents #C60000 / #FFC71F. High‑end commercial look, no text, no watermark.",
    emoji: "📱",
    description: "Composición vertical lista para stories."
  },
  {
    title: "Portada Reels",
    prompt: "Design a punchy cover image for Reels: dark premium backdrop with a soft spotlight, the accessory centered and brightly lit, subtle diagonal accents in #C60000 and #FFC71F. High contrast, 4K, no text, no watermark.",
    emoji: "🎬",
    description: "Imagen impactante tipo portada para reels."
  },
  {
    title: "Lifestyle urbano",
    prompt: "Place the accessory in a stylish outdoor urban Spanish setting (plaza/café) at golden hour. Natural skin tones, soft bokeh, cinematic warmth, 4K realism. Brand accents are subtle in wardrobe or props (#C60000, #FFC71F). No text, no watermark.",
    emoji: "🏙️",
    description: "Escena realista en exterior con look cálido."
  },
  {
    title: "Packaging premium",
    prompt: "Create an elegant packaging mockup: a matte red box (#C60000) with a thin yellow stripe (#FFC71F), open with the accessory resting on a soft cushion. Shoot on a white surface with soft daylight. 4K cleanliness. No text, no watermark.",
    emoji: "🎁",
    description: "Mockup de caja premium con el producto."
  },
  {
    title: "Patrón con logo (multi)",
    prompt: "Use the second image as the brand logo to build a subtle repeating background pattern behind the accessory. Keep the product centered, realistic soft shadows, and color‑tune the pattern to #C60000 and #FFC71F. Clean 4K result. No text, no watermark.",
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
    prompt: "Recolor the fabric or cord elements of the accessory to match the Hispania Colors palette: primary #C60000 and accent #FFC71F. Preserve metals and natural materials, keep realism and texture. High‑end commercial finish, 4K. No text, no watermark.",
    emoji: "🎨",
    description: "Adapta colores del producto a rojo/amarillo corporativos."
  }
  ,
  {
    title: "Mármol con plantas",
    prompt: "Photograph the accessory on a white Carrara marble surface with two small minimalist green plants (succulents or an olive twig) as tasteful props. Soft Mediterranean daylight, gentle shadows, 4K cleanliness. Keep the product hero sharp, add tiny accent hints in #C60000, #FFC71F and a natural green #078930. No text, no watermark.",
    emoji: "🪴",
    description: "Mármol blanco + plantas pequeñas como acento natural."
  },
  {
    title: "Escena marítima mediterránea",
    prompt: "Create a refined maritime still‑life around the accessory: light weathered driftwood, nautical rope, a few seashells and a suggestion of fine sand. Ocean breeze mood, cool daylight with soft warmth, 4K. Keep the accessory in crisp focus, elegant and premium; avoid kitsch. Subtle brand accents #C60000 and #FFC71F. No text, no watermark.",
    emoji: "🌊",
    description: "Naturaleza marina elegante: cuerda náutica, conchas y madera clara."
  },
  {
    title: "Corte de muñeca (camisa formal)",
    prompt: "Tight crop of a wrist wearing the bracelet partially under a crisp formal shirt cuff (white or light blue). Natural soft daylight, shallow depth‑of‑field, clean skin, premium editorial look, 4K. Only show forearm and hand; background neutral. No text, no watermark.",
    emoji: "👔",
    description: "Primer plano de la muñeca con camisa formal."
  },
  {
    title: "Proceso artesano (manos)",
    prompt: "Show artisan hands crafting the bracelet at a workbench: leather cord, needles, thread, small pliers and polishing cloth. Natural wood surface, directional window light, macro detail, 4K realism. Clean and elegant composition that celebrates handcraft. No text, no watermark.",
    emoji: "👐",
    description: "Manos elaborando la pieza en banco de trabajo."
  },
  {
    title: "Exhibición en muñecas (grid)",
    prompt: "Produce a 2x3 grid where each panel shows a different model wrist wearing a Hispania Colors bracelet in a showroom style. Consistent clean lighting, neutral backgrounds, diverse skin tones, elegant poses. Keep the accessory sharply focused in each panel. 1:1 square grid for Instagram. No text, no watermark.",
    emoji: "🖼️",
    description: "Seis vistas en muñeca con iluminación homogénea."
  },
  {
    title: "Producto + versículo (tipografía)",
    prompt: "Create a premium product photo of the accessory on a clean white/light background and include an elegant Spanish Bible verse as a typographic overlay in a refined serif font (moderate size, high contrast, black on white). Example verse: 'Todo lo puedo en Cristo que me fortalece — Filipenses 4:13'. Reserve generous negative space; keep the accessory hero and typography perfectly readable. Subtle brand accents #C60000 / #FFC71F. 4K. No watermark.",
    emoji: "📜",
    description: "Producto con una cita bíblica inspiradora en tipografía elegante."
  }
];


