# Proceso de Creación de Unidades
## Cuaderno de Aventuras Históricas — Flujo de trabajo

Este documento describe el proceso de 4 fases para crear cada unidad.
La **Unidad 1 (Prehistoria)** se construye manualmente para fijar el patrón ("gold standard").
Las unidades 2-10 se generan siguiendo este mismo proceso, en lote o asistidas por agente.

**Documentos de referencia obligatorios:**
- `spec.md` — estructura y reglas del proyecto (10 secciones por unidad)
- `curriculo.md` — contenidos curriculares verificados (LOMLOE) + restricciones

---

## Visión general de las 4 fases

```
FASE 1          FASE 2           FASE 3              FASE 4
El texto   →    Los ejercicios → Complementarios  → Maquetación
(gancho)        (2 niveles)      (imágenes+guía)     (.html web+print)
   ↓               ↓                  ↓                  ↓
 valida tú      valida tú         se derivan        plantilla común
              (sub-pasos)
```

**Principio rector:** el texto de arranque es la *dependencia raíz*. Todo lo demás se
construye sobre él. Por eso se valida PRIMERO y por separado, antes de invertir en ejercicios.

**Cadencia de validación humana (acordada):**

*Para la Unidad 1 (gold standard) se hizo sección a sección. Para las unidades 2-10 se usa el flujo HÍBRIDO, más ágil:*
1. Generar la **historia/gancho** → validar juntos (es la dependencia raíz)
2. (Opcional) repasar a grandes rasgos el **plan de ejercicios** según temario
3. Generar **todos los ejercicios de la unidad de una vez** (las 9 secciones) → validar en bloque
4. Generar **guía del tutor + prompts de imagen** → derivados
5. **Una unidad a la vez:** no se empieza la siguiente hasta validar la actual
6. Al terminar todas, **repaso final por temas** con ajustes pequeños

El gancho se hace conversando (es lo delicado); el resto se genera por lote siguiendo el patrón
de Ötzi y se valida al final. Así se mantiene la calidad sin el coste de ir sección a sección.

---

## FASE 1 — El texto de arranque (el gancho)

### Qué se genera
Solo el texto narrativo de la unidad. Nada más.

### Especificaciones
- 300-400 palabras
- Tono *Horrible Histories*: humor, datos absurdos reales, cercanía
- Incluye: 1 batalla/acontecimiento + 1 dato curioso real + 1 personaje protagonista
- El vocabulario en negrita se marca DESPUÉS, en Fase 2 (cuando se sabe qué usan los ejercicios)

### Criterio de validación (lo decide el humano)
- [ ] ¿Engancha? ¿Daría ganas de seguir leyendo a un niño de 8-10?
- [ ] ¿El tono es el correcto (divertido pero no infantilizado)?
- [ ] ¿Los datos históricos son rigurosos?

### Por qué se hace primero y solo
Es la parte más creativa y difícil de clavar. Si no convence, se itera rápido SIN haber
gastado esfuerzo en ejercicios que habría que rehacer. Una vez aprobado, se congela.

> ⏱️ **Iteración esperada:** 1-3 intentos hasta dar con el tono.

---

## FASE 2 — Los ejercicios (los dos niveles) — POR SUB-PASOS

Las 10 secciones NO se generan de golpe. Se sigue esta cadencia:

### Sub-paso 2.0 — Plan de ejercicios (validación rápida)
Antes de redactar nada en detalle, se propone **a grandes rasgos** qué entra en cada sección
(qué tipo de ejercicio, qué enfoque, qué contenido del temario). El humano valida o ajusta el plan.
Esto evita generar mucho contenido que luego habría que rehacer.

### Sub-paso 2.1 → 2.10 — Sección a sección
Una vez aprobado el plan, se genera **una sección cada vez** y se valida antes de pasar a la siguiente:

1. 🔍 Comprensión lectora
2. ✏️ Ortografía y vocabulario (ficha ideovisual + juego)
3. 🔎 Misión de Investigación
4. 📝 Expresión escrita
5. ➗ Matemáticas
6. 🌍 Ciencia y Geografía
7. 💰 Finanzas
8. 🇬🇧 English
9. 🎲 Zona Extra

(El orden de generación puede agruparse si conviene, pero siempre con validación intermedia.)

### Reglas de la fase
- Seguir al detalle la estructura de `spec.md`
- Respetar TODAS las restricciones (⛔) de `curriculo.md`
- Aplicar principios transversales: siempre con ejemplo, lenguaje dislexia-amigable, lúdico
- Separar bloques con `### 🟦 3º Primaria` / `### 🟧 4º Primaria`
- Marcar el vocabulario en negrita en el texto una vez se sepa cuál usan los ejercicios

