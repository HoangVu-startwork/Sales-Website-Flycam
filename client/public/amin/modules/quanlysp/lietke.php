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
    .hinhanh{
        width: 90px;
    }
    img{
        width: 90px;
    }
    .tensanpham{
        width: 160px;
    }
    .masanpham{
        width: 95px;
    }
    .giasanpham{
        width: 95px;
    }
    .soluong{
        width: 70px;
    }
    .tomtat{
        width: 160px;
    }
    .noidungkm{
        width: 360px;
    }
    .phantramkhuyenmai{
        width: 150px;
    } 
    .quanly{
        width: 80px;
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
    $sql_lietke_sp = "SELECT * FROM tbl_sanpham";
    $query_lietke_sp = mysqli_query($mysqli, $sql_lietke_sp);
?>
<table style="width: 100%;" border="1" style="border-collapse: collapse;">
        <tr>
            <th class="id">STT</th>
            <th class="tensanpham">Tên sản phẩm</th>
            <th class="masanpham">Mã sản phẩm</th>
            <th class="giasanpham">Danh mục</th>
            <th class="phantramkhuyenmai">Giá</th>
            <th class="soluong">Số lượng</th>
            <th class="hinhanh">Hình ảnh</th>
            <th class="tomtat">Tình trang</th>
            <th class="noidungkm">Khuyến mãi</th>
            <th class="quanly">Quản lý</th>
        </tr>
        <?php
            $i = 0;
            while($row = mysqli_fetch_array($query_lietke_sp)) {
                $i++;
        ?>
        <tr class="td">
            <td><?php echo $i ?></td>  
            <td><?php echo $row['tensanpham']?></td>     
            <td><?php echo $row['masp'] ?></td>
            <td><?php
                $sql_danhmuc = "SELECT * FROM tbl_danhmuc ORDER BY id_danhmuc DESC";
                $query_danhmuc = mysqli_query($mysqli, $sql_danhmuc);
                while($row_danhmuc = mysqli_fetch_array($query_danhmuc)){
                    if($row_danhmuc['id_danhmuc']==$row['id_danhmuc']){
                        ?>
                    <?php echo $row_danhmuc['tendanhmuc'] ?>
                <?php
                }
                }
                ?></td>
            <td><?php echo $row['gia']?></td>
            <td><?php echo $row['soluongkho']?></td>
            <td class="hinhanh"><img src="modules/quanlysp/uploads/<?php echo $row['hinhanh'] ?>"></td>
            <td><?php
                $sql_danhmuc = "SELECT * FROM tbl_tinhtrang ORDER BY id_tinhtrang DESC";
                $query_danhmuc = mysqli_query($mysqli, $sql_danhmuc);
                while($row_danhmuc = mysqli_fetch_array($query_danhmuc)){
                    if($row_danhmuc['id_tinhtrang']==$row['tinhtrang']){
                        ?>
                    <?php echo $row_danhmuc['tinhtrang'] ?>
                <?php
                }
                }
                ?></td>
                <td><?php echo $row['khuyenmai']?></td>
             <td>
                <a href="modules/quanlysp/xuly.php?iddanhmuc=<?php echo $row['id_danhmuc'] ?>"><input id="nut" type="submit" value="Xóa"></a> <br> 
                <a href="?action=quanlysp&query=sua&idsanpham=<?php echo $row['id_sanpham'] ?>"><input id="nut" type="submit" value="Sửa"></a> <br> 
                <a href="?action=quanlysp&query=chitiet&idsanpham=<?php echo $row['id_sanpham'] ?>"><input id="nut" type="submit" value="Chi tiết"></a>
            </td>
        </tr>

        <?php
            }
        ?>
</table>
</body>
</html>
