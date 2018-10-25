'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
	NODE_ENV: '"development"',
	API_ROOT: '"test.com"',
	API_ROOT_logout: '"http://test1.dadaodata.com/schoollogin.html"',
	API_ROOT_Qiniu: '"http://up-z2.qiniu.com"', //上传七牛地址
	API_ROOT_ImgUrl: '"image.dadaodata.com"', //上传图片
	API_ROOT_DocUrl: '"doc.dadaodata.com"', //上传文件
	API_ROOT_VideoUrl: '"v.dadaodata.com"', //上传视频
	API_TOKEN: '"d7dab0d5a275943037af0260d36f64a0c6e245c65afd27fcad00c"',
})
