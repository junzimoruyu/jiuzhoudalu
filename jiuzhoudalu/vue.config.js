module.exports = {
  lintOnSave: false,
  devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      hot:true,//自动保存
      // open : true,//自动启动
      hotOnly:false,//热模块替换
      overlay: {
          warning: false,
          errors: false
      },
     
      
  }
} 