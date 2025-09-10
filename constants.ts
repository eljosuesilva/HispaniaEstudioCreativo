
import type { Transformation } from './types';

export const TRANSFORMATIONS: Transformation[] = [
  // Viral & Fun Transformations
  { 
title: "Prompt personalizado", 
    prompt: "CUSTOM", 
    emoji: "✍️",
description: "Describe cualquier cambio que imagines. ¡Tu creatividad es el único límite!"
  },
  { 
title: "Figura 3D", 
    prompt: "turn this photo into a character figure. Behind it, place a box with the character’s image printed on it, and a computer showing the Blender modeling process on its screen. In front of the box, add a round plastic base with the character figure standing on it. set the scene indoors if possible", 
    emoji: "🧍",
description: "Convierte tu foto en una figura coleccionable 3D, con su caja incluida."
  },
  { 
title: "Figura Funko Pop", 
    prompt: "Transform the person into a Funko Pop figure, shown inside and next to its packaging.", 
    emoji: "📦",
description: "Reimagina a tu sujeto como una adorable figura Funko Pop! en su caja."
  },
  { 
title: "Minifigura LEGO", 
    prompt: "Transform the person into a LEGO minifigure, inside its packaging box.", 
    emoji: "🧱",
description: "Construye una versión en minifigura LEGO de tu sujeto, lista para jugar."
  },
  { 
title: "Muñeco de crochet", 
    prompt: "Transform the subject into a handmade crocheted yarn doll with a cute, chibi-style appearance.", 
    emoji: "🧶",
description: "Transforma tu imagen en un muñeco de crochet suave y artesanal."
  },
  { 
title: "Ilustración a cosplay", 
    prompt: "Generate a highly detailed, realistic photo of a person cosplaying the character in this illustration. Replicate the pose, expression, and framing.", 
    emoji: "🎭",
description: "Da vida a un personaje de anime como una foto realista de cosplay."
  },
  { 
title: "Peluche tierno", 
    prompt: "Turn the person in this photo into a cute, soft plushie doll.", 
    emoji: "🧸",
description: "Convierte a tu sujeto en un peluche suave y adorable."
  },
  { 
title: "Llavero acrílico", 
    prompt: "Turn the subject into a cute acrylic keychain, shown attached to a bag.", 
    emoji: "🔑",
description: "Crea un llavero acrílico del sujeto, perfecto para colgar en una bolsa."
  },
  
  // Photorealistic & Enhancement
  { 
title: "Mejora HD", 
    prompt: "Enhance this image to high resolution, improving sharpness and clarity.", 
    emoji: "🔍",
description: "Escala tu imagen, añadiendo nitidez, claridad y detalle para un acabado de alta resolución."
  },
  { 
title: "Referencia de pose", 
    prompt: "Apply the pose from the second image to the character in the first image. Render as a professional studio photograph.",
    emoji: "💃",
description: "Aplica una pose de una imagen a un personaje de otra.",
    isMultiImage: true,
primaryUploaderTitle: "Personaje",
primaryUploaderDescription: "El personaje principal",
secondaryUploaderTitle: "Referencia de pose",
secondaryUploaderDescription: "La pose a aplicar",
  },
  { 
title: "A fotorrealista", 
    prompt: "Turn this illustration into a photorealistic version.", 
    emoji: "🪄",
description: "Convierte dibujos o ilustraciones en fotos realistas impresionantes."
  },
  { 
title: "Revista de moda", 
    prompt: "Transform the photo into a stylized, ultra-realistic fashion magazine portrait with cinematic lighting.", 
    emoji: "📸",
description: "Da a tu foto un estilo editorial de alta moda digno de portada."
  },
  { 
title: "Hiperrealista", 
    prompt: "Generate a hyper-realistic, fashion-style photo with strong, direct flash lighting, grainy texture, and a cool, confident pose.", 
    emoji: "✨",
description: "Aplica un estilo de fotografía con flash directo y grano para una vibra hiperrealista."
  },

  // Design & Product
  { 
title: "Maqueta arquitectónica", 
    prompt: "Convert this photo of a building into a miniature architecture model, placed on a cardstock in an indoor setting. Show a computer with modeling software in the background.", 
    emoji: "🏗️",
description: "Transforma un edificio en una detallada maqueta arquitectónica en miniatura."
  },
  { 
title: "Render de producto", 
    prompt: "Turn this product sketch into a photorealistic 3D render with studio lighting.", 
    emoji: "💡",
description: "Convierte un boceto de producto en un render 3D fotorealista con iluminación de estudio."
  },
  { 
title: "Diseño de lata", 
    prompt: "Design a soda can using this image as the main graphic, and show it in a professional product shot.", 
    emoji: "🥤",
description: "Envuelve tu imagen en una lata y muéstrala en una toma de producto profesional."
  },
  { 
title: "Render de diseño industrial", 
    prompt: "Turn this industrial design sketch into a realistic product photo, rendered with light brown leather and displayed in a minimalist museum setting.", 
    emoji: "🛋️",
description: "Renderiza un boceto de diseño industrial como un producto real en un entorno de museo minimalista."
  },

  // Artistic & Stylistic
  { 
title: "Intercambio de paleta de color",
    prompt: "Turn this image into a clean, hand-drawn line art sketch.", // Step 1 prompt
    stepTwoPrompt: "Color the line art using the colors from the second image.", // Step 2 prompt
    emoji: "🎨",
description: "Convierte una imagen a dibujo lineal y luego la colorea usando una segunda imagen como paleta.",
    isMultiImage: true,
    isTwoStep: true,
primaryUploaderTitle: "Imagen original",
primaryUploaderDescription: "La imagen a transformar",
secondaryUploaderTitle: "Paleta de color",
secondaryUploaderDescription: "La referencia de color",
  },
  { 
title: "Dibujo en línea", 
    prompt: "Turn the image into a clean, hand-drawn line art sketch.", 
    emoji: "✍🏻",
description: "Reduce tu foto a sus líneas esenciales, creando un boceto limpio."
  },
  { 
title: "Proceso de pintura", 
    prompt: "Generate a 4-panel grid showing the artistic process of creating this image, from sketch to final render.", 
    emoji: "🖼️",
description: "Muestra una cuadrícula de 4 pasos desde el boceto hasta el resultado final."
  },
  { 
title: "Boceto con rotuladores", 
    prompt: "Redraw the image in the style of a Copic marker sketch, often used in design.", 
    emoji: "🖊️",
description: "Reimagina tu foto como un boceto vibrante hecho con rotuladores Copic."
  },
  { 
title: "Añadir ilustración", 
    prompt: "Add a cute, cartoon-style illustrated couple into the real-world scene, sitting and talking.", 
    emoji: "🧑‍🎨",
description: "Añade encantadores personajes dibujados a mano en tu foto del mundo real."
  },
  { 
    title: "Cyberpunk", 
    prompt: "Transform the scene into a futuristic cyberpunk city.", 
    emoji: "🤖",
description: "Transforma tu escena en una ciudad futurista de neón al estilo cyberpunk."
  },
  { 
title: "Estilo Van Gogh", 
    prompt: "Reimagine the photo in the style of Van Gogh's 'Starry Night'.", 
    emoji: "🌌",
description: "Repinta tu foto con los icónicos trazos ondulantes de 'La noche estrellada'."
  },

  // Utility & Specific Edits
  { 
title: "Aislar y mejorar", 
    prompt: "Isolate the person in the masked area and generate a high-definition photo of them against a neutral background.", 
    emoji: "🎯",
description: "Recorta un sujeto enmascarado y crea un retrato limpio en alta definición."
  },
  { 
title: "Efecto 3D en pantalla", 
    prompt: "For an image with a screen, add content that appears to be glasses-free 3D, popping out of the screen.", 
    emoji: "📺",
description: "Hace que el contenido en una pantalla parezca salir en 3D."
  },
  { 
title: "Análisis de maquillaje", 
    prompt: "Analyze the makeup in this photo and suggest improvements by drawing with a red pen.", 
    emoji: "💄",
description: "Analiza el maquillaje en un retrato y sugiere mejoras con marcaciones en rojo."
  },
  { 
title: "Cambiar fondo", 
    prompt: "Change the background to a Y2K aesthetic style.", 
    emoji: "🪩",
description: "Sustituye el fondo actual por una estética Y2K retro y llamativa."
  },
];