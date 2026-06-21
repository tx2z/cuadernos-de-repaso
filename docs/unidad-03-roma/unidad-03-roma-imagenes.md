# Unidad 3 — Roma · Prompts de imagen (Nano Banana 2 / Gemini)

## ⚙️ Cómo generarlas (flujo recomendado)

1. **Todas en la MISMA conversación de Gemini** (no abras un chat por imagen).
2. Genera **primero la PORTADA (IMAGEN-01)**: fija el estilo cómic y la paleta.
3. Las siguientes empiezan con "In the exact same cartoon art style…" para mantener coherencia.
4. Cada prompt ya incluye **formato (aspect ratio)** y **negativos en lenguaje natural**.
5. Tras generarlas, pásalas por `optimizar-imagenes.py` y recorta la hoja de doodles (como en U1 y U2).

**Bloque de estilo común** (integrado en cada prompt): *funny cartoon comic illustration in the style of a children's history book, bold black outlines, exaggerated expressive cartoon characters, energetic and humorous, bright saturated colors, playful and slightly cheeky tone, hand-drawn comic feel.*

> ⚠️ **Tono:** la unidad es "la Roma asquerosa", pero las imágenes deben ser **graciosas, NO repugnantes**.
> Nada de caca/pis explícito ni cosas que den grima de verdad: el humor va por gestos de "puaj",
> taparse la nariz, etc. Apto para 8-10 años.

> ⚠️ **Ideovisuales (IMAGEN-04 y 05):** patrón fiable = **letra grande, clara y bien dibujada +
> personaje/objeto temático al lado** (no el cuerpo formando la letra). Se permite ESA única letra.

---

## IMAGEN-01 — Portada de unidad · formato banner ancho (16:9)

**Coloca en:** encabezado de la unidad (placeholder ~19×6 cm).

```text
Create a wide horizontal banner illustration, aspect ratio 16:9. A funny scene of ancient Rome: a grand Roman city with columns, arches and a big aqueduct in the background; in the foreground a cheerful cartoon Roman in a toga holding his nose with a playful "pheww" expression, while another happily carries a bucket; a tall stone aqueduct carrying water across the scene. Bright sunny Mediterranean colors, humorous and slightly cheeky mood, nothing gross or dirty shown. Style: funny cartoon comic illustration in the style of a children's history book, bold black outlines, exaggerated expressive cartoon characters, energetic and humorous, bright saturated colors, playful and slightly cheeky tone, hand-drawn comic feel. Do NOT include any text, letters, numbers or watermark anywhere. Avoid photorealism, darkness, and anything genuinely disgusting (no poop, no pee). Safe and friendly for children aged 8-10.
```

---

## IMAGEN-02 — Ilustración del texto (Vespasiano y la moneda) · formato cuadrado (1:1)

**Coloca en:** junto al texto de arranque (placeholder ~8×8 cm).
**Concepto:** el emperador Vespasiano acercando una moneda a la nariz de su hijo ("el dinero no huele"). Gracioso y limpio.

```text
In the exact same cartoon art style, colors and line work as the previous image, create a square illustration, aspect ratio 1:1. A funny cartoon Roman emperor (Vespasian) with a laurel wreath and a purple-edged toga, smiling slyly and holding up a shiny gold coin towards the nose of a younger Roman man, who sniffs it with a curious, slightly puzzled face; warm Roman palace background with a column. Humorous and friendly, clean (nothing gross). Style: funny cartoon comic illustration in the style of a children's history book, bold black outlines, exaggerated expressive characters, bright saturated colors, hand-drawn comic feel. Do NOT include any text, letters, numbers or watermark. Avoid photorealism, darkness or anything disgusting. Safe for children aged 8-10.
```

---

## IMAGEN-03 — Mapa (Roma, Italia, Hispania y el Mediterráneo) · formato horizontal (4:3)

**Coloca en:** sección Ciencia y Geografía (placeholder ~12×9 cm).
**Importante:** SIN nombres (los niños localizan). El mar en azul, la X sobre Roma, rosa de los vientos.

```text
In the same cartoon art style as the previous images, create a simple illustrated children's map, aspect ratio 4:3. Show a cartoon map of the western Mediterranean: the Italian peninsula clearly shaped like a boot in the center, the Iberian peninsula on the left, the coast of North Africa at the bottom, and the blue Mediterranean Sea in the middle with a few small islands. Place one big red X mark on the Italian peninsula (where Rome is). Draw the sea in bright blue, the land in soft green and sandy colors, little cartoon mountains. Add a small compass rose showing N, S, E, W in one corner. Pastel colors, clean and clear, hand-drawn comic style, bold outlines. Do NOT write any country, city or sea names, labels, text or letters anywhere (only the compass letters N S E W are allowed). Avoid photorealism, satellite look or 3D. Safe for children.
```

