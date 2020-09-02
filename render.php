<?php
    $str_data = file_get_contents("test.json");
    header('Content-Type: application/json');
    echo $str_data;
?>