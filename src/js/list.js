requirejs(['config'],function(){
    requirejs(['jquery','common'],function(){
        $('.paizi').children('li').on('mouseenter',function(){
            $(this).css({'border':'1px solid black'})
        }).on('mouseleave',function(){
            $(this).css({'border':'1px solid #ccc'})
        })
        //加载商品
        $.ajax({  
            type: 'POST',  
            url: 'js/userlist.php',  
            data:{  
                //"username":"admin",  
                //"password":"123456"  
            },  
            success: function (data) {  
                // var result=eval("("+data+")");  
                // alert(result); 
                //console.log(data)
                var result=eval("("+data+")")
                //console.log(result)
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
        })
    })        
})