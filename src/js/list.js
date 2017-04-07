requirejs(['config'],function(){
    requirejs(['jquery','common'],function(){
        $('.paizi').children('li').on('mouseenter',function(){
            $(this).css({'border':'1px solid black'})
        }).on('mouseleave',function(){
            $(this).css({'border':'1px solid #ccc'})
        })
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
        //加载商品
        $.ajax({  
            type: 'POST',  
            url: 'js/userlist.php',   
            success:successHandle
        })
        function successHandle(data){
            // var result=eval("("+data+")");  
            // alert(result); 
            //console.log(data)
            var result=eval("("+data+")")
            var ul = document.createElement('ul');
            ul.innerHTML = result.map((item,idx)=>{
            return `
                <li>                        
                    <a href="details.html?${item.id}"><img src='img/${item.imgurl}'></a>
                    <h4><a href="details.html">${item.name}</a></h4>
                    <p class="size">码数:${item.size}</p>
                    <p class='price'>￥${item.price}</p>
                </li>
            `;
            }).join('');
            $('li').css({'float':'left'})
            $('.goods').append(ul); 
        }
        //点击分页
        $('.page').on('click','span',function(){
            var page = $(this).html();
            $(this).addClass('active');
            $(this).siblings('span').removeClass('active');
            $('ul').remove();
            $.ajax({  
                type: 'POST',  
                url: 'js/userlist.php', 
                data:{pageNo:page} ,
                success:successHandle
            })
        })
    })        
})