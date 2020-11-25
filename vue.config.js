/*
 * @Author: chenzhenjin
 * @email: BrotherStudy@163.com
 * @Date: 2020-06-12 13:42:43
 * @LastEditTime: 2020-10-22 12:05:23
 * @Descripttion: 模块描述
 */
const path = require('path')
// const webpack = require('webpack')
const resolve = dir => {
  return path.join(__dirname, dir)
}
module.exports = {
  devServer: {
    disableHostCheck: true,
    host: '192.168.50.49'
  },
  publicPath: './',
  productionSourceMap: true, // 生产环境是否生成 sourceMap 文件
  outputDir: 'dist', // 输出文件目录
  configureWebpack: {
    resolve: { extensions: ['.js', '.vue', '.json', '.css', '.scss'] },
    devtool:
      process.env.NODE_ENV === 'development' && 'cheap-module-eval-source-map'
  },
  css: {
    extract: false, // 是否使用css分离插件 ExtractTextPlugin
    sourceMap: true, // 开启 CSS source maps?
    loaderOptions: {
      scss: {
        // prependData: `@import "@/assets/css/theme.scss"`
        prependData: `@import "~@/assets/css/theme.scss";`
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('js', resolve('src/assets/js'))
      .set('css', resolve('src/assets/css'))
    // config.plugin('provide').use(webpack.ProvidePlugin, [
    //   {
    //     $: 'jquery',
    //     jquery: 'jquery',
    //     jQuery: 'jquery',
    //     'window.jQuery': 'jquery'
    //   }
    // ])
  }
}
