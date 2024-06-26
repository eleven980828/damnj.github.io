const autoprefixer = require('autoprefixer');
const pxtoviewport = require('postcss-px-to-viewport');

module.exports = {
  lintOnSave: false,
  publicPath: './',
  devServer: {
    // 关闭eslint语法验证
    //overlay: {
     // warning: false,
     // errors: false,
   // },
  },
      //全局变量
      css: {
        loaderOptions: {
          less:{
            lessOptions:{
              javascriptEnabled: true
            }
          },
          postcss: {
            postcssOptions:{
              plugins: [
                autoprefixer(),
                pxtoviewport({
                  viewportWidth: 750,
                  // selectorBlackList: ['ignore', '__KEFU__emoji-'],// 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
                  // minPixelValue: 1,     // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
                  // mediaQuery: false     // 允许在媒体查询中转换`px`
                })
              ]
            }
          },
          scss: {
            prependData: `@import "~@/assets/css/variables.scss";@import "~@/assets/css/mixins.scss";`
          }
        }
      }
  }