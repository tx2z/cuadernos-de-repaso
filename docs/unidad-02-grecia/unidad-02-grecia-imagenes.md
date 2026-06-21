# Unidad 2 — Grecia · Prompts de imagen (Nano Banana 2 / Gemini)

## ⚙️ Cómo generarlas (flujo recomendado)

1. **Todas en la MISMA conversación de Gemini** (no abras un chat por imagen).
2. Genera **primero la PORTADA (IMAGEN-01)**: fija el estilo cómic y la paleta.
3. Las siguientes empiezan con "In the exact same cartoon art style…" para mantener coherencia.
4. Cada prompt ya incluye **formato (aspect ratio)** y **negativos en lenguaje natural** (Gemini no tiene campo de negativo aparte).
5. Si una sale rara, edítala en la misma conversación ("keep everything but make the columns taller").
6. Tras generarlas, pásalas por `optimizar-imagenes.py` (cuantización a 256 colores) como en la Unidad 1.

**Bloque de estilo común** (ya integrado en cada prompt): *funny cartoon comic illustration in the style of a children's history book, bold black outlines, exaggerated expressive cartoon characters, energetic and humorous, bright saturated colors, playful and slightly cheeky tone, hand-drawn comic feel.*

> ⚠️ **Sobre los ideovisuales (IMAGEN-04 y 05):** formar una letra con objetos funciona bien con letras
> rectas (como la H de la Unidad 1), pero la **G** y la **J** son curvas y los generadores fallan. Por eso
> aquí usamos el patrón alternativo que sí funciona: **una letra grande, clara y bien dibujada + un
> personaje temático al lado** (no el cuerpo del personaje formando la letra). Se permite ESA única letra.

---

## IMAGEN-01 — Portada de unidad · formato banner ancho (16:9)

**Coloca en:** encabezado de la unidad (placeholder ~19×6 cm).

```text
Create a wide horizontal banner illustration, aspect ratio 16:9. A giant wooden Trojan horse on wheels standing in front of the tall stone walls and gates of an ancient Greek city; a few funny cartoon Greek soldiers with round shields, crested helmets and spears around it, some peeking out from a little hatch in the horse with cheeky grins; bright Mediterranean daylight, blue sky, cheerful and slightly mischievous mood. Style: funny cartoon comic illustration in the style of a children's history book, bold black outlines, exaggerated expressive cartoon characters, energetic and humorous, bright saturated colors, playful and slightly cheeky tone, hand-drawn comic feel. Do NOT include any text, letters, numbers or watermark anywhere. Avoid photorealism, darkness, blood, gore or anything scary. Safe and friendly for children aged 8-10.
```

---

## IMAGEN-02 — Ilustración del texto (Homero, el poeta ciego) · formato cuadrado (1:1)

**Coloca en:** junto al texto de arranque (placeholder ~8×8 cm).
**Concepto:** Homero recitando de memoria (conecta con "era ciego y lo recitaba todo").

```text
In the exact same cartoon art style, colors and line work as the previous image, create a square illustration, aspect ratio 1:1. A friendly old blind Greek poet (Homer) with a white beard, wearing a soft cloth blindfold band over his eyes (he is blind), a laurel wreath and a flowing tunic, holding a small lyre, reciting with one hand raised and a big expressive smile as if telling an exciting story from memory; two or three cute children sitting on the floor listening with wide amazed eyes; warm sunny Greek setting with a column behind. Style: funny cartoon comic illustration in the style of a children's history book, bold black outlines, exaggerated expressive characters, bright saturated colors, hand-drawn comic feel. Make the blindfold look gentle and natural, like a simple cloth band, never like an injury and never spooky. Do NOT include any text, letters or watermark. Avoid photorealism, darkness or anything scary. Safe for children aged 8-10.
```

---

## IMAGEN-03 — Mapa (Grecia, mar Egeo y Troya) · formato horizontal (4:3)

**Coloca en:** sección Ciencia y Geografía (placeholder ~12×9 cm).
**Importante:** SIN nombres (los niños localizan). El mar ya en azul, la X sobre Troya, y rosa de los vientos.

```text
In the same cartoon art style as the previous images, create a simple illustrated children's map, aspect ratio 4:3. Show a cartoon map of the Aegean region: on the left a peninsula with cute mountain shapes and several small islands scattered in a bright blue sea; on the right the edge of another land (a coast). Place one big red X mark on that right-hand coast (where Troy was). Draw the sea clearly in blue, the land in soft green and sandy colors, little cartoon mountains. Add a small compass rose showing N, S, E, W in one corner. Pastel colors, clean and clear, hand-drawn comic style, bold outlines. Do NOT write any country, city or sea names, labels, text or letters anywhere (only the compass letters N S E W are allowed). Avoid photorealism, satellite look or 3D. Safe for children.
```

