requirejs(['config'],function(){
    requirejs(['jquery','common'],function(){
        $('#username').on('blur',function(){
           var nameval = $('#username').val();
           var reg = /^1(3|5|7|8)\d{9}$/;                   
            if(reg.test(nameval)){
                $('.name').html('')
            }else{
                $('.name').html('请输入手机号')
            }
        })
        $('#password').on('blur',function(){
            var psdval = $('#password').val();
            var reg = /^.{6,20}$/;
            if(reg.test(psdval)){
                $('.psd').html('')
            }else{
                $('.psd').html('密码格式错误')
            }
        })
        $('#password_').on('blur',function(){
            var psdval_ = $('#password_').val();
            var psdval = $('#password').val();
            if( psdval_!=psdval ){
                $('.psd_').html('两次输入的密码不一致')
            }
        }) 
    })        
})