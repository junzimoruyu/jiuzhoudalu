// const IS_PROD = ['production', 'test'].includes(process.env.NODE_ENV)
module.exports = {
  lintOnSave: false,
  devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      port: 9023,
      hot:true,//自动保存
      // open : true,//自动启动
      hotOnly:false,//热模块替换
      disableHostCheck: true,
      overlay: {
          warning: false,
          errors: false
      },
      // css: {
      //   // 是否使用css分离插件 ExtractTextPlugin
      //   // extract: IS_PROD,
      //   // 开启 CSS source maps?
      //   sourceMap: false,
      //   // css预设器配置项
      //   loaderOptions: {
      //   },
      //   // 启用 CSS modules for all css / pre-processor files.
      //   modules: false,
      // },
      
  },
  chainWebpack: config => {
    // 修复HMR
    config.resolve.symlinks(true);
     
   }
} 