<?php

header('content-type: text/html;charset=utf-8;');

$name = $_POST['a'];
$pass = $_POST['b'];
$link = mysqli_connect('localhost','root','root','zqk');
$res=  "SELECT * FROM `zqkb` WHERE `username`='$name' AND `password`='$pass'";
$rr =  mysqli_query($link,$res);
$ana= mysqli_fetch_all($rr,MYSQLI_ASSOC);
mysqli_close($link);

if (count($ana)) {
    $arr = array(
      "message" => "登录成功",
      "code" => 1,
      // 如果登录成功, 把用户的昵称给到前端
      "name" => $ana[0]['nickname']
    );
  } else {
    $arr = array(
      "message" => "登录失败",
      "code" => 0
    );
  };
 
   $jsonstr = json_encode($arr); 
  echo $jsonstr;






?>