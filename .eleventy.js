// Configuración de Eleventy: entrada en src/, salida en _site/.
// Monorepo de "Cuadernos de Repaso": un sitio por dominio, cada cuaderno en su subcarpeta.
// Las imágenes viven en docs/ (symlink a la fuente) y se copian al sitio del cuaderno
// excluyendo la subcarpeta originales/ (pesada, no se publica).

// Cuadernos del dominio. Cada uno declara su base (subcarpeta) y sus unidades (carpetas en docs/).
const CUADERNOS = [
  {
    base: "aventuras-historicas",
    unidades: [
      "unidad-01-prehistoria",
      "unidad-02-grecia",
      "unidad-03-roma",
      "unidad-04-al-andalus",
      "unidad-05-vikingos",
      "unidad-06-edad-media",
    ],
  },
];

export default function (eleventyConfig) {
  // Sistema compartido (CSS/JS) → /sistema/...
  eleventyConfig.addPassthroughCopy("src/sistema");

  // Imágenes por unidad bajo la subcarpeta del cuaderno. El glob *.png evita la carpeta originales/.
  for (const c of CUADERNOS) {
    // Portada del cuaderno para el catálogo del dominio → /<base>/cover.png
    eleventyConfig.addPassthroughCopy({ [`docs/${c.base}/cover.png`]: `${c.base}/cover.png` });
    for (const u of c.unidades) {
      eleventyConfig.addPassthroughCopy({
        [`docs/${u}/images/*.png`]: `${c.base}/unidades/${u}/images`,
        [`docs/${u}/images/doodles/*.png`]: `${c.base}/unidades/${u}/images/doodles`,
      });
    }
  }

  // Colección de unidades ordenada por número (el menú/portada filtran por cuaderno).
  eleventyConfig.addCollection("unidad", (collectionApi) =>
    collectionApi.getFilteredByTag("unidad").sort((a, b) => a.data.numero - b.data.numero)
  );

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
