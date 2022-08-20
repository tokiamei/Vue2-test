const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // 关闭自动检查
  /* devServer: {
    // 开启代理服务器（方式一）
    // 这种方式存在问题
    // 1.只能给 5000 转发请求 2.不够灵活
    proxy: 'http://localhost:5000'
  } */

  // 开启代理服务器（方式二）
  devServer: {
    proxy: {
      // 请求前缀，只要请求前缀是 5000 服务器，就把请求转发给 5000 服务器
      '/tokiame': {
        target: 'http://localhost:5000',
        // 必须重写路径
        pathRewrite: { "^/tokiame":"" },
        // ws: true, // 用于支持 webSocket
        // changeOrigin: true // 撒谎，假装自己是 5000 服务器，标准解释：用于控制请求头中的 host 值
      },
      '/demo': {
        target: 'http://localhost:5001',
        // 必须重写路径
        pathRewrite: { "^/demo":"" },
        // ws: true, // 用于支持 webSocket
        // changeOrigin: true // 撒谎，假装自己是 5000 服务器，标准解释：用于控制请求头中的 host 值
      }
    }
  }
})
