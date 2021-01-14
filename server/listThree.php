<?php


$cattwo = $_GET['b'];



 $sql = "SELECT `cat_three_id` FROM `goods` WHERE `cat_two_id`='$cattwo' GROUP BY `cat_three_id`";

$link = mysqli_connect('127.0.0.1', 'root', 'root', 'zqk');
$res = mysqli_query($link, $sql);
$dataThree = mysqli_fetch_all($res, MYSQLI_ASSOC);
mysqli_close($link);



$arr = array(
    "message" => "获取一级列表成功",
    "code" => 1,
    "lit" => $dataThree
  );
 
  echo json_encode($arr);



















?>