---

## IMAGEN-04 — Ideovisual CARRO (la RR) · formato cuadrado (1:1)

**Coloca en:** sección Ortografía → fichas ideovisuales (placeholder ~7×7 cm).
**Concepto:** las letras **RR** grandes y claras + un carro romano (cuadriga) tirado por caballos.

```text
In the same cartoon art style as the previous images, create a square icon-style illustration, aspect ratio 1:1. Two big, bold, clearly drawn capital letters "RR" together as the central element, colored in bright orange with thick black outlines; next to them a cheerful cartoon Roman chariot (a small two-wheeled racing cart) pulled by one happy horse, with a smiling Roman driver. Simple sunny background. Bold outlines, bright colors, hand-drawn comic feel. The ONLY letters in the image are these two capital R's; do NOT add any other text, numbers or watermark. Avoid photorealism, darkness or scary elements. Safe for children.
```

---

## IMAGEN-05 — Ideovisual ROMA (la R) · formato cuadrado (1:1)

**Coloca en:** sección Ortografía → fichas ideovisuales (placeholder ~7×7 cm).
**Concepto:** una **R** mayúscula grande y clara + un monumento romano (el Coliseo) al lado.

```text
In the same cartoon art style as the previous images, create a square icon-style illustration, aspect ratio 1:1. A single big, bold, clearly drawn capital letter "R" as the central element, colored in bright blue with a thick black outline; next to it a cute cartoon Roman Colosseum (the round amphitheatre) and a small smiling Roman soldier with a crested helmet waving. Simple sunny background. Bold outlines, bright colors, hand-drawn comic feel. The ONLY letter in the image is this single capital R; do NOT add any other text, numbers or watermark. Avoid photorealism, darkness or scary elements. Safe for children.
```

---

## IMAGEN-06 — Ilustración de cierre "¡Bien hecho!" · formato cuadrado (1:1)

**Coloca en:** última página de la unidad (placeholder ~7×7 cm).

```text
In the exact same cartoon art style, colors and line work as the previous images, create a small square illustration, aspect ratio 1:1. A happy cute cartoon Roman kid wearing a toga and a small laurel wreath, cheering with both thumbs up and a big smile, with small stars and confetti around; a tiny Roman column and a little SPQR-style banner (without readable text) beside. Style: funny cartoon comic illustration in the style of a children's history book, bold black outlines, exaggerated expressive character, bright saturated colors, hand-drawn comic feel. Do NOT include any text, letters or watermark. Avoid photorealism, darkness or scary elements. Safe for children.
```

---

## IMAGEN-07 — Hoja de doodles romanos · formato cuadrado (1:1)

**Coloca en:** se recortan en PNG transparentes individuales y se reparten por las esquinas de las secciones.

```text
In the same cartoon art style as the previous images, create a square sheet of 6 separate small doodle icons, aspect ratio 1:1, arranged with clear empty space between them on a plain flat light background (no scene). The six icons: (1) a Roman legionary helmet with a red crest, (2) a Roman eagle standard (aquila) on a pole, (3) a section of a Roman aqueduct with arches, (4) an amphora jar, (5) a Roman chariot wheel, (6) a laurel wreath. Each icon simple, bold black outlines, bright flat colors, hand-drawn comic feel, well separated so they can be cut out individually. Do NOT include any text, letters, numbers or watermark. Avoid photorealism. Safe for children.
```

---

## Resumen de imágenes de la unidad

| # | Qué | Formato | Dónde |
|---|---|---|---|
| 01 | Portada: Roma con acueducto (humor "puaj") | 16:9 | Encabezado |
| 02 | Vespasiano y la moneda ("el dinero no huele") | 1:1 | Texto de arranque |
| 03 | Mapa Italia / Hispania / Mediterráneo (X en Roma) | 4:3 | Ciencia y Geografía |
| 04 | Ideovisual CARRO (RR) + cuadriga | 1:1 | Ortografía |
| 05 | Ideovisual ROMA (R) + Coliseo | 1:1 | Ortografía |
| 06 | Cierre "¡Bien hecho!" | 1:1 | Última página |
| 07 | Hoja de 6 doodles romanos | 1:1 | Decoración (recortar) |
