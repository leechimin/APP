requirejs(['config'],function(){
    requirejs(['jquery','gdszoom'],function(){
        var c = document.cookie;
            function getCookie(cookie_name){
                var c = document.cookie;
                var cookie_pos = c.indexOf(cookie_name);
                if (cookie_pos != -1)
                {
                    cookie_pos += cookie_name.length + 1; 
                    var cookie_end = c.indexOf(";", cookie_pos);            
                    if (cookie_end == -1)
                    {
                        cookie_end = c.length;
                    }
              
                    var value = unescape(c.substring(cookie_pos, cookie_end)); 
                }
                return value;
            }
            var _name = getCookie("user");
            console.log(_name);
            $('.name').css({'color':'red'})
            $('.name').html(_name)
        var url = window.location.search;
        //console.log(url);
        if(url.indexOf("?") != -1){
            var str = url.substr(1)
        }
        //console.log(str)

        $.ajax({
            url:'js/good.php',
            type:'POST',
            data:{uid:str},
            success:function(data){
                //console.log(data);
                var result=eval("("+data+")");
                //console.log(result);
                var ul = document.createElement('ul');
                ul.innerHTML = result.map((item,idx)=>{
                return `
                                           
                        <div class='pic'><img src='img/${item.imgurl}'></div>
                        <div class='content'>
                            <h4>${item.name}</h4>
                            <p class='price'>￥${item.price}</p>
                            <p class="size">码数:${item.size}</p>
                        </div>   
                       
                `;
                }).join('');
                //$('li').css({'float':'left'})
                $('.good').append(ul);
                //console.log($('.good ul  img'));
                $('.good ul  img').css({'width':'400px','height':'400px'})
                $span = $('<span/>');
                $span.html('寺库价')
                $('.price').prepend($span)
                $p1 = $('<div/>');
                $p1.html('发货地香港 有货 预计7-15个工作日内送达')
                $('.price').append($p1)
                $p2 = $('<div/>');
                $p2.html('温馨提示  本商品无质量问题不支持退换货 ')
                $('.price').append($p2)
                $buy = $('<div/>');
                $buy.html('加入购物车');
                $buy.addClass('buy');
                $('.content').append($buy);
                //放大镜
                $('.pic').gdszoom({width:400,height:400});
                //添加到购物车
                $buy.on('click',function(){
                    //创建节点
                    var $box = $('<div/>');
                    $box.addClass('box');
                    $box.html('添加成功');
                    var $span = $('<span/>');
                    $span.html('&times');
                    $span.addClass('span')
                    $box.append($span);
                    var $box1 = $('<div/>');
                    $box1.html('去购物车');
                    $box1.addClass('box1');
                    $box.append($box1);
                    var $box2 = $('<div/>');
                    $box2.html('继续购买');
                    $box2.addClass('box2');
                    $box.append($box2);
                    //点击继续购买还是到购物车
                    $box1.on('click',function(){
                        window.location.href="buycar.html";  
                    })
                    $box2.on('click',function(){
                        $box.hide();
                    })
                    $('body').append($box);
                    //cookie
                    // 用于保存购物车中的商品列表
                    var carlist = [];
                    //如果cookie有商品则把他赋予数组carlist
                    var cookie=document.cookie.split('; ');
                    cookie.forEach(function(item){
                        var arr=item.split('=');
                        if(arr[0]==='carlist'){
                            carlist=JSON.parse(arr[1]);
                        }
                    });
                    var $content = $(this).parent();
                    for(var i=0;i<carlist.length;i++){
                        if(carlist[i].name === $content.children('h4').html()){
                            carlist[i].quantity++;
                            break;
                        }
                    }
                    //创建一个对象储存商品信息
                    if(i===carlist.length){
                        var obj = {};
                        obj.name = $content.children('h4').html();
                        str = $content.children('.price').text();
                        obj.price = str.substr(3,3)
                        obj.size = $content.children('.size').html();
                        obj.src = $('.pic').children('img').attr('src');
                        obj.quantity = 1;
                        carlist.push(obj);
                    }
                    console.log(carlist)
                    //把商品写进cookie，保存七天
                    var now = new Date();
                    now.setDate(now.getDate()+7);
                    document.cookie='carlist='+JSON.stringify(carlist)+';expires='+now;
                })

            }
        });
    })
})