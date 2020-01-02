module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/pantone-colors/'
    : '/',
  configureWebpack: {
    module: {
      rules: [ {
        test: /\.md$/,
       loader: 'raw-loader',
      }]
    }
  }
}