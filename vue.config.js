const path = require('path')
const resolve = dir => path.join(__dirname, dir)

const publicPath = process.env.NODE_ENV === 'production' ? '/iview-admin/' : '/'

module.exports = {
  lintOnSave: true,
  publicPath: publicPath,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  // 打包时不生成.map 文件
  productionSourceMap: false,
  devServer: {
    proxy: 'http://localhost:4000' // 将任何没有匹配的请求 都带到http://localhost:4000
  }
}