### Criterio de validación por sección (lo decide el humano)
- [ ] Cumple su parte del checklist curricular de `curriculo.md`
- [ ] Usa de verdad el texto de la Fase 1 (no es genérico)
- [ ] Dificultad 3º vs 4º bien diferenciada
- [ ] Lleva ejemplo/modelo

### Salida de esta fase
Archivo principal completo: `unidad-XX-nombre-epoca.md`

---

## FASE 3 — Archivos complementarios

### Qué se genera
Dos archivos que se derivan del contenido ya validado:

**3a. Prompts de imagen** → `unidad-XX-nombre-epoca-imagenes.md`
- 4-6 imágenes: portada + ilustración del texto + mapa + 1-2 fichas ideovisuales
- Formato según `spec.md` (ubicación, tamaño en cm, prompt en inglés, prompt negativo)
- Estilo visual SIEMPRE el mismo (coherencia entre unidades)

**3b. Guía del tutor** → `unidad-XX-nombre-epoca-guia.md`
- Soluciones de todos los ejercicios (ambos niveles), incluida sopa/crucigrama
- Qué se busca en cada ejercicio, cómo ayudar sin dar la respuesta
- Errores frecuentes por edad, conceptos clave
- Notas de seguridad para misión digital y experimentos
- Checklist final del tutor

### Salida de esta fase
Carpeta de unidad completa con los 3 archivos `.md`.

---

## FASE 4 — Maquetación a HTML (.html) — imprimible + web

> **Decisión:** la maquetación se hace en **HTML con CSS de impresión** (no Word). Da versión web
> + print-to-PDF de alta calidad y fuente OpenDyslexic embebida. Se ejecuta SOLO cuando las fases
> 1-3 están validadas (puede hacerse con placeholders de imagen y reemplazarlos después).

### Qué se genera
El documento maquetado e imprimible: `unidad-XX-nombre-epoca.html` (+ PDF al exportar)

### Sub-pasos de la Fase 4 (en orden, con validación)
1. **Ideas de maquetación** — proponer 1-2 enfoques de diseño (rejilla de página, aspecto de las cajas
   de ejercicio, portada, separadores 3º/4º) → validar.
2. **Decidir el set de imágenes** — con la maquetación ya en mente, decidir qué imágenes lleva la
   unidad: las **esenciales** (portada, texto, mapa, ideovisuales) + las de **soporte** que aporten
   (alguna entre ejercicios, una para la investigación, doodles sueltos, una de cierre…). Mantenerlo lean.
3. **Generar y validar todas las imágenes** — en Nano Banana 2, **misma conversación**, empezando por
   la portada como ancla de estilo. Validar antes de maquetar.
4. **Generar el HTML** — montar el `.html` con la plantilla, insertando las imágenes ya generadas;
   el laberinto como **SVG** y los separadores con **CSS**.
5. **Exportar** — abrir en el navegador → Imprimir → Guardar como PDF (imprimible) + queda la web.

> Los prompts de las imágenes **esenciales** se redactan ya en Fase 3 (`-imagenes.md`); las de
> **soporte/decorativas** se deciden y añaden aquí (paso 2), al ver la maquetación.

### Plantilla común DISLEXIA-AMIGABLE (se define UNA vez en la Unidad 1, se reutiliza)

La Unidad 1 establece la plantilla maestra. A partir de ahí, TODAS las unidades usan
exactamente el mismo diseño para coherencia visual.

**Elementos fijos de la plantilla:**
- A4 (`@page { size: A4; margin: 2cm; }`), reglas `@media print`, `page-break-inside: avoid`
- Fuente texto: **OpenDyslexic** embebida con `@font-face` (Verdana/Arial fallback), 12-13pt
- Fuente títulos: redondeada (Nunito Bold) — 16pt unidad / 13pt secciones
- Interlineado 1.5, texto alineado a la izquierda (NUNCA justificado), fondo crema
- Paleta (variables CSS): crema `#FAF3E0`, azul `#1D3557`, terracota `#E76F51`, salvia `#6B9080`; 3º `#A8DADC` / 4º `#F4A261`
- Título portada: "Cuaderno de repaso de" (pequeño) + "Aventuras Históricas" (grande)
- Encabezado: nombre del libro + nº unidad · Pie: número de página
- Iconos de sección (📖 🔍 ✏️ 🔎 📝 ➗ 🌍 💰 🇬🇧 🎲)
- Separador visual entre bloques 3º (`.nivel-3`) y 4º (`.nivel-4`)
- Sopas/crucigramas como cuadrículas reales (CSS grid o tabla)
- Placeholders de imagen: `<div>` gris `#E8E8E8` con referencia al prompt → luego `<img>`

### Salida de esta fase
`.html` imprimible (abrir en navegador → Imprimir → Guardar como PDF). Combinable en una web única.
Versiones separables: ocultar `.nivel-4` → libro de 3º; ocultar `.nivel-3` → libro de 4º.

---

## Resumen del ciclo por unidad

| Fase | Genera | Quién valida | Iteración esperada |
|---|---|---|---|
| 1 | Texto de arranque | Humano (tono, gancho, rigor) | Alta (1-3 intentos) |
| 2.0 | Plan de ejercicios | Humano (visión general) | Media |
| 2.1-2.x | Cada sección | Humano (sección a sección) | Media |
| 3 | Imágenes + guía tutor | Humano (soluciones, prompts) | Baja |
| 4 | Documento .html | Humano (formato, impresión) | Baja (plantilla fija) |

---

## Escalado a las unidades 2-10

Una vez la **Unidad 1 esté 100% validada** (las 4 fases), se convierte en el ejemplo de
referencia. Para las siguientes unidades:

1. Un agente lee: `spec.md` + `curriculo.md` + Unidad 1 como ejemplo
2. Genera siguiendo la misma cadencia (historia → plan → secciones)
3. El humano valida (más rápido al haber un estándar claro)
4. Se aplica la plantilla de la Fase 4

**Prompt tipo para el agente:**
```
Genera la Unidad X (Época Y) del Cuaderno de Aventuras Históricas.
- Sigue spec.md al detalle (10 secciones)
- Respeta todas las restricciones de curriculo.md y recorre su checklist
- Usa la Unidad 1 (Prehistoria) como referencia de tono, formato y calidad
- Cadencia: primero la historia (para validar), luego el plan, luego sección a sección
- Genera los 3 archivos .md (principal, imágenes, guía)
- NO generes el .html todavía (eso es fase 4 separada)
```

---

## Registro de decisiones (se va rellenando durante la Unidad 1)

- **Paleta de color del proyecto:** ✅ crema `#FAF3E0` + azul profundo `#1D3557` + terracota `#E76F51` + salvia `#6B9080`; bloques 3º `#A8DADC` / 4º `#F4A261`
- **Nombre definitivo del libro:** ✅ "Cuaderno de repaso de" (pequeño) + **"Aventuras Históricas"** (grande)
- **Tono de referencia:** ✅ fijado en Unidad 1 — caso Ötzi, humor estilo Horrible Histories
- **Estilo visual de las imágenes:** ✅ cómic / Horrible Histories; bloque de estilo común en el archivo de imágenes; generador objetivo Nano Banana (Gemini)
- **Nº exacto de ejercicios por sección:** _(se ajusta tras Unidad 1)_
- **Niveles:** 🟦 3º / 🟧 4º, separables para publicar dos libros
- **Adaptación dislexia:** método ideovisual en ortografía + diseño global dislexia-amigable
- **Inglés:** nivel enriquecido A2-B1 (CLIL), por encima del mínimo
- **Investigación digital:** herramientas reales supervisadas, IA desde unidad 7
- **Formato de maquetación (Fase 4):** ✅ HTML print-first (web + print-to-PDF); docx solo como alternativa
- **Gancho por sección (regla):** cada sección elige su enfoque según el contenido de la época, NO por defecto. Antes de generar los ejercicios de cada unidad se decide: qué dificultad ortográfica (H muda, b/v, g/j, tildes…) y qué gancho de mates (geometría, números grandes/cronología…) encajan mejor con esa época. Referencia Unidad 1 (Prehistoria): ortografía = **H muda** (hielo/hueso, ideovisual); mates = **multiplicación/división** con contexto de caza/tribus; geografía = "la geografía explica la historia"; finanzas = trueque (3º)/oferta-demanda (4º). U2 (Grecia): ortografía = **g/j** (gigante/jinete); mates = **geometría** (perímetro/área).
- **Juego de vocabulario (regla + rotación):** el juego de la sección de ortografía es **COMPARTIDO** (va FUERA de los bloques 3º/4º; lo hacen ambos cursos). Se **rota el tipo** entre unidades para no repetir siempre lo mismo: sopa de letras · crucigrama · letras revueltas (anagrama/scrabble) · y otros futuros (adivina la palabra, mensaje en clave, cadena de palabras). U1 Prehistoria: sopa + crucigrama (compartidos). U2 Grecia: letras revueltas.
- **Mapas (regla):** como el cuaderno se ve en pantalla (HTML), NUNCA pedir "colorea el mapa". El mapa ya viene coloreado y con la X. Se pide **localizar / señalar / buscar** elementos; las respuestas van al cuaderno.
