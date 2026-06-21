# Unidad 6 — La Edad Media · Prompts de imagen (Nano Banana 2 / Gemini)

## ⚙️ Cómo generarlas (flujo recomendado)

1. **Todas en la MISMA conversación de Gemini** (no abras un chat por imagen).
2. Genera **primero la PORTADA (IMAGEN-01)**: fija el estilo cómic y la paleta.
3. Las siguientes empiezan con "In the exact same cartoon art style…" para mantener coherencia.
4. Cada prompt ya incluye **formato (aspect ratio)** y **negativos en lenguaje natural**.
5. Tras generarlas, pásalas por `optimizar-imagenes.py` y recorta la hoja de doodles (como en U1-U5).

**Bloque de estilo común** (integrado en cada prompt): *funny cartoon comic illustration in the style of a children's history book, bold black outlines, exaggerated expressive cartoon characters, energetic and humorous, bright saturated colors, playful and slightly cheeky tone, hand-drawn comic feel.*

> ⚠️ **Tono:** Edad Media amable y divertida (monjes simpáticos, dibujos de margen graciosos). Nada de
> violencia real, ni símbolos religiosos tratados a la ligera. Los "conejos guerreros" son cómicos, no agresivos.

> ⚠️ **Ideovisuales (IMAGEN-04 y 05):** patrón fiable = **letra grande y clara + objeto temático al lado**.

---

## IMAGEN-01 — Portada de unidad · formato banner ancho (16:9)

**Coloca en:** encabezado de la unidad (placeholder ~19×6 cm).

```text
Create a wide horizontal banner illustration, aspect ratio 16:9. A cozy medieval scriptorium scene: a friendly cartoon monk in a brown robe sitting at a wooden desk, happily copying a big book with a feather quill, surrounded by colorful illuminated manuscripts, candles and pots of ink. In the background, stone arches and a tall castle window with snow outside. In one corner, a tiny funny "warrior rabbit" doodle holding a sword, like the ones monks drew in the margins. Warm candlelight, humorous and friendly mood. Style: funny cartoon comic illustration in the style of a children's history book, bold black outlines, exaggerated expressive cartoon characters, energetic and humorous, bright saturated colors, playful tone, hand-drawn comic feel. Do NOT include any text, letters, numbers or watermark anywhere. Avoid photorealism, darkness or anything scary or violent. Safe and friendly for children aged 8-10.
```

---

## IMAGEN-02 — Ilustración del texto (el monje y el conejo de margen) · formato cuadrado (1:1)

**Coloca en:** junto al texto de arranque (placeholder ~8×8 cm).
**Concepto:** el humor del texto — un monje copiando muy serio mientras, en el margen, un conejo guerrero hace de las suyas.

```text
In the exact same cartoon art style, colors and line work as the previous image, create a square illustration, aspect ratio 1:1. A funny cartoon monk with a tonsure haircut concentrating hard while writing in a big open book with a quill, his fingers looking cold; and right next to him, drawn as if escaping from the margin of the page, a cheeky little cartoon rabbit holding a tiny sword, looking mischievous. Humorous contrast between the serious monk and the silly warrior rabbit. Cozy medieval colors. Style: funny cartoon comic illustration in the style of a children's history book, bold black outlines, expressive characters, bright saturated colors, hand-drawn comic feel. Do NOT include any text, letters, numbers or watermark. Avoid photorealism or anything scary. Safe for children aged 8-10.
```

---

## IMAGEN-03 — Mapa (el Camino de Santiago) · formato horizontal (4:3)

**Coloca en:** sección Ciencia y Geografía (placeholder ~12×9 cm).
**Importante:** SIN nombres (los niños localizan). Península Ibérica, X en el noroeste (Santiago), montañas al noreste (Pirineos), rosa de los vientos.

```text
In the same cartoon art style as the previous images, create a simple illustrated children's map, aspect ratio 4:3. Show a cartoon map of the Iberian Peninsula with the sea around it in bright blue. Place one big red X mark on the north-western corner (where Santiago de Compostela is). Draw a row of little cartoon mountains across the north-east (the Pyrenees) and a dotted path/road going from the north-east mountains across the north towards the X (a pilgrimage route), with tiny footprints or a little pilgrim shell symbol along the way. Land in soft green and sandy colors, little cartoon hills. Add a small compass rose showing N, S, E, W in one corner. Pastel colors, clean and clear, hand-drawn comic style, bold outlines. Do NOT write any country, city or sea names, labels, text or letters anywhere (only the compass letters N S E W are allowed). Avoid photorealism, satellite look or 3D. Safe for children.
```

