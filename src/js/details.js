requirejs(['config'],function(){
    requirejs(['jquery','gdszoom'],function(){
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
                    console.log(1)
                    var $box = $('<div/>');
                    $box.addClass('box');
                    $box.html('添加成功');
                    var $box1 = $('<div/>')
                    $('body').append($box);
                })
            }
        });
    })
})