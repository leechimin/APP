// 配置文件
requirejs.config({
	//baseUrl:'js',

	// 设置别名
	// 格式：别名:真实路径
	paths:{
		'jquery':'../assets/jquery-3.1.1',
		'gdszoom':'../assets/jquery.gdszoom/jquery.gdszoom'
	},

	shim:{
		'gdszoom':['jquery']
	}
});

