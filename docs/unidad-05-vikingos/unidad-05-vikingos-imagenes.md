# Unidad 5 — Los Vikingos · Prompts de imagen (Nano Banana 2 / Gemini)

## ⚙️ Cómo generarlas (flujo recomendado)

1. **Todas en la MISMA conversación de Gemini** (no abras un chat por imagen).
2. Genera **primero la PORTADA (IMAGEN-01)**: fija el estilo cómic y la paleta.
3. Las siguientes empiezan con "In the exact same cartoon art style…" para mantener coherencia.
4. Cada prompt ya incluye **formato (aspect ratio)** y **negativos en lenguaje natural**.
5. Tras generarlas, pásalas por `optimizar-imagenes.py` y recorta la hoja de doodles (como en U1-U4).

**Bloque de estilo común** (integrado en cada prompt): *funny cartoon comic illustration in the style of a children's history book, bold black outlines, exaggerated expressive cartoon characters, energetic and humorous, bright saturated colors, playful and slightly cheeky tone, hand-drawn comic feel.*

> ⚠️ **Importante (cascos sin cuernos):** los vikingos de las imágenes **NO deben llevar cascos con
> cuernos** (¡es justo el mito que desmontamos!). Cascos redondeados simples, sin cuernos. Tono amable.

> ⚠️ **Runas:** los generadores dibujan fatal los símbolos rúnicos. Solo pedimos runas en el doodle de la
> "piedra rúnica", y como elemento **decorativo** (da igual que no sean exactas). Las runas que deben ser
> correctas (tabla del juego, nombre rúnico) van como texto en el HTML, no en imágenes.

> ⚠️ **Ideovisuales (IMAGEN-04 y 05):** patrón fiable = **letra grande y clara + objeto temático al lado**.

---

## IMAGEN-01 — Portada de unidad · formato banner ancho (16:9)

**Coloca en:** encabezado de la unidad (placeholder ~19×6 cm).

```text
Create a wide horizontal banner illustration, aspect ratio 16:9. A cheerful Viking scene: a beautiful wooden Viking longship (drakkar) with a striped sail and a carved dragon head, sailing on a blue sea near a green coast with mountains and a small Viking farm village with wooden houses. A few friendly cartoon Vikings smiling and waving, some rowing, one combing his beard. Important: their helmets are simple and rounded, with NO horns. Bright daylight, adventurous and friendly mood. Style: funny cartoon comic illustration in the style of a children's history book, bold black outlines, exaggerated expressive cartoon characters, energetic and humorous, bright saturated colors, playful tone, hand-drawn comic feel. Do NOT include any text, letters, numbers or watermark anywhere. No horned helmets. Avoid photorealism, darkness, blood or weapons used in violence. Safe and friendly for children aged 8-10.
```

---

## IMAGEN-02 — Ilustración del texto (un vikingo presumido) · formato cuadrado (1:1)

**Coloca en:** junto al texto de arranque (placeholder ~8×8 cm).
**Concepto:** romper el estereotipo — un vikingo limpio y presumido peinándose la barba (conecta con "no eran sucios").

```text
In the exact same cartoon art style, colors and line work as the previous image, create a square illustration, aspect ratio 1:1. A funny friendly cartoon Viking man happily combing his long braided beard in front of a small mirror, looking proud and clean, with a wooden comb in his hand; behind him a cozy Viking house and a tub of water. His helmet (resting on a table) is simple and rounded with NO horns. Humorous and warm, breaking the "dirty barbarian" stereotype. Style: funny cartoon comic illustration in the style of a children's history book, bold black outlines, expressive characters, bright saturated colors, hand-drawn comic feel. Do NOT include any text, letters, numbers or watermark. No horned helmets. Avoid photorealism or scary elements. Safe for children aged 8-10.
```

---

## IMAGEN-03 — Mapa (Escandinavia y el Atlántico Norte) · formato horizontal (4:3)

**Coloca en:** sección Ciencia y Geografía (placeholder ~12×9 cm).
**Importante:** SIN nombres (los niños localizan). Mar en azul, X sobre Escandinavia/Noruega, rosa de los vientos, e islas al oeste (Islandia, Groenlandia).

```text
In the same cartoon art style as the previous images, create a simple illustrated children's map, aspect ratio 4:3. Show a cartoon map of the North Atlantic and northern Europe: the Scandinavian peninsula on the right with fjords and little mountains, a couple of large islands in the middle of the sea (like Iceland and Greenland) and the edge of another land on the far left. Place one big red X mark on the Scandinavian peninsula. Draw the sea in bright blue with a few simple waves, the land in soft green and white (snow), little cartoon mountains. Add a small compass rose showing N, S, E, W in one corner. Pastel colors, clean and clear, hand-drawn comic style, bold outlines. Do NOT write any country, city or sea names, labels, text or letters anywhere (only the compass letters N S E W are allowed). Avoid photorealism, satellite look or 3D. Safe for children.
```

