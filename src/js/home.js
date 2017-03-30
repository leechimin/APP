define(['jquery'],function($){
    return {
        getdata:function(data){
            //导航
            $('.list li').has('ul').css({'position':'relative'})
            $('.list li').has('ul').on('mouseenter',function(){
                $(this).css({'background':'#f5f5f5'})
                $(this).children('a').addClass('hover')
                $(this).children('ul').css({
                    'position':'absolute'
                })
                $(this).children('ul').show();
            }).on('mouseleave',function(){
                $(this).css({'background':'#fff'})
                $(this).children('a').removeClass('hover');
                $(this).children('ul').hide();
            })
            //全部奢品
            $('.allgoods').on('mouseenter',function(){
                $('.content').show()
            }).on('mouseleave',function(){
                $('.content').hide()
            })
            var length = $('.content').children().length
            for(var i=0;i<length;i++){
                if(i%2==0){
                   $('.content div').eq(i).css({'background':'blue'})
                }
            }
            $('.content').on('mouseenter','div',function(){
                // $(this).css({'background':'white','color':'black'})
                $(this).addClass('hover')
                $(this).siblings().children('ul').hide();
                $(this).children('ul').show();
                $(this).children('ul').on('mouseleave',function(){
                    $(this).hide()
                })
            })
            $('.content').on('mouseleave','div',function(){
                $(this).children('ul').hide();
            })
        }
    }
})