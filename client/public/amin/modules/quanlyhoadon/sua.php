<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    html{
        font-size: 85%;
    }
    input{
        width: 100%;
        height: 30px;
        font-size: 20px;
    }
</style>
</head>
<body>
    <?php
        $sql_sua_sp = "SELECT * FROM tbl_hoadon, tbl_chitiethoadon, tbl_sanpham WHERE tbl_chitiethoadon.id_sanpham = tbl_sanpham.id_sanpham AND tbl_chitiethoadon.id_hoadon = tbl_hoadon.id_hoadon AND tbl_hoadon.id_hoadon = '$_GET[idhoadon]' LIMIT 1";
        $query_sua_sp = mysqli_query($mysqli, $sql_sua_sp);
    ?>
    <p>Sửa sản phẩm</p>
    <table border="3" width="95%" style="border-collapse: collapse;" class="SP">
    <?php
        while($row = mysqli_fetch_array($query_sua_sp)){
    ?>
        <form method="POST" action="modules/quanlyhoadon/xuly.php?idhoadon=<?php echo $row['id_hoadon'] ?>" enctype="multipart/form-data">
        <tr>
            <td class="chu">Ngày lập hoá đơn</td>
            <td>
                <option><?php echo $row['ngay'] ?></option>

            </td>
            </tr>
            <td class="chu">Địa chỉ giao hàng</td>
            <td>
                <option><?php echo $row['diachigiaohang'] ?></option>
            </td>
            </tr>
            <tr>
                <td class="chu">Tên sản phẩm</td>
                <td><?php
                    $sql_lietke_sp = "SELECT * FROM tbl_chitiethoadon, tbl_sanpham WHERE tbl_chitiethoadon.id_sanpham = tbl_sanpham.id_sanpham AND id_hoadon = '$_GET[idhoadon]'";
                    $query_lietke_sp = mysqli_query($mysqli, $sql_lietke_sp);
                ?>
                <?php
            $i = 0;
            while($row = mysqli_fetch_array($query_lietke_sp)) {
                $i++;
                ?>
                    <!-- <?php echo $row['tensanpham'] ?> -->
                    <option value="1"><?php echo $row['tensanpham'] ?></option>
                <?php
                }
                ?>
                </td>
            </tr>
            <tr>
                <td class="chu">Số lượng</td>
                <td><?php
                    $sql_lietke_sp = "SELECT * FROM tbl_chitiethoadon, tbl_sanpham WHERE tbl_chitiethoadon.id_sanpham = tbl_sanpham.id_sanpham AND id_hoadon = '$_GET[idhoadon]'";
                    $query_lietke_sp = mysqli_query($mysqli, $sql_lietke_sp);
                ?>
                <?php
                    $i = 0;
                    while($row = mysqli_fetch_array($query_lietke_sp)) {
                $i++;
                ?>
                    <option value="1"><?php echo $row['soluong'] ?></option>
                <?php
                }
                ?>
                </td>
            </tr>
            <tr>
                <td class="chu">Giá sản phẩm</td>
                <td><?php
                    $sql_lietke_sp = "SELECT * FROM tbl_chitiethoadon, tbl_sanpham WHERE tbl_chitiethoadon.id_sanpham = tbl_sanpham.id_sanpham AND id_hoadon = '$_GET[idhoadon]'";
                    $query_lietke_sp = mysqli_query($mysqli, $sql_lietke_sp);
                ?>
                <?php
                    $i = 0;
                    while($row = mysqli_fetch_array($query_lietke_sp)) {
                $i++;
                ?>
                    <option value="1"><?php echo $row['tiensp'] ?></option>
                <?php
                }
                ?>
                </td>
            </tr>
            <tr>
                <td class="chu">Tổng tiền hoá đơn</td>
                <td>
                <?php
                    $sql_lietke_sp = "SELECT * FROM tbl_hoadon WHERE id_hoadon = '$_GET[idhoadon]'";
                    $query_lietke_sp = mysqli_query($mysqli, $sql_lietke_sp);
                    ?>
                     <?php
                        $i = 0;
                        while($row = mysqli_fetch_array($query_lietke_sp)) {
                        $i++;
                    ?>
                    <?php echo $row['tien'] ?>
                    <?php
            }
        ?>
                </td>

            </tr>
            <tr>
                <td class="chu">Tình trạng</td>
                <td>
                    <select class="tinhtrang" name="tinhtrang">
                        <?php
                            if($row['tinhtrang'] == 1){
                        ?>
                        <option value="0" selected>Đã duyệt</option>
                        <option value="1">Chưa duyệt</option>
                        <?php
                            }else{
                        ?>
                        <option value="0" selected>Đã duyệt</option>
                        <option value="1">Chưa duyệt</option>
                        <?php
                            }
                        ?>
                    </select>
                   
                </td>
            </tr>
           
            <tr>
                <td colspan="2" class="from"><input class="suasanpham" type="submit" name="suasanpham" value="Cập nhật trạng thái"></td>
            </tr>
        </form>
    <?php
        }
    ?>
    </table>
</body>
</html>