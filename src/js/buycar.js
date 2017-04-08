requirejs(['config'],function(){
    requirejs(['jquery','gdszoom'],function(){
        //用一个数组来拿取cookie中的商品
        var carList = [];
        var cookie = document.cookie.split('; ');
        cookie.forEach(function(item){
            var arr = item.split('=');
            if(arr[0]==='carlist'){
                carList=JSON.parse(arr[1]);
            }
        })
        //console.log(carList);
        var $tbody = $('<tbody/>');
        var sum = 0;
        carList.forEach(function(goods){
            var $tr = $('<tr/>');
            //商品图片
            var $td = $('<td/>');
            var $img = $('<img/>');
            $img.attr('src',goods.src);
            $img.css({'width':'82px','height':'82px'})
            $td.append($img);
            $tr.append($td);
            //商品名称
            var $td1 = $('<td/>');
            $td1.html(goods.name);
            $tr.append($td1);
            //尺码
            var $td2 = $('<td/>');
            $td2.html(goods.size);
            $tr.append($td2);
            //价格
            var $td3 = $('<td/>');
            $td3.html(goods.price);
            $tr.append($td3);
            //数量
            var $td4 = $('<td/>');
            $td4.html(goods.quantity);
            $tr.append($td4);
            //金额小计
            var $td5 = $('<td/>');
            var str = goods.price;
            var t = str.substr(str.length-2,2);
            var mon = eval(t*goods.quantity);
            sum += mon;
            $td5.html(mon);
            $tr.append($td5);
            //操作
            var $td6 = $('<td/>');
            var $button = $('<button/>');
            $button.html('删除');
            $td6.append($button); 
            $tr.append($td6);

            $tbody.append($tr)
        })
        console.log(sum)
        $('.sum').html('合计:'+sum) 
        //$('.sum').hmtl(sum);
        $('table').append($tbody);
        $('tr').on('click','button',function(){
           var $del = $(this).parent().parent().children('td').get(1);
            //console.log($del.innerText);
            var ck = document.cookie;
           // console.log(ck);
            var carlist = [];
            //如果cookie有商品则把他赋予数组carlist
            var cookie=document.cookie.split('; ');
            cookie.forEach(function(item){
                var arr=item.split('=');
                if(arr[0]==='carlist'){
                    carlist=JSON.parse(arr[1]);
                }
            });
            // console.log(carlist);
            for(var i=0;i<carlist.length;i++){
                if(carlist[i].name === $del.innerText){
                    console.log(carlist[i])
                    carlist.splice(i,1) 
                }
            }
            console.log(carlist);
            var now = new Date();
            now.setDate(now.getDate()+7);
            document.cookie='carlist='+JSON.stringify(carlist)+';expires='+now;
            $('tbody').remove();
            var $tbody = $('<tbody/>');
            carList.forEach(function(goods){
                var $tr = $('<tr/>');
                //商品图片
                var $td = $('<td/>');
                var $img = $('<img/>');
                $img.attr('src',goods.src);
                $img.css({'width':'82px','height':'82px'})
                $td.append($img);
                $tr.append($td);
                //商品名称
                var $td1 = $('<td/>');
                $td1.html(goods.name);
                $tr.append($td1);
                //尺码
                var $td2 = $('<td/>');
                $td2.html(goods.size);
                $tr.append($td2);
                //价格
                var $td3 = $('<td/>');
                $td3.html(goods.price);
                $tr.append($td3);
                //数量
                var $td4 = $('<td/>');
                $td4.html(goods.quantity);
                $tr.append($td4);
                //金额小计
                var $td5 = $('<td/>');
                var str = goods.price;
                var t = str.substr(str.length-2,2)
                var mon = eval(t*goods.quantity)
                $td5.html(mon)
                $tr.append($td5);
                //操作
                var $td6 = $('<td/>');
                var $button = $('<button/>');
                $button.html('删除');
                $td6.append($button); 
                $tr.append($td6);

                $tbody.append($tr)
            })
            $('table').append($tbody);
            //重新刷新页面
            window.location.reload();
        })
    })
})