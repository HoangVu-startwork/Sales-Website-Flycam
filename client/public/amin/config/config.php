<?php
    $mysqli = new mysqli("localhost","root","","fly_together");
    // Check connection
    if ($mysqli->connect_errno) {
        echo "Kết nối MYSQL lỗi" . $mysqli->connect_errno;
        exit();
    }
?>