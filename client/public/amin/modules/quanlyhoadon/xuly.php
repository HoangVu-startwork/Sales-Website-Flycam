<?php 
    include('../../config/config.php');

    $tinhtrang = $_POST['tinhtrang'];
    if(isset($_POST['suasanpham'])){
        // thêm
    $sql_update = "UPDATE tbl_hoadon SET tinhtrang = '" .$tinhtrang. "' WHERE id_hoadon = '$_GET[idhoadon]'";
    mysqli_query($mysqli, $sql_update);
    header('Location:../../index.php?action=quanlyhoadonchuaduyet&query=chitiet');
    }
?>