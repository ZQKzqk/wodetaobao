<?php


$catone = $_GET['a'];



 $sql = "SELECT `cat_two_id` FROM `goods` WHERE `cat_one_id`='$catone' GROUP BY `cat_two_id`";

$link = mysqli_connect('127.0.0.1', 'root', 'root', 'zqk');
$res = mysqli_query($link, $sql);
$dataTwo = mysqli_fetch_all($res, MYSQLI_ASSOC);
mysqli_close($link);



$arr = array(
    "message" => "获取一级列表成功",
    "code" => 1,
    "lis" => $dataTwo
  );
 
  echo json_encode($arr);















?>