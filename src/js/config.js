// 配置文件
requirejs.config({
	baseUrl:'js',

	// 设置别名
	// 格式：别名:真实路径
	paths:{
		'jquery':'../assets/jquery-3.1.1'
	},

	shim:{
		// 'ajax':{
		// 	exports:'ajax'
		// },
		// 'jQuery.prototype.gdszoom':{
		// 	deps: ["jquery"],
		// 	exports:'jQuery.prototype.gdszoom'
		// }
	}
});

// 引入其他模块
// 在requireJS中，一个模块就是一个js文件
// 引入模块的路径：
requirejs(['jquery','home'],function($,home){
    home.getdata();
	//$('#box');

	//console.log(gdszoom)
});