# Unidad 7 — Imperio Otomano · Prompts de imagen (Nano Banana 2 / Gemini)

## ⚙️ Cómo generarlas (flujo recomendado)

1. **Todas en la MISMA conversación de Gemini** (no abras un chat por imagen).
2. Genera **primero la PORTADA (IMAGEN-01)**: fija el estilo cómic y la paleta.
3. Las siguientes empiezan con "In the exact same cartoon art style…" para mantener coherencia.
4. Cada prompt ya incluye **formato (aspect ratio)** y **negativos en lenguaje natural**.
5. Tras generarlas, pásalas por `optimizar-imagenes.py` y recorta la hoja de doodles (como en U1-U6).

**Bloque de estilo común** (integrado en cada prompt): *funny cartoon comic illustration in the style of a children's history book, bold black outlines, exaggerated expressive cartoon characters, energetic and humorous, bright saturated colors, playful and slightly cheeky tone, hand-drawn comic feel.*

> ⚠️ **Tono:** imperio otomano colorido y respetuoso (mezquitas bonitas con cúpulas y minaretes, el Gran
> Bazar lleno de color, el café). Nada de violencia explícita: la conquista se muestra como ingenio (los
> barcos cruzando la colina), NO como batalla sangrienta. Sin símbolos religiosos tratados a la ligera.

> ⚠️ **Ideovisuales (IMAGEN-04 y 05):** patrón fiable = **letra grande y clara + objeto temático al lado**.

---

## IMAGEN-01 — Portada de unidad · formato banner ancho (16:9)

**Coloca en:** encabezado de la unidad (placeholder ~19×6 cm).

```text
Create a wide horizontal banner illustration, aspect ratio 16:9. A cheerful Ottoman scene of the city of Istanbul: beautiful domed mosques with tall minarets, a busy colorful market (Grand Bazaar) with stalls of spices and carpets, and the blue sea with a sailing ship. In a fun detail, a few cartoon workers cheerfully pulling a wooden ship over a green hill on logs (the famous clever trick), looking proud. Warm sunny colors, lively and friendly mood. Style: funny cartoon comic illustration in the style of a children's history book, bold black outlines, exaggerated expressive cartoon characters, energetic and humorous, bright saturated colors, playful tone, hand-drawn comic feel. Do NOT include any text, letters, numbers or watermark anywhere. Avoid photorealism, darkness, weapons or violence. Respectful and positive, no sacred religious symbols treated lightly. Safe and friendly for children aged 8-10.
```

---

## IMAGEN-02 — Ilustración del texto (los barcos por la colina) · formato cuadrado (1:1)

**Coloca en:** junto al texto de arranque (placeholder ~8×8 cm).
**Concepto:** el momento estrella del texto — arrastrar los barcos por tierra, sobre troncos.

```text
In the exact same cartoon art style, colors and line work as the previous image, create a square illustration, aspect ratio 1:1. A funny and impressive scene: cheerful cartoon workers and oxen pulling a big wooden sailing ship UP and over a green hill, with the ship sliding on rolling wooden logs on the ground. The workers look like they are doing something amazing and a bit crazy. In the background, the blue sea and a domed city. Bright daylight, humorous "we did it!" mood, no violence. Style: funny cartoon comic illustration in the style of a children's history book, bold black outlines, expressive characters, bright saturated colors, hand-drawn comic feel. Do NOT include any text, letters, numbers or watermark. Avoid photorealism or anything scary. Safe for children aged 8-10.
```

---

## IMAGEN-03 — Mapa (Estambul entre dos continentes) · formato horizontal (4:3)

**Coloca en:** sección Ciencia y Geografía (placeholder ~12×9 cm).
**Importante:** SIN nombres (los niños localizan). Dos masas de tierra (Europa y Asia) con un estrecho de mar azul en medio (el Bósforo), X sobre la ciudad, rosa de los vientos.

```text
In the same cartoon art style as the previous images, create a simple illustrated children's map, aspect ratio 4:3. Show a cartoon map of two land masses separated by a narrow strip of blue sea in the middle (a strait). Place one big red X mark right on the strait, where a city sits on BOTH sides of the water (a city on two continents). Draw little domed buildings with minarets at the X to suggest the city. The sea in bright blue with small waves, the land in soft green with little hills, and a few tiny ships on the water. Add a small compass rose showing N, S, E, W in one corner. Pastel colors, clean and clear, hand-drawn comic style, bold outlines. Do NOT write any country, city or sea names, labels, text or letters anywhere (only the compass letters N S E W are allowed). Avoid photorealism, satellite look or 3D. Safe for children.
```

