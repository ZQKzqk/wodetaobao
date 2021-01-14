<?php
header('content-type: text/html;charset=utf-8;');
$num1 = $_POST['a'];
$num2 = $_POST['b'];
$num3 = $_POST['c'];




$link = mysqli_connect('localhost','root','root','zqk');


    //插入到表  一条数据
$sql = "INSERT INTO `zqkb` VALUES(null,'$num1','$num2','$num3')";
 
   $res = mysqli_query($link, $sql);


   mysqli_close($link);
    echo ($res)
   
    






?>