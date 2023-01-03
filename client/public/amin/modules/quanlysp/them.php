<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- <script src="./ckeditor1/ckeditor.js" type="text/javascript" ></script> -->
</head>
    <style>
        /* .SP{
            margin-top: 30px;
            margin-left: 25%;
        } */
        .tensanpham{
            width: 98%;
            height: 20px;
        }
        .masp{
            width: 98%;
            height: 20px;
        }
        .giasp{
            width: 98%;
            height: 20px;
        }
        .soluong{
            width: 98%;
            height: 20px;
        }
        .hinhanh{
            width: 98%;
            height: 20px;
        }
        .chu{
            width: 350px;
            font-weight: bold;
            font-size: 17px;
            text-align: center;
            color: White;
            background: #888888;
        }
        .tinhtrang{
            width: 150px;
            height: 22px;
        }

        .themsanpham{
            width: 150px;
            height : 24px;
            margin-left: 43%;
            font-weight: bold;
            margin-top: 3px;
            margin-bottom: 3px;
            font-size: 15px;
            background: #CCFFFF;
        }
        .themsanpham:hover{
            background: #33CC00;
        }
        .from{
            background: #888888;
        }
    </style>
<body>
    <p>Thêm sản phẩm</p>
    <table border="3" width="95%" style="border-collapse: collapse;" class="SP">
        <form method="POST" action="modules/quanlysp/xuly.php" enctype="multipart/form-data">
            <!-- <tr>
                <td class="chu">Tên sản phẩm</td>
                <td><input type="text" name="tensanpham" class="tensanpham"></td>
            </tr>
            <tr>
                <td class="chu">Mã sản phầm</td>
                <td><input type="text" name="masp" class="masp"></td>
            </tr>
            <tr>
                <td class="chu">Giá sản phẩm</td>
                <td><input type="text" name="giasp" class="giasp"></td>
            </tr>
            <tr>
                <td class="chu">Phần trăm khuyến mãi</td>
                <td><input type="text" name="khuyenmai" class="khuyenmai"></td>
            </tr> -->
            <tr>
                <td class="chu">Mã loại sản phẩm</td>
                <td>
                    <select class="tinhtrang" name="idloaisanpham">
                        <?php
                            $sql_danhmuc = "SELECT * FROM tbl_danhmuc ORDER BY id_danhmuc DESC";
                            $query_danhmuc = mysqli_query($mysqli, $sql_danhmuc);
                            while($row_danhmuc = mysqli_fetch_array($query_danhmuc)){
                                ?>
                            <option value="<?php echo $row_danhmuc['id_danhmuc'] ?>"><?php echo $row_danhmuc['tendanhmuc'] ?></option>
                            <?php
                            }
                            ?>
                    </select>
                </td>
            </tr>
            <!-- <tr>
                <td class="chu">Số lượng</td>
                <td><input type="text" name="soluong" class="soluong"></td>
            </tr> -->

            <tr>
                <td class="chu">Hình ảnh</td>
                <td><input type="file" name="hinhanh1" class="hinhanh"></td>
            </tr>

            <tr>
                <td class="chu">Hình ảnh động</td>
                <td><input type="file" name="hinhanh2" class="hinhanhdong"></td>
            </tr>

            <tr>
                <td class="chu">Hình ảnh sản phẩm</td>
                <td><input type="file" name="hinhanh3" class="hinhanhsp"></td>
            </tr>

            <tr>
                <td class="chu">Hình ảnh sản phẩm 1</td>
                <td><input type="file" name="hinhanh4" class="hinhanhsp1"></td>
            </tr>

            <tr>
                <td class="chu">Hình ảnh sản phẩm 2</td>
                <td><input type="file" name="hinhanh" class="hinhanhsp2"></td>
            </tr>

            <tr>
                <td class="chu">Tên sản phẩm</td>
                <td><input type="text" name="tensanpham" class="soluong"></td>
            </tr>

            <tr>
                <td class="chu">Số lượng</td>
                <td><input type="text" name="soluong" class="soluong"></td>
            </tr>

            <tr>
                <td class="chu">Giá </td>
                <td><input type="text" name="gia" class="soluong"></td>
            </tr>

            <tr>
                <td class="chu">Mã sản phẩm</td>
                <td><input type="text" name="masp" class="soluong"></td>
            </tr>
            <!-- <tr>
                <td class="chu">Hình ảnh sản phẩm 3</td>
                <td><input type="file" name="hinhanhspba" class="hinhanhsp3"></td>
            </tr>
            <tr>
                <td class="chu">Hình ảnh sản phẩm 4</td>
                <td><input type="file" name="hinhanhsptu" class="hinhanhsp4"></td>
            </tr> -->
           
            <tr>
                <td class="chu">Tình trạng</td>
                <td>
                    <select class="tinhtrang" name="tinhtrang">
                        <option value="1">Kính hoạt</option>
                        <option value="0">Ấn</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td class="chu">Nội dung khuyên mai</td>
                <td><textarea id='noidungkhuyenmai' rows="5" cols="62" name="noidungkhuyenmai" style="resize: none;"></textarea></td>
            </tr>
            <tr>
                <td class="chu">Tóm tắt</td>
                <td><textarea id='editor' name="tomtat"></textarea></td>
            </tr>
            <tr>
                <td class="chu">Nội dung</td>
                <td><textarea id='noidung' rows="20" cols="92" name="noidung" style="resize: none;"></textarea></td>
            </tr>
            <tr>
                <td colspan="2" class="from"><input class="themsanpham" type="submit" name="themsanpham" value="Thêm sản phẩm"></td>
            </tr>
        </form>
    </table>
</body>
</html>