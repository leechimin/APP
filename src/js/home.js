requirejs(['config'],function(){
    requirejs(['jquery','gdszoom'],function(){
            var $carousel = $('.carousel');
            var $ul = $carousel.children('ul');
            var len = $ul.children().length;
            var index=0;
            //鼠标移入移出
             $carousel.mouseenter(function(){
                clearInterval(timer)
            })
            $carousel.mouseleave(function(){
                timer = setInterval(function(){
                    index++;
                    showPic();
                },2000)
            })
            //自动触发事件trigger()
            //自动触发mouseleave事件
            $carousel.trigger('mouseleave');
            //上一张 下一张
            $('.prev').click(function(){
                
                index--;
                showPic();
            })
            $('.next').click(function(){
                
                index++;
                showPic();
            })
            //页码
            $page = $('<div/>');
            $page.addClass('page')
            for(var i=0;i<len;i++){
                $span = $('<span/>')
                $span.appendTo($page);
                if(i===index){
                    $span.eq(i).addClass('active')
                }
            }
            $page.appendTo( $carousel )
            function showPic(){
                if(index<0){
                    index = len - 1;
                }else if(index > len - 1){
                    index = 0;
                }
                $('.carousel span').eq(index).addClass('active').siblings().removeClass('active')
                $ul.animate({top:-index*400})
            }
            //图片透明度改变
            $('.pic').on('mouseenter','img',function(){
                $(this).animate({
                    'opacity':0.8
                })
            }).on('mouseleave','img',function(){
                $(this).animate({
                    'opacity':1
                })
            })
            //楼梯
            $(window).scroll(function(){    
                var _scrllTop = $(document).scrollTop();
                //console.log(_scrllTop);
                //吸顶菜单
                if(_scrllTop>600){
                    $('#LoutiNav').css('display','block');
                }else{
                    $('#LoutiNav').css('display','none')
                }
                $(".floor div").each(function(){
                        
                        var _top = $(this).offset().top;
                        //console.log(_top)
                        if ( _scrllTop >= _top-100 ) {
                            //console.log(_top);
                            
                            var index = $(this).index();
                            $("#LoutiNav li").eq(index).find("span").removeClass().addClass("active").parent().siblings("li").find("span").removeClass("active"); 
                        }
                })                   
            })
            $('#LoutiNav li').click(function(){
                $(this).find("span").removeClass().addClass("active").parent().siblings().find("span").removeClass("active");
                //console.log($(this).index())
                var idx = $(this).index();
                //console.log(idx)              
                if(idx ==8){
                    $("html, body").stop().animate({scrollTop: 0}, 200);
                }else{
                    var top = $('.floor div').eq(idx).offset().top;
                    //动画效果
                    $("html, body").stop().animate({scrollTop: top}, 200);
                }               
            })
            //
            $('.floor div').on('mouseenter','img',function(){
                $(this).animate({'opacity':0.8})
            }).on('mouseleave','img',function(){
                $(this).animate({'opacity':1})
            })
            $('.movepic').on('mouseenter',function(){
                $(this).children('a').children('img').animate({'left':'30px'});
            }).on('mouseleave',function(){
                $(this).children('a').children('img').animate({'left':'0'});
            })
            //第二层
            //倒计时
            var endDate = new Date('2017/5/1 00:00:00');
            myCountDown();
            var timer1 = setInterval(myCountDown,1000);
            function myCountDown(){
                var now = new Date();
                var offset = Math.floor((endDate.getTime() - now.getTime())/1000);
                var secLeft = offset%60;
                var minLeft = parseInt(offset/60)%60;
                var hourLeft = parseInt(offset/60/60)%24
                var dayLeft = parseInt(offset/60/60/24)
                $('.louti2').children('span').html('剩余时间:'+dayLeft+'天'+hourLeft+'小时'+minLeft+'分'+secLeft+'秒')
            }
            //猜你喜欢
            var $gd = $('.like .gd');
            var l = $gd.children('li').length;
            var i =1;
            $gd.on('mouseenter',function(){
                clearInterval(timer2)
            })
            $gd.on('mouseleave',function(){
                timer2=setInterval(function(){
                    i++;
                    gdpic();
                },1000)
            })
            $gd.trigger('mouseleave');
            function gdpic(){
                if(i<0){
                    i = l - 1;
                }else if(i> l - 1){
                    i = 0;
                }
                $gd.animate({left:-i*215})
            }
    })        
})