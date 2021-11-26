module.exports = {
  lintOnSave: false,
  devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      port: 9023,
      hot:true,//自动保存
      // open : true,//自动启动
      hotOnly:true,//热模块替换
      disableHostCheck: true,
      overlay: {
          warning: false,
          errors: false
      },
     
      
  }
} 