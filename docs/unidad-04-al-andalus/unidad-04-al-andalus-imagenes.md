# Unidad 4 — Al-Ándalus · Prompts de imagen (Nano Banana 2 / Gemini)

## ⚙️ Cómo generarlas (flujo recomendado)

1. **Todas en la MISMA conversación de Gemini** (no abras un chat por imagen).
2. Genera **primero la PORTADA (IMAGEN-01)**: fija el estilo cómic y la paleta.
3. Las siguientes empiezan con "In the exact same cartoon art style…" para mantener coherencia.
4. Cada prompt ya incluye **formato (aspect ratio)** y **negativos en lenguaje natural**.
5. Tras generarlas, pásalas por `optimizar-imagenes.py` y recorta la hoja de doodles (como en U1-U3).

**Bloque de estilo común** (integrado en cada prompt): *funny cartoon comic illustration in the style of a children's history book, bold black outlines, exaggerated expressive cartoon characters, energetic and humorous, bright saturated colors, playful and slightly cheeky tone, hand-drawn comic feel.*

> ⚠️ **Sensibilidad cultural:** es una unidad sobre Al-Ándalus y la convivencia de culturas. Las imágenes
> deben ser **respetuosas y positivas**: arquitectura andalusí bonita (arcos de herradura, azulejos,
> patios), personas sonrientes de distintas culturas. NADA de símbolos religiosos sagrados tratados a la
> ligera, ni estereotipos. Tono amable y de admiración.

> ⚠️ **Ideovisuales (IMAGEN-04 y 05):** patrón fiable = **letra grande, clara y bien dibujada +
> escena/objeto temático al lado** (no el cuerpo formando la letra). Se permite ESA única letra.

---

## IMAGEN-01 — Portada de unidad · formato banner ancho (16:9)

**Coloca en:** encabezado de la unidad (placeholder ~19×6 cm).

```text
Create a wide horizontal banner illustration, aspect ratio 16:9. A beautiful, cheerful scene of the city of Córdoba in Al-Andalus about a thousand years ago: elegant arches with red-and-white horseshoe shapes, a courtyard with a fountain and orange trees, lanterns giving warm light, and a big building full of books in the background. A few friendly cartoon people of different cultures chatting and carrying books, smiling. Warm golden Mediterranean light, peaceful and wondrous mood. Style: funny cartoon comic illustration in the style of a children's history book, bold black outlines, exaggerated expressive cartoon characters, energetic and humorous, bright saturated colors, playful tone, hand-drawn comic feel. Do NOT include any text, letters, numbers or watermark anywhere. Avoid photorealism and darkness. Respectful and positive, no sacred religious symbols. Safe and friendly for children aged 8-10.
```

---

## IMAGEN-02 — Ilustración del texto (los sabios traduciendo juntos) · formato cuadrado (1:1)

**Coloca en:** junto al texto de arranque (placeholder ~8×8 cm).
**Concepto:** tres sabios de culturas distintas traduciendo juntos en la biblioteca (el corazón del texto).

```text
In the exact same cartoon art style, colors and line work as the previous image, create a square illustration, aspect ratio 1:1. Three friendly cartoon scholars of different cultures sitting together around a table covered with open books and scrolls in a beautiful library with horseshoe arches; they are happily working together, one pointing at a book, another writing with a quill, all smiling and cooperating. Warm light, shelves full of books behind them. Respectful and positive, showing teamwork between different cultures. Style: funny cartoon comic illustration in the style of a children's history book, bold black outlines, expressive characters, bright saturated colors, hand-drawn comic feel. Do NOT include any text, letters, numbers or watermark. Avoid photorealism, darkness or sacred religious symbols. Safe for children aged 8-10.
```

---

## IMAGEN-03 — Mapa (Península, Gibraltar, norte de África) · formato horizontal (4:3)

**Coloca en:** sección Ciencia y Geografía (placeholder ~12×9 cm).
**Importante:** SIN nombres (los niños localizan). Mar en azul, X sobre Córdoba, rosa de los vientos, el estrecho marcado.

```text
In the same cartoon art style as the previous images, create a simple illustrated children's map, aspect ratio 4:3. Show a cartoon map of the Iberian Peninsula and the north of Africa, with the narrow strait of Gibraltar clearly visible between them and the blue Mediterranean Sea around. Place one big red X mark on the southern part of the Iberian Peninsula (where Córdoba is). Draw the sea in bright blue, the land in soft green and sandy colors, little cartoon mountains and a couple of rivers. Add a small compass rose showing N, S, E, W in one corner. Pastel colors, clean and clear, hand-drawn comic style, bold outlines. Do NOT write any country, city or sea names, labels, text or letters anywhere (only the compass letters N S E W are allowed). Avoid photorealism, satellite look or 3D. Safe for children.
```

