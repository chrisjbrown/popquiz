const path = require('path')
const pkg = require('./package')

module.exports = {
  entry: [
    'src/polyfills.js',
    'src/index.js'
  ],
  html: {
    title: pkg.productName,
    description: pkg.description,
    template: path.join(__dirname, 'index.ejs')
  },
  postcss: {
    plugins: [
      require('tailwindcss')('./tailwind.js'),
      require('autoprefixer')(),
    ]
  },
  presets: [
    require('poi-preset-bundle-report')()
  ],
  webpack: {
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.js'
      }
    }
  }
}
