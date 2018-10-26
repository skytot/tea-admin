
**后台管理**
============================================================
[![npm (scoped)](https://img.shields.io/badge/npm-%3E=%203.0.0-blue.svg)]()
[![node](https://img.shields.io/badge/node-%3E=4.0.0-brightgreen.svg)]()
[![element](https://img.shields.io/badge/elementui-2.0.3-blue.svg)]()
[![aixos](https://img.shields.io/badge/axios-0.15.3-brightgreen.svg)]()
[![vueRouter](https://img.shields.io/badge/vueRouter-2.3.0-brightgreen.svg)]()
[![eCharts](https://img.shields.io/badge/echarts-3.3.2-red.svg)]()
[![vue](https://img.shields.io/badge/vue-2.5.3-brightgreen.svg)]()
[![vuex](https://img.shields.io/badge/vuex-2.0.0-brightgreen.svg)]()

# 如何开始/To start

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli)

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8014
npm run dev    --开发环境

# build for production with minification
npm run test   --测试环境
npm run beta   --预发布环境
npm run build  --正式环境

```


``` bash
# Folder structure
 build - webpack config files
 config - webpack config files   --配置目录
 dist - build                    --最终发布的代码存放位置
 src                             --the source files/项目文档
    api                          --interface file /接口文件
    assets                       --logo/pic file/图片文件等
    common                       --common file/通用文件
    components                   --Your vue components/项目组件
    mock                         --Mock file/模拟数据文件
    styles                       --Styles file/样式文件
    views                        --Your pages/项目页面
    vuex                         --Large-scale state management/状态管理
    App.vue                      --Page entry file/项目入口文件
    main.js                      --Main file/主文件
    routes.js                    --Single-page application routing/路由文件
 static - static assets
```
# 开发注意/Development
* 本项目基于 [eslint](http://eslint.cn/) 作为开发代码规范，开发前请下载配置文件进行规范开发。
* 开发环境登录token默认使用config/prod.env.js 中token配置；
* 默认开发环境运行端口：8080；


# 分支简介/branch
  *master --主体分支/正式分支

  *develope --开发分支/迭代开发测试

  *v1.* --版本分支/各个版本更新后迭代备份分支/补丁分支

# 样式简介/theme
使用elmentui样式组件库
1. 引入饿了么ui组件 [https://elementui.github.io/theme-preview/#/](https://elementui.github.io/theme-preview/#/)
2. 将样式包置入 src/assets/theme/
3. 在 src/main.js引入

``` bash
   import 'element-ui/lib/theme-default/index.css'
   to
   import './assets/theme/your-theme/index.css'
```


# 浏览器支持/ Browser support

Modern browsers and IE 10+.

# 许可证/ License
[MIT](http://opensource.org/licenses/MIT)