---

## IMAGEN-04 — Ideovisual ODÍN (la mayúscula) · formato cuadrado (1:1)

**Coloca en:** sección Ortografía → fichas ideovisuales (placeholder ~7×7 cm).
**Concepto:** una **O** mayúscula grande y clara + un Odín simpático (nombre propio → mayúscula).

```text
In the same cartoon art style as the previous images, create a square icon-style illustration, aspect ratio 1:1. A single big, bold, clearly drawn capital letter "O" as the central element, colored in bright blue with a thick black outline; next to it a friendly cartoon version of the Viking god Odin: a kind old man with a long white beard, an eyepatch, a simple rounded helmet with NO horns, and a couple of little cartoon ravens. Simple background. Bold outlines, bright colors, hand-drawn comic feel. The ONLY letter in the image is this single capital O; do NOT add any other text, numbers or watermark. No horned helmet. Avoid photorealism or scary elements; Odin should look friendly. Safe for children.
```

---

## IMAGEN-05 — Ideovisual PEINE (el diptongo EI) · formato cuadrado (1:1)

**Coloca en:** sección Ortografía → fichas ideovisuales (placeholder ~7×7 cm).
**Concepto:** un peine de madera vikingo grande + las letras "ei" destacadas (el diptongo). Conecta con "eran presumidos".

```text
In the same cartoon art style as the previous images, create a square icon-style illustration, aspect ratio 1:1. A big friendly cartoon wooden Viking comb as the main object, decorated with simple carved patterns. Simple warm background. Bold outlines, bright colors, hand-drawn comic feel. Do NOT include any text, letters, numbers or watermark of any kind. Avoid photorealism or scary elements. Safe for children. (The diptongo letters "ei" will be added later in the workbook layout, not in this image.)
```

---

## IMAGEN-06 — Ilustración de cierre "¡Bien hecho!" · formato cuadrado (1:1)

**Coloca en:** última página de la unidad (placeholder ~7×7 cm).

```text
In the exact same cartoon art style, colors and line work as the previous images, create a small square illustration, aspect ratio 1:1. A happy cute cartoon Viking child cheering with both thumbs up and a big smile, wearing a simple rounded helmet with NO horns, with small stars and confetti around; a tiny Viking shield and a little wooden ship beside. Style: funny cartoon comic illustration in the style of a children's history book, bold black outlines, expressive character, bright saturated colors, hand-drawn comic feel. Do NOT include any text, letters or watermark. No horned helmet. Avoid photorealism, darkness or scary elements. Safe for children.
```

---

## IMAGEN-07 — Hoja de doodles vikingos · formato cuadrado (1:1)

**Coloca en:** se recortan en PNG transparentes individuales y se reparten por las esquinas de las secciones.
**Nota:** aquí va la **piedra rúnica** (las runas pueden ser decorativas, no exactas).

```text
In the same cartoon art style as the previous images, create a square sheet of 6 separate small doodle icons, aspect ratio 1:1, arranged with clear empty space between them on a plain flat light background (no scene). The six icons: (1) a Viking longship (drakkar) with a dragon head and a striped sail, (2) a round Viking shield with simple patterns, (3) a simple rounded Viking helmet with NO horns, (4) a standing carved rune stone with a few decorative rune-like marks, (5) a wooden comb, (6) a Viking drinking horn. Each icon simple, bold black outlines, bright flat colors, hand-drawn comic feel, well separated so they can be cut out individually. Do NOT include any readable text, letters, numbers or watermark (the marks on the rune stone are decorative only). No horned helmets. Avoid photorealism. Safe for children.
```

---

## Resumen de imágenes de la unidad

| # | Qué | Formato | Dónde |
|---|---|---|---|
| 01 | Portada: drakkar + granja vikinga (sin cuernos) | 16:9 | Encabezado |
| 02 | Vikingo presumido peinándose la barba | 1:1 | Texto de arranque |
| 03 | Mapa Escandinavia / Atlántico Norte (X) | 4:3 | Ciencia y Geografía |
| 04 | Ideovisual ODÍN (O) + Odín simpático | 1:1 | Ortografía |
| 05 | Ideovisual PEINE (peine de madera) | 1:1 | Ortografía |
| 06 | Cierre "¡Bien hecho!" | 1:1 | Última página |
| 07 | Hoja de 6 doodles (incluye piedra rúnica) | 1:1 | Decoración (recortar) |
