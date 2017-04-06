<?php
	include 'connect.php';

	//获取前端得到的数据
     $username = isset($_POST['username']) ? $_POST['username'] : '';  
     $password = isset($_POST['password ']) ? $_POST['password '] : '';  
     echo $username;
	// 查询数据
	$sql = 'select * from user'; 
	//order by age desc limit '. ($page-1)*2 .',2';

	//查询前设置编码，放置输出乱码
	$result = $conn->query('set names utf8');

	// 查询数据库获取数据
	$result = $conn->query($sql);

    

	//使用查询结果集
	$row = $result->fetch_all(MYSQLI_ASSOC);


	echo json_encode($row,JSON_UNESCAPED_UNICODE);
    // $sql = "SELECT id, username, password FROM user";
    // $result = $conn->query($sql);

    // if ($result->num_rows > 0) {
    // // 输出每行数据
    //     while($row = $result->fetch_assoc()) {
    //         echo "id: ". $row["id"]. " userame: ". $row["username"]."  password:". $row["password"];
    //     }
    // } else {
    //    echo "0 个结果";
    // }



?>