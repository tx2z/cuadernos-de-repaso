# Unidad 1 — Prehistoria · Prompts de imagen (Nano Banana 2 / Gemini)

## ⚙️ Cómo generarlas (flujo recomendado)

1. **Todas en la MISMA conversación de Gemini** (no abras un chat por imagen).
2. Genera **primero la PORTADA (IMAGEN-01)**: fija el estilo y el personaje del cavernícola.
3. Para las siguientes, el prompt ya empieza con "In the exact same cartoon art style…", así mantiene la coherencia.
4. Cada prompt ya incluye **formato (aspect ratio)** y **negativos en lenguaje natural** (Gemini no tiene campo de negativo aparte).
5. Si una sale rara, edítala en la misma conversación ("keep everything but make the sky brighter").

**Bloque de estilo común** (ya integrado en cada prompt): *funny cartoon comic illustration in the style of a children's history book, bold black outlines, exaggerated expressive cartoon characters, energetic and humorous, bright saturated colors, playful and slightly cheeky tone, hand-drawn comic feel.*

---

## IMAGEN-01 — Portada de unidad · formato banner ancho (16:9)

**Coloca en:** encabezado de la unidad (placeholder ~19×6 cm).

```text
Create a wide horizontal banner illustration, aspect ratio 16:9. A friendly smiling Stone Age iceman explorer wearing a fur coat, holding a copper axe, with a backpack, standing on a snowy alpine mountain; in the background a woolly mammoth, a cave with simple cave paintings, and pine trees; cheerful adventurous mood. Style: funny cartoon comic illustration in the style of a children's history book, bold black outlines, exaggerated expressive cartoon characters, energetic and humorous, bright saturated colors, playful and slightly cheeky tone, hand-drawn comic feel. Do NOT include any text, letters, numbers or watermark anywhere. Avoid photorealism, darkness, blood, gore or anything scary. Safe and friendly for children aged 8-10.
```

---

## IMAGEN-02 — Ilustración del texto de arranque · formato cuadrado (1:1)

**Coloca en:** junto al texto de arranque (placeholder ~8×8 cm).

```text
In the exact same cartoon art style, colors and line work as the previous image, create a square illustration, aspect ratio 1:1. A cute cartoon iceman frozen inside a block of transparent blue ice on a snowy mountain, only partly visible, with a small copper axe beside him; two surprised friendly hikers in modern colorful jackets discovering him and pointing, with funny expressions; bright daylight, gentle and humorous, not scary. Style: funny cartoon comic illustration in the style of a children's history book, bold black outlines, exaggerated expressive characters, bright saturated colors, hand-drawn comic feel. Do NOT include any text, letters or watermark. Avoid photorealism, darkness, blood, gore, real corpses or anything scary. Safe for children aged 8-10.
```

---

## IMAGEN-03 — Mapa (Alpes, frontera Italia-Austria) · formato horizontal (4:3)

**Coloca en:** sección Ciencia y Geografía (placeholder ~12×9 cm).
**Importante:** SIN nombres de países (los niños los rellenan). Solo la rosa de los vientos.

```text
In the same cartoon art style as the previous images, create a simple illustrated children's map, aspect ratio 4:3. Show the outlines of two neighbouring countries meeting at a mountain range; draw the Alps as cute snowy mountain shapes; place one big red X mark on the mountain border; add a small compass rose showing N, S, E, W in one corner. Pastel colors, clean and clear, hand-drawn comic style, bold outlines. Do NOT write any country names, labels, text or letters anywhere (only the compass letters N S E W are allowed). Avoid photorealism, satellite look or 3D. Safe for children.
```

---

## IMAGEN-04 — Ideovisual HIELO (la H muda) · formato cuadrado (1:1)

**Coloca en:** sección Ortografía → fichas ideovisuales (placeholder ~7×7 cm).
**Concepto:** la letra **H** formada por dos columnas de hielo unidas por un puente de nieve.

```text
In the same cartoon art style as the previous images, create a square icon-style illustration, aspect ratio 1:1. Two tall vertical ice columns connected by a horizontal snow bridge in the middle, together clearly forming the shape of the capital letter H; sparkling blue and white frozen ice with a few icicles; a small snowy mountain behind. Bold outlines, bright colors, hand-drawn comic feel. The ONLY shape that may look like a letter is the H made of ice; do NOT add any other text, letters, numbers or watermark. Avoid photorealism, darkness or scary elements. Safe for children.
```

---

## IMAGEN-05 — Ideovisual HUESO (la H muda) · formato cuadrado (1:1)

**Coloca en:** sección Ortografía → fichas ideovisuales (placeholder ~7×7 cm).
**Concepto:** la letra **H** formada por dos huesos verticales unidos por otro hueso horizontal.

```text
In the same cartoon art style as the previous images, create a square icon-style illustration, aspect ratio 1:1. Two tall vertical bones standing upright, connected by a single horizontal bone across the middle, together clearly forming the shape of the capital letter H; clean cartoon bones in cream color; plain simple cave background. Bold black outlines, bright colors, hand-drawn comic feel. The ONLY shape that looks like a letter is the H made of bones; do NOT add any other text, letters, numbers or watermark. Avoid photorealism, darkness or scary elements. Safe for children.
```

---

## IMAGEN-06 — Ilustración de cierre "¡Bien hecho!" · formato cuadrado (1:1)

**Coloca en:** última página de la unidad (placeholder ~7×7 cm).

```text
In the exact same cartoon art style, colors and line work as the previous images, create a small square illustration, aspect ratio 1:1. A happy cute caveman cheering with both thumbs up and a big smile, with small stars and confetti around him, celebrating a job well done. Style: funny cartoon comic illustration in the style of a children's history book, bold black outlines, exaggerated expressive character, bright saturated colors, hand-drawn comic feel. Do NOT include any text, letters or watermark. Avoid photorealism, darkness or scary elements. Safe for children.
```

---

## IMAGEN-07 — Hoja de doodles temáticos · formato cuadrado (1:1)

**Coloca en:** decoración de esquinas y separadores (se recortan individualmente).

```text
In the exact same cartoon art style as the previous images, create a set of 6 separate small simple doodle icons arranged in a grid on a plain white background, with clear empty space between them so each can be cropped on its own: a woolly mammoth, a bone, an arrow, an ice cube, a stone spear, and a cave hand print. Each one a clean sticker-like icon. Style: bold black outlines, bright saturated colors, hand-drawn comic feel, children's history book style. Plain white background, no shadows between icons. Do NOT include any text, letters, numbers or watermark. Safe for children.
```

---

**Otras imágenes de soporte (laberinto, separadores):** NO se generan con Nano Banana. El laberinto "lleva al cazador hasta el mamut" se hace como **SVG real** (resoluble) y los separadores 3º/4º con **CSS**, ambos en la Fase 4.
