<?php
include 'model.php';
$input = $_GET['n'];
$arr = $theDBA->getAllCounties();
echo json_encode($send);
?>