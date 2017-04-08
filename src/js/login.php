<?php
    //声明变量
    $username = isset($_POST['username'])?$_POST['username']:"";
    $password = isset($_POST['password'])?$_POST['password']:"";
    $remember = isset($_POST['remember'])?$_POST['remember']:"";
    //判断用户名和密码是否为空
    if(!empty($username)&&!empty($password)) {
        //建立连接
        $conn = mysqli_connect('localhost','root','','app');
        //准备SQL语句
        $sql_select = "SELECT username,password FROM user WHERE username = '$username' AND password = '$password'";
        //执行SQL语句
        $ret = mysqli_query($conn,$sql_select);

        $row = mysqli_fetch_array($ret);

        //判断用户名或密码是否正确
        if($username==$row['username']&&$password==$row['password']) {
            //选中“记住我”
            if($remember=="on") {
                //创建cookie
                setcookie("user", $username, time()+7*24*3600);
            }
            //开启session
            session_start();
            //创建session
            $_SESSION['user']=$username;
            // setcookie('username',$row['username'],time()+(60*60*24*30));
            //
            echo "<script>alert('登录成功！')</script>"; 
            header("Location:../index.html");
            //setcookie("username","$username",time()+2*7*24*3600);
            //关闭数据库
            mysqli_close($conn);
        }else {
            //用户名或密码错误，赋值err为1
            echo "<script>alert('用户名或密码不正确！');history.go(-1);</script>";  
        }
    }else {
        //用户名或密码为空，赋值err为2
        echo "<script>alert('提交未成功！'); history.go(-1);</script>";
    }

?>