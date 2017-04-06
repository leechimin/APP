<?php  
    $mysql_server_name="localhost"; //数据库服务器名称  
    $mysql_username="root"; // 连接数据库用户名  
    $mysql_password=""; // 连接数据库密码  
    $mysql_database="app"; // 数据库的名字  
      
     // 连接到数据库  
    $conn=new mysqli($mysql_server_name, $mysql_username,  
                        $mysql_password,$mysql_database);  
    if(!$conn) {  
        echo "数据库连接失败！".mysql_error;  
    }  
    mysql_select_db($mysql_database, $conn);  
      
    //获取url参数  
    $action = isset($_POST['action']) ? $_POST['action'] : '';  
    $name = isset($_POST['name']) ? $_POST['name'] : '';  
    $psd = isset($_POST['psd']) ? $_POST['psd'] : '';  
      
    if($action=='login') {  
        login($name, $psd, true);  
    } else if($action=='register') {  
        register($name, $psd);  
    } else {  
        $result = array("result"=>"error_request");  
        $json = json_encode($result);  
        echo $json;  
    }  
      
    close_conn();  
      
    /*用户登录*/  
    function login($name, $psd, $normal) {  
        global $conn;  
          
        if($conn) {  
            $result = mysql_query("select name,psd from student");  
            $success = false;  
            while($row = mysql_fetch_array($result)) {  
                if($name == $row['name'] && $psd == $row['psd']) {  
                    $success = true;  
                }  
            }  
            if($normal) {  
                $login_result = array('login_result'=>$success);  
                $json = json_encode($login_result);  
                echo $json;  
            }  
        }  
        return $success;  
    }  
      
    /*用户注册*/  
    function register($name, $psd) {  
        $tel = $_POST['tel'];         
        global $conn;  
          
        if($conn) {  
            //数据库查询  
            $result = mysql_query("select name from student");  
            $exist = false;  
            while($row = mysql_fetch_array($result)) {  
                if($name == $row['name']) {  
                    //注册失败，用户名已存在;  
                    $exist = true;  
                    $register_result = array("register_result"=>false,"error_code"=>0);  
                    $json = json_encode($register_result);  
                    echo $json;  
                }  
            }  
              
            //插入数据库           
            if(!$exist) {  
                $id = mysql_num_rows($result) + 1;  
                $success = mysql_query("insert into student values('$id', '$name', '$tel', '$psd')");  
                if($success) {  
                    //注册成功  
                    $register_result = array("register_result"=>$success);  
                    $json = json_encode($register_result);  
                    echo $json;  
                } else {  
                    //注册失败，数据库插入错误  
                    $register_result = array("register_result"=>$success,"error_code"=>1);  
                    $json = json_encode($register_result);  
                    echo $json;  
                }  
            }             
        }  
    }  
      
    //关闭连接  
    function close_conn() {  
        global $conn;  
        mysql_close($conn);  
    }  
  
?>  