---

## IMAGEN-04 — Ideovisual MEZQUITA (la QUI) · formato cuadrado (1:1)

**Coloca en:** sección Ortografía → fichas ideovisuales (placeholder ~7×7 cm).
**Concepto:** una mezquita bonita (con cúpula y minarete) grande y simpática. (La palabra MEZQUITA y el resalte de "QUI" se añaden en la maqueta.)

```text
In the same cartoon art style as the previous images, create a square icon-style illustration, aspect ratio 1:1. A big friendly cartoon mosque as the main object: a building with a large blue dome and one tall slim minaret, simple decorative patterns, looking cute and welcoming. Simple warm background with a little sun. Bold outlines, bright colors, hand-drawn comic feel. Do NOT include any text, words, letters, numbers or watermark of any kind. Respectful and positive. Avoid photorealism or scary elements. Safe for children. (The word "mezquita" will be added later in the workbook layout.)
```

---

## IMAGEN-05 — Ideovisual GUERRA (la GUE) · formato cuadrado (1:1)

**Coloca en:** sección Ortografía → fichas ideovisuales (placeholder ~7×7 cm).
**Concepto:** evitamos la violencia. Mostramos un **escudo** y un **casco** otomanos decorativos (símbolos de "guerra" sin pelea). La palabra GUERRA y el resalte de "GUE" se añaden en la maqueta.

```text
In the same cartoon art style as the previous images, create a square icon-style illustration, aspect ratio 1:1. A friendly cartoon shield and helmet as the main objects, in an Ottoman decorative style (a round shield with simple patterns and a domed helmet with a small crest), looking like museum pieces, NOT being used to fight. Simple background. Bold outlines, bright colors, hand-drawn comic feel. No violence, no blood, no scared faces. Do NOT include any text, words, letters, numbers or watermark of any kind. Avoid photorealism or scary elements. Safe for children. (The word "guerra" will be added later in the workbook layout.)
```

---

## IMAGEN-06 — Ilustración de cierre "¡Bien hecho!" · formato cuadrado (1:1)

**Coloca en:** última página de la unidad (placeholder ~7×7 cm).

```text
In the exact same cartoon art style, colors and line work as the previous images, create a small square illustration, aspect ratio 1:1. A happy cute cartoon child in cheerful Ottoman-style clothes (a small fez hat and a colorful vest), cheering with both thumbs up and a big smile, holding a tiny cup of coffee; small stars and confetti around, and a little domed mosque and a market stall beside. Style: funny cartoon comic illustration in the style of a children's history book, bold black outlines, expressive character, bright saturated colors, hand-drawn comic feel. Do NOT include any text, letters or watermark. Avoid photorealism, darkness or scary elements. Safe for children.
```

---

## IMAGEN-07 — Hoja de doodles otomanos · formato cuadrado (1:1)

**Coloca en:** se recortan en PNG transparentes individuales y se reparten por las esquinas de las secciones.

```text
In the same cartoon art style as the previous images, create a square sheet of 6 separate small doodle icons, aspect ratio 1:1, arranged with clear empty space between them on a plain flat light background (no scene). The six icons: (1) a mosque with a dome and a minaret, (2) a small cup of Turkish coffee with steam, (3) a rolled-up carpet with patterns, (4) a wooden sailing ship, (5) a tulip flower (a classic Ottoman symbol), (6) a hanging ornamental lamp. Each icon simple, bold black outlines, bright flat colors, hand-drawn comic feel, well separated so they can be cut out individually. Do NOT include any text, letters, numbers or watermark. Avoid photorealism or scary elements. Safe for children.
```

---

## Resumen de imágenes de la unidad

| # | Qué | Formato | Dónde |
|---|---|---|---|
| 01 | Portada: Estambul (mezquitas, bazar, barco en la colina) | 16:9 | Encabezado |
| 02 | Los barcos arrastrados por la colina | 1:1 | Texto de arranque |
| 03 | Mapa: ciudad en dos continentes (X en el estrecho) | 4:3 | Ciencia y Geografía |
| 04 | Ideovisual MEZQUITA (que/qui) | 1:1 | Ortografía |
| 05 | Ideovisual GUERRA (escudo y casco, gue) | 1:1 | Ortografía |
| 06 | Cierre "¡Bien hecho!" (con cafecito) | 1:1 | Última página |
| 07 | Hoja de 6 doodles (mezquita, café, alfombra, barco, tulipán, lámpara) | 1:1 | Decoración (recortar) |