---

## IMAGEN-04 — Ideovisual BIBLIOTECA (la B) · formato cuadrado (1:1)

**Coloca en:** sección Ortografía → fichas ideovisuales (placeholder ~7×7 cm).
**Concepto:** una **B** mayúscula grande y clara + una pila de libros / estantería andalusí.

```text
In the same cartoon art style as the previous images, create a square icon-style illustration, aspect ratio 1:1. A single big, bold, clearly drawn capital letter "B" as the central element, colored in bright blue with a thick black outline; next to it a cheerful tall stack of colorful books and a small bookshelf with horseshoe-arch decoration. Simple warm background. Bold outlines, bright colors, hand-drawn comic feel. The ONLY letter in the image is this single capital B; do NOT add any other text, numbers or watermark. Avoid photorealism, darkness or scary elements. Safe for children.
```

---

## IMAGEN-05 — Ideovisual CONVIVIR (la V) · formato cuadrado (1:1)

**Coloca en:** sección Ortografía → fichas ideovisuales (placeholder ~7×7 cm).
**Concepto:** una **V** mayúscula grande y clara + tres personitas de culturas distintas dándose la mano (convivir).

```text
In the same cartoon art style as the previous images, create a square icon-style illustration, aspect ratio 1:1. A single big, bold, clearly drawn capital letter "V" as the central element, colored in bright green with a thick black outline; next to it three small friendly cartoon children of different cultures standing together and holding hands, smiling (representing living together). Simple warm background. Bold outlines, bright colors, hand-drawn comic feel. The ONLY letter in the image is this single capital V; do NOT add any other text, numbers or watermark. Respectful and positive, no sacred religious symbols. Avoid photorealism or scary elements. Safe for children.
```

---

## IMAGEN-06 — Ilustración de cierre "¡Bien hecho!" · formato cuadrado (1:1)

**Coloca en:** última página de la unidad (placeholder ~7×7 cm).

```text
In the exact same cartoon art style, colors and line work as the previous images, create a small square illustration, aspect ratio 1:1. A happy cute cartoon child in simple medieval Andalusian clothes cheering with both thumbs up and a big smile, with small stars and confetti around; a tiny horseshoe arch and an open book beside. Style: funny cartoon comic illustration in the style of a children's history book, bold black outlines, expressive character, bright saturated colors, hand-drawn comic feel. Do NOT include any text, letters or watermark. Avoid photorealism, darkness or scary elements. Safe for children.
```

---

## IMAGEN-07 — Hoja de doodles andalusíes · formato cuadrado (1:1)

**Coloca en:** se recortan en PNG transparentes individuales y se reparten por las esquinas de las secciones.

```text
In the same cartoon art style as the previous images, create a square sheet of 6 separate small doodle icons, aspect ratio 1:1, arranged with clear empty space between them on a plain flat light background (no scene). The six icons: (1) a horseshoe arch (typical Andalusian arch), (2) an open book, (3) a decorative geometric tile (azulejo) with a star pattern, (4) a small fountain with water, (5) an oil lamp / lantern, (6) an orange tree branch with oranges. Each icon simple, bold black outlines, bright flat colors, hand-drawn comic feel, well separated so they can be cut out individually. Do NOT include any text, letters, numbers or watermark. Avoid photorealism and sacred religious symbols. Safe for children.
```

---

## Resumen de imágenes de la unidad

| # | Qué | Formato | Dónde |
|---|---|---|---|
| 01 | Portada: Córdoba (arcos, patio, biblioteca) | 16:9 | Encabezado |
| 02 | Tres sabios traduciendo juntos | 1:1 | Texto de arranque |
| 03 | Mapa Península / Gibraltar / África (X en Córdoba) | 4:3 | Ciencia y Geografía |
| 04 | Ideovisual BIBLIOTECA (B) + libros | 1:1 | Ortografía |
| 05 | Ideovisual CONVIVIR (V) + tres niños | 1:1 | Ortografía |
| 06 | Cierre "¡Bien hecho!" | 1:1 | Última página |
| 07 | Hoja de 6 doodles andalusíes | 1:1 | Decoración (recortar) |
