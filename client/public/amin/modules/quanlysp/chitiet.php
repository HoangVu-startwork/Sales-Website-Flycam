<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    * {
        box-sizing: border-box;
    }
    #tieude{
        width: 300px;
        font-size: 22px;
        /* text-align: center; */
    }
    .container {
        border-radius: 5px;
        background-color: #f2f2f2;
        padding: 20px;
        width: 45%;
    }
    input[type=text], select, textarea {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        resize: vertical;
    }

    label {
        padding: 12px 12px 12px 0;
        display: inline-block;
    }
    .col-25 {
        float: left;
        width: 30%;
        margin-top: 5px;
        margin-left: 10px;
    }
    .col-75 {
        float: left;
        width: 65%;
        margin-top: 5px;
    }
    .row:after {
        content: "";
        display: table;
        clear: both;
    }
    option{
        font-size: 30px;
        text-align: center;
    }
    .snip1582 {
        background-color: #c47135;
        border: none;
        color: #ffffff;
        cursor: pointer;
        display: inline-block;
        font-family: 'BenchNine', Arial, sans-serif;
        font-size: 1em;
        font-size: 22px;
        line-height: 1em;
        margin: 15px 40px;
        outline: none;
        padding: 12px 40px 10px;
        position: relative;
        text-transform: uppercase;
        font-weight: 700;
    }

    .snip1582:before,
    .snip1582:after {
        border-color: transparent;
        -webkit-transition: all 0.25s;
        transition: all 0.25s;
        border-style: solid;
        border-width: 0;
        content: "";
        height: 24px;
        position: absolute;
        width: 24px;
    }

    .snip1582:before {
        border-color: #c47135;
        border-top-width: 2px;
        left: 0px;
        top: -5px;
    }

    .snip1582:after {
        border-bottom-width: 2px;
        border-color: #c47135;
        bottom: -5px;
        right: 0px;
    }

    .snip1582:hover,
    .snip1582.hover {
        background-color: #c47135;
    }

    .snip1582:hover:before,
    .snip1582.hover:before,
    .snip1582:hover:after,
    .snip1582.hover:after {
        height: 100%;
        width: 100%;
    }
