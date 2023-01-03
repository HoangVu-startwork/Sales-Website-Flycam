<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    html{
        font-size: 75%;
    }
    .di{
        width: 90px;
    }
    .ngay{
        width: 460px;
    }
    .masanpham{
        width: 95px;
    }
    .giasanpham{
        width: 95px;
    }
    .diachi{
        width: 500px;
    }
    #nut{
        width: 100px;
        float: left;
        margin: 4px;
    }
</style>
</head>
<body>
<?php
    $sql_lietke_sp = "SELECT * FROM tbl_hoadon";
    $query_lietke_sp = mysqli_query($mysqli, $sql_lietke_sp);
?>
<table style="width: 100%;" border="1" style="border-collapse: collapse;">
        <tr>
            <th class="id">STT</th>
            <th class="ngay">Ngày lặp hoá đơn</th>
            <th class="giasanpham">Tổng tiền</th>
            <th class="diachi">Địa chỉ giao hàng</th>

        </tr>
        <?php
            $i = 0;
            while($row = mysqli_fetch_array($query_lietke_sp)) {
                $i++;
        ?>
        <tr class="td">
            <td><?php echo $i ?></td>  
            <td><?php echo $row['ngay']?></td>     
            <td><?php echo $row['tien'] ?></td>
            <td><?php echo $row['diachigiaohang'] ?></td>
             <td>
                <a href="?action=quanlyhoadonchuaduyet&query=sua&id_hoadon=<?php echo $row['id_hoadon'] ?>"><input id="nut" type="submit" value="Sửa"></a> <br> 
                <a href="?action=quanlyhoadon&query=chitiet&idsanpham=<?php echo $row['id_sanpham'] ?>"><input id="nut" type="submit" value="Chi tiết"></a>
            </td>
        </tr>

        <?php
            }
        ?>
</table>
</body>
</html>
