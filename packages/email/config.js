/*
|-------------------------------------------------------------------------------
| Development config               https://maizzle.com/docs/environments/#local
|-------------------------------------------------------------------------------
|
| The exported object contains the default Maizzle settings for development.
| This is used when you run the `maizzle build` or `maizzle serve` and it
| has the fastest build time, since most transformations are disabled.
|
*/

module.exports = {
  locals: {
    url: 'http://localhost:8080',
  },
  baseImageURL: 'images/',
  build: {
    templates: {
      source: 'src/templates',
      destination: {
        path: 'compiled_templates',
      },
      assets: {
        source: 'src/assets/images',
        destination: 'images',
      },
    },
    tailwind: {
      css: 'src/assets/css/main.css',
    },
  },
  inlineCSS: {
    enabled: true,
    applySizeAttribute: {
      width: ['IMG'],
      height: ['IMG'],
    },
    keepOnlyAttributeSizes: {
      width: ['IMG', 'VIDEO'],
      height: ['IMG', 'VIDEO'],
    },
  },
  year: () => new Date().getFullYear(),
};