</style>
<body>
    <?php
        $sql_sua = "SELECT * FROM tbl_sanphamlatop WHERE id_sanpham ='$_GET[idsanpham]'";
        $query_sua = mysqli_query($mysqli, $sql_sua);
    ?>
    <?php
        while($row = mysqli_fetch_array($query_sua)){
    ?>
    <div class="container">
        <form method="POST" action="modules/quanlysp/xulychitiet.php?idsanpham=<?php echo $row['id_sanpham'] ?>" enctype="multipart/form-data">

                <p>
                    <?php
                        $sql_danhmuc = "SELECT * FROM tbl_sanphamlatop WHERE tbl_sanphamlatop.id_sanpham = '$_GET[idsanpham]'";
                        $query_danhmuc = mysqli_query($mysqli, $sql_danhmuc);
                        while($row_danhmuc = mysqli_fetch_array($query_danhmuc)){
                        ?>
                        <input type="hidden" value="<?php echo $row_danhmuc['id_sanpham'] ?>" name="idsanpham">
                        <option value="<?php echo $row_danhmuc['id_sanpham'] ?>"><?php echo $row_danhmuc['tensanpham'] ?></option>
                        <?php
                        }
                        ?>
            <p>
                <p id="tieude">Vi xử lý & đồ hoạ</p>
            </p>
            <div class="row">
                <div class="col-25">
                    <label for="fname">Loại CPU</label>
                </div>
                <div class="col-75">
                    <input type="text" id="fname" name="loaicpu">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="fname">Loại Card đồ hoạ</label>
                </div>
                <div class="col-75">
                    <input type="text" id="fname" name="loaicarddohoa">
                </div>
            </div>
            <p>
                <p id="tieude">RAM & Ổ cứng</p>
            </p>
            <div class="row">
                <div class="col-25">
                    <label for="fname">Dung lượng RAM</label>
                </div>
                <div class="col-75">
                    <input type="text" id="fname" name="ram">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="fname">Loại RAM</label>
                </div>
                <div class="col-75">
                    <input type="text" id="fname" name="loairam">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="fname">Ổ cứng</label>
                </div>
                <div class="col-75">
                    <input type="text" id="fname" name="ocung">
                </div>
            </div>
            <p>
                <p id="tieude">Màn Hình</p>
            </p>
            <div class="row">
                <div class="col-25">
                    <label for="fname">Kích thước màn hình</label>
                </div>
                <div class="col-75">
                    <input type="text" id="fname" name="kichthuocmanhinh">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="fname">Độ phân giải màn hình</label>
                </div>
                <div class="col-75">
                    <input type="text" id="fname" name="dophangiaimanhinh">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="fname">Công nghệ màn hình</label>
                </div>
                <div class="col-75">
                    <input type="text" id="fname" name="congnghemanhinh">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="fname">Màn hình cảm ứng</label>
                </div>
                <div class="col-75">
                    <input type="text" id="fname" name="manhinhcamung">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="fname">Chất liệu tấm nền</label>
                </div>
                <div class="col-75">
                    <input type="text" id="fname" name="chatlieutamnen">
                </div>
            </div>
            <p>
                <p id="tieude">Thông số kỹ thuật</p>
            </p>
            <div class="row">
                <div class="col-25">
                    <label for="fname">Độ phân giải</label>
                </div>
                <div class="col-75">
                    <input type="text" id="fname" name="dophangiai">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="fname">Cổng giao tiếp</label>
                </div>
                <div class="col-75">
                    <input type="text" id="fname" name="conggiaotiep">
                </div>
            </div>

            <div class="row">
                <div class="col-25">
                    <label for="fname">Pin</label>
                </div>
                <div class="col-75">
                    <input type="text" id="fname" name="pin">
                </div>
            </div>
            <p>
                <p id="tieude">Giao tiếp & kết nối</p>
            </p>
            <div class="row">
                <div class="col-25">
                    <label for="fname">Hệ điều hành</label>
                </div>
                <div class="col-75">
                    <input type="text" id="fname" name="hedieuhanh">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="fname">Đèn bàn phím</label>
                </div>
                <div class="col-75">
                    <input type="text" id="fname" name="denbanphim">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="fname">Webcam</label>
                </div>
                <div class="col-75">
                    <input type="text" id="fname" name="webcam">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="fname">Wi-Fi</label>
                </div>
                <div class="col-75">
                    <input type="text" id="fname" name="wifi">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="fname">Bluetooth</label>
                </div>
                <div class="col-75">
                    <input type="text" id="fname" name="bluetooth">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="fname">Khe đọc thẻ nhớ</label>
                </div>
                <div class="col-75">
                    <input type="text" id="fname" name="khedocthenho">
                </div>
            </div>
            <p>
                <p id="tieude">Thiết kế & Trọng lượng</p>
            </p>
            <div class="row">
                <div class="col-25">
                    <label for="fname">Kích thước</label>
                </div>
                <div class="col-75">
                    <input type="text" id="fname" name="kichthuoc">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="fname">Trọng lượng</label>
                </div>
                <div class="col-75">
                    <input type="text" id="fname" name="trongluong">
                </div>
            </div>
            
            <p>
                <p id="tieude">Thông số khác</p>
            </p>
            <div class="row">
                <div class="col-25">
                    <label for="fname">Chất liệu</label>
                </div>
                <div class="col-75">
                    <input type="text" id="fname" name="chatlieu">
                </div>
            </div>
            <p>
                <p id="tieude">Công nghệ âm thanh</p>
            </p>
            <div class="row">
                <div class="col-25">
                    <label for="fname">Công nghệ âm thanh</label>
                </div>
                <div class="col-75">
                    <input type="text" id="fname" name="congngheamthanh">
                </div>
            </div>
            <p>
                <p id="tieude">Tiện ích khác</p>
            </p>
            <div class="row">
                <div class="col-25">
                    <label for="fname">Tiện ích khác</label>
                </div>
                <div class="col-75">
                    <input type="text" id="fname" name="tinhnangdacbiet">
                </div>
            </div>
            <button name="themthongso" class="snip1582">Thêm thông tin kỹ thuật sản phẩm</button>
    </div>
    <?php
        }
    ?>
    <!-- </table> -->
</body>
</html>