---

## IMAGEN-04 — Ideovisual LÁPIZ (la Z) · formato cuadrado (1:1)

**Coloca en:** sección Ortografía → fichas ideovisuales (placeholder ~7×7 cm).
**Concepto:** una **Z** mayúscula grande y clara + un lápiz simpático.

```text
In the same cartoon art style as the previous images, create a square icon-style illustration, aspect ratio 1:1. A single big, bold, clearly drawn capital letter "Z" as the central element, colored in bright orange with a thick black outline; next to it a cheerful cartoon wooden pencil with a smiling face, leaning on the letter. Simple background. Bold outlines, bright colors, hand-drawn comic feel. The ONLY letter in the image is this single capital Z; do NOT add any other text, numbers or watermark. Avoid photorealism or scary elements. Safe for children.
```

---

## IMAGEN-05 — Ideovisual PÁGINA (la esdrújula con tilde) · formato cuadrado (1:1)

**Coloca en:** sección Ortografía → fichas ideovisuales (placeholder ~7×7 cm).
**Concepto:** una página de manuscrito iluminado grande y bonita. (La palabra y la tilde se añaden en la maqueta.)

```text
In the same cartoon art style as the previous images, create a square icon-style illustration, aspect ratio 1:1. A big friendly cartoon medieval illuminated manuscript page as the main object: an old parchment page with a large decorated capital letter, colorful swirls, little gold details and a tiny flower in the corner. Simple warm background. Bold outlines, bright colors, hand-drawn comic feel. Do NOT include any readable text, words, letters, numbers or watermark of any kind (the decorated initial should be just an abstract decorative shape, not a readable letter). Avoid photorealism or scary elements. Safe for children. (The word "página" with its accent mark will be added later in the workbook layout.)
```

---

## IMAGEN-06 — Ilustración de cierre "¡Bien hecho!" · formato cuadrado (1:1)

**Coloca en:** última página de la unidad (placeholder ~7×7 cm).

```text
In the exact same cartoon art style, colors and line work as the previous images, create a small square illustration, aspect ratio 1:1. A happy cute cartoon monk child with a tonsure, cheering with both thumbs up and a big smile, holding a small finished illuminated page proudly; small stars and confetti around, and a tiny friendly warrior rabbit celebrating beside. Style: funny cartoon comic illustration in the style of a children's history book, bold black outlines, expressive character, bright saturated colors, hand-drawn comic feel. Do NOT include any text, letters or watermark. Avoid photorealism, darkness or scary elements. Safe for children.
```

---

## IMAGEN-07 — Hoja de doodles medievales · formato cuadrado (1:1)

**Coloca en:** se recortan en PNG transparentes individuales y se reparten por las esquinas de las secciones.

```text
In the same cartoon art style as the previous images, create a square sheet of 6 separate small doodle icons, aspect ratio 1:1, arranged with clear empty space between them on a plain flat light background (no scene). The six icons: (1) a feather quill pen with an ink pot, (2) a closed old book with a decorated cover, (3) a funny little warrior rabbit holding a tiny sword (a medieval margin doodle), (4) a castle tower, (5) a rolled-up scroll, (6) a giant cartoon snail (another classic margin doodle). Each icon simple, bold black outlines, bright flat colors, hand-drawn comic feel, well separated so they can be cut out individually. Do NOT include any text, letters, numbers or watermark. Avoid photorealism or anything scary. Safe for children.
```

---

## Resumen de imágenes de la unidad

| # | Qué | Formato | Dónde |
|---|---|---|---|
| 01 | Portada: scriptorium con monje y conejo de margen | 16:9 | Encabezado |
| 02 | Monje copiando + conejo guerrero del margen | 1:1 | Texto de arranque |
| 03 | Mapa del Camino de Santiago (X en Santiago) | 4:3 | Ciencia y Geografía |
| 04 | Ideovisual LÁPIZ (Z) | 1:1 | Ortografía |
| 05 | Ideovisual PÁGINA (manuscrito iluminado) | 1:1 | Ortografía |
| 06 | Cierre "¡Bien hecho!" | 1:1 | Última página |
| 07 | Hoja de 6 doodles (incluye conejo guerrero y caracol) | 1:1 | Decoración (recortar) |
