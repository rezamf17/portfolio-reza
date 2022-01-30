module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  transpileDependencies: ['pdfjs-dist'],
  chainWebpack: config => {
    config.module
      .rule("pdf")
      .test(/\.pdf$/)
      .use("file-loader")
      .loader("file-loader");
    }
}
