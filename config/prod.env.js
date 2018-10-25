const target = process.env.npm_lifecycle_event;　　
if (target == 'test') {　　 //测试　　
	var obj = {　　
		NODE_ENV: '"production"',
		API_ROOT: '"dadaodata.com"',
		API_ROOT_logout: '"http://test1.dadaodata.com/schoollogin.html"',
		API_ROOT_Qiniu: '"http://up-z2.qiniu.com"', //上传七牛地址
		API_ROOT_ImgUrl: '"image.dadaodata.com"', //上传图片
		API_ROOT_DocUrl: '"doc.dadaodata.com"', //上传文件
		API_ROOT_VideoUrl: '"v.dadaodata.com"', //上传视频
	}
} else if (target == 'beta') {　　 //预发布	　　
	var obj = {　　
		NODE_ENV: '"production"',
		API_ROOT: '"dadaozx.com"',
		API_ROOT_logout: '"http://www.dadaozx.com/schoollogin.html"',
		API_ROOT_Qiniu: '"http://up-z2.qiniu.com"', //上传七牛地址
		API_ROOT_ImgUrl: '"image.dadaodata.com"', //上传图片
		API_ROOT_DocUrl: '"doc.dadaodata.com"', //上传文件
		API_ROOT_VideoUrl: '"v.dadaodata.com"', //上传视频　　
	}
} else if (target == 'build') {　　 //线上	　　
	var obj = {　　
		NODE_ENV: '"production"',
		API_ROOT: '"zgxyzx.net"',
		API_ROOT_logout: '"http://www.zgxyzx.net/schoollogin.html"',
		API_ROOT_Qiniu: '"http://up-z2.qiniu.com"', //上传七牛地址
		API_ROOT_ImgUrl: '"image.zgxyzx.net"', //上传图片
		API_ROOT_DocUrl: '"doc.zgxyzx.net"', //上传文件
		API_ROOT_VideoUrl: '"v.zgxyzx.net"', //上传视频		　　
	}
}
module.exports = obj;
