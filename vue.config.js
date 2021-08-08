module.exports = {
  productionSourceMap: false,
  pluginOptions: {
    compression:{
      gzip: {
        filename: '[file].gz[query]',
        algorithm: 'gzip',
        include: /\.(js|css|html|svg|json)(\?.*)?$/i,
        minRatio: 0.8,
        deleteOriginalAssets: true
      }
    }
  },
  //chainWebpack: config => {
  //  config.output.filename(`js/[chunkhash:8].js`);
  //  config.output.chunkFilename(`js/[chunkhash:8].js`);
  //},
  outputDir: "../electrodacus-esp32/data/dist",


  chainWebpack: (config) => {
    config.module
      .rule('images')
      .use('url-loader')
      //.tap(options => Object.assign({}, options, { name: '[hash:8].[ext]' }));
      .tap(options => { options.fallback.options.name = '[hash:8].[ext]'; return options });
  },
  css: {
    extract: {
      filename: '[contenthash:8].css',
      chunkFilename: '[contenthash:8].css',
    },
  },
  configureWebpack: {
    output: {
      filename: '[contenthash:8].js',
      chunkFilename: '[contenthash:8].js'
    }
  }
  
}