---

## IMAGEN-04 — Ideovisual GIGANTE (la G) · formato cuadrado (1:1)

**Coloca en:** sección Ortografía → fichas ideovisuales (placeholder ~7×7 cm).
**Concepto:** una **G** mayúscula grande y clara + un cíclope (gigante de un solo ojo) simpático al lado.

```text
In the same cartoon art style as the previous images, create a square icon-style illustration, aspect ratio 1:1. A single big, bold, clearly drawn capital letter "G" as the central element, colored in bright blue with a thick black outline; next to it a friendly funny one-eyed giant (cyclops) with one big eye, a small smile and a wooden club, leaning on the letter G; simple sunny background. Bold outlines, bright colors, hand-drawn comic feel. The ONLY letter in the image is this single capital G; do NOT add any other text, letters, numbers or watermark. Avoid photorealism, darkness or scary elements; the giant must look cute and friendly. Safe for children.
```

---

## IMAGEN-05 — Ideovisual JINETE (la J) · formato cuadrado (1:1)

**Coloca en:** sección Ortografía → fichas ideovisuales (placeholder ~7×7 cm).
**Concepto:** una **J** mayúscula grande y clara + un jinete griego sobre su caballo al lado.

```text
In the same cartoon art style as the previous images, create a square icon-style illustration, aspect ratio 1:1. A single big, bold, clearly drawn capital letter "J" as the central element, colored in bright orange with a thick black outline; next to it a cheerful cartoon ancient Greek rider (a horseman) sitting on a happy little horse, waving; simple sunny background. Bold outlines, bright colors, hand-drawn comic feel. The ONLY letter in the image is this single capital J; do NOT add any other text, letters, numbers or watermark. Avoid photorealism, darkness or scary elements. Safe for children.
```

---

## IMAGEN-06 — Ilustración de cierre "¡Bien hecho!" · formato cuadrado (1:1)

**Coloca en:** última página de la unidad (placeholder ~7×7 cm).

```text
In the exact same cartoon art style, colors and line work as the previous images, create a small square illustration, aspect ratio 1:1. A happy cute cartoon Greek hero kid wearing a tunic and a small laurel wreath, cheering with both thumbs up and a big smile, with small stars and confetti around; a tiny Greek column beside. Style: funny cartoon comic illustration in the style of a children's history book, bold black outlines, exaggerated expressive character, bright saturated colors, hand-drawn comic feel. Do NOT include any text, letters or watermark. Avoid photorealism, darkness or scary elements. Safe for children.
```

---

## IMAGEN-07 — Hoja de doodles griegos (para decorar secciones) · formato cuadrado (1:1)

**Coloca en:** se recortan en PNG transparentes individuales (como en la Unidad 1) y se reparten por las esquinas de las secciones.
**Concepto:** 6 objetos griegos sueltos, bien separados sobre fondo liso, para recortar fácil.

```text
In the same cartoon art style as the previous images, create a square sheet of 6 separate small doodle icons, aspect ratio 1:1, arranged with clear empty space between them on a plain flat light background (no scene). The six icons: (1) a Greek Doric column, (2) a Corinthian helmet with a crest, (3) a Greek amphora vase, (4) a laurel wreath, (5) a small Greek trireme boat with a sail, (6) a cute owl (owl of Athena). Each icon simple, bold black outlines, bright flat colors, hand-drawn comic feel, well separated so they can be cut out individually. Do NOT include any text, letters, numbers or watermark. Avoid photorealism. Safe for children.
```

---

## Resumen de imágenes de la unidad

| # | Qué | Formato | Dónde |
|---|---|---|---|
| 01 | Portada: caballo de Troya ante la ciudad | 16:9 | Encabezado |
| 02 | Homero, el poeta ciego recitando | 1:1 | Texto de arranque |
| 03 | Mapa Grecia / mar Egeo / Troya (X) | 4:3 | Ciencia y Geografía |
| 04 | Ideovisual GIGANTE (G) + cíclope | 1:1 | Ortografía |
| 05 | Ideovisual JINETE (J) + jinete | 1:1 | Ortografía |
| 06 | Cierre "¡Bien hecho!" | 1:1 | Última página |
| 07 | Hoja de 6 doodles griegos | 1:1 | Decoración (recortar) |
