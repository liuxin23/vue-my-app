const webpack = require('webpack');

process.env.VUE_APP_VERSION = require('./package.json').version;
process.env.VUE_APP_BUILDTIME = String(Date.now());
process.env.VUE_APP_ENV_NAME = process.env.ENV_NAME || 'develop';

module.exports = {
  // configureWebpack: config => {
  //   if (process.env.NODE_ENV === 'production') {
  //     // 为生产环境修改配置...

  //   } else {
  //     // 为开发环境修改配置...
      
  //   }
  // },
  chainWebpack: config => {
    config.plugin('html').tap((args) => {
      if(args.length) {
        args[0] = {
          ...args[0],
          minify: {
            ...args[0].minify,
            minifyJS: true
          },
          template: 'index.html',
          publicPath: '/',
        };
      }
      return args
    })
  }
}