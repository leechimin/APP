requirejs(['config'],function(){
    requirejs(['jquery'],function(){
        $('.paizi').children('li').on('mouseenter',function(){
            $(this).css({'border':'1px solid black'})
        }).on('mouseleave',function(){
            $(this).css({'border':'1px solid #ccc'})
        })
        
    })        
})