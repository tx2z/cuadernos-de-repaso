# Cuadernos de Repaso

Monorepo del sitio **cuadernos-de-repaso.com**: cuadernos de repaso escolar (3º y 4º de
Primaria) para repasar de forma divertida. Sitio estático generado con
[Eleventy](https://www.11ty.dev/), print-first y dislexia-amigable. Sin frameworks de UI.

El dominio es un paraguas: una portada lista los cuadernos y cada cuaderno vive en su
subcarpeta. Cuaderno actual: **Aventuras Históricas** (`/aventuras-historicas/`).

## Comandos

```bash
npm install        # instalar dependencias (una vez)
npm start          # servidor local con recarga → http://localhost:8080
npm run build      # genera el sitio estático en _site/
npm run deploy     # build + publica en Cloudflare Pages (requiere wrangler login)
```

## Estructura

```
src/
  _data/
    cuadernos.json        catálogo de cuadernos para la portada del dominio
    sitio.json            datos globales (contacto, etc.)
  _includes/
    base-sitio.njk        layout de la portada del dominio
    base-cuaderno.njk     layout dentro de un cuaderno (menú, parent gate…)
    about.njk             "Acerca de" (compartido)
    cursos.njk            macro de pills de curso (3º/4º…)
  sistema/                el "sistema" compartido → /sistema/…
    css/estilo.css
    js/cuaderno.js
  index.njk               portada del DOMINIO (catálogo de cuadernos)
  cuadernos/
    aventuras-historicas/
      aventuras-historicas.11tydata.json   datos del cuaderno (slug, base, cursos)
      index.njk           portada del cuaderno (unidades)
      unidades/*.njk      una página de actividades por unidad
      guia/*.njk          una guía de padres por unidad (tras parent gate)
docs/                     fuente: .md de referencia + imágenes (las optimizadas se publican)
_site/                    salida estática (lo que sirve Cloudflare) — ignorado en git
```

URLs: `/` (dominio) · `/aventuras-historicas/` (cuaderno) ·
`/aventuras-historicas/unidades/<slug>/` (actividades) ·
`/aventuras-historicas/guia/<slug>/` (guía de padres).

## Imágenes

Las imágenes viven en `docs/` y se copian al build (`.eleventy.js`) excluyendo las
subcarpetas `originales/` (fuentes sin comprimir, ignoradas en git). Para reoptimizar una
carpeta de imágenes: `python3 docs/optimizar-imagenes.py docs/<unidad>/images`.

> Nota: `docs/` es la carpeta real del contenido. La carpeta `~/Downloads/CLAUDE/cuadernos-verano`
> es un symlink que apunta aquí (acceso cómodo desde Descargas; la fuente de verdad es el repo).

## Añadir contenido

**Unidad nueva en un cuaderno:**
1. `src/cuadernos/<cuaderno>/unidades/<slug>.njk` (front matter: `slug`, `numero`, `epoca`,
   `gancho`, `title`, y `sopa` si aplica) + cuerpo `<div class="hoja">…</div>`.
2. `src/cuadernos/<cuaderno>/guia/<slug>.njk` (guía de padres).
3. Añade el slug a la lista de `unidades` del cuaderno en `.eleventy.js` (copia sus imágenes).

**Cuaderno nuevo:**
1. Carpeta `src/cuadernos/<nuevo>/` con su `*.11tydata.json` (slug, base, cursos), `index.njk`
   y sus `unidades/` + `guia/`.
2. Entrada en `src/_data/cuadernos.json` (con su `cover.png`).
3. Entrada en la lista `CUADERNOS` de `.eleventy.js`.

## Funciones del sitio

- **Selector de curso** 🟦3º / 🟧4º / Todo — se recuerda entre páginas (localStorage).
- **Guía de padres** por unidad, tras un *parent gate* (año de nacimiento, 18+) que se pide
  siempre (no se recuerda).
- **Imprimir / PDF** desde el menú: A4, sin el chrome, sin cortes feos.
- Email de contacto ofuscado (anti-bots): se ensambla en el cliente.

## Licencia

Licencia dual:

- **Código** (plantillas, CSS, JS, configuración) → **MIT** (ver [`LICENSE`](LICENSE)). Uso libre,
  incluido el comercial.
- **Contenido** (textos, ejercicios, guías, imágenes) → **CC BY-NC 4.0**
  (ver [`LICENSE-CONTENT.md`](LICENSE-CONTENT.md)). Compártelo y adáptalo libremente sin ánimo de
  lucro, con atribución a *Jesús Pérez · cuadernos-de-repaso.com*. Para usos comerciales, pide permiso.

## Hecho con

Contenido basado en el currículo LOMLOE (Ciclo 2) y en hechos históricos contrastados,
revisado y validado a mano. Creado con ayuda de IA (Claude).
