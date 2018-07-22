module.exports = {
  lintOnSave: true,
  baseUrl: '/',
  outputDir: 'dist',
  assetsDir: 'public',

  pages: {
    index: {
      entry: 'src/pages/index/index.ts',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },

  runtimeCompiler: false,
  productionSourceMap: false,

  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        includePaths: ['./node_modules']
      }
    }
  },

  devServer: {
    port: '8080',
  },

  pwa: {
    name: 'vue-mb-ui'
  }
}
