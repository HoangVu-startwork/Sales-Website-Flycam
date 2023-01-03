<?php
    include('../../config/config.php');

    // $tensanpham = $_POST['tensanpham'];
    // $masp = $_POST['masp'];
    // $giasp = $_POST['giasp'];
    // $khuyenmai = $_POST['khuyenmai'];
    // $soluong = $_POST['soluong'];
    //     // xuly hình ảnh
    $idloaisanpham = $_POST['idloaisanpham'];

    $hinhanh1 = $_FILES['hinhanh1']['name'];
    $hinhanh1_tmp = $_FILES['hinhanh1']['tmp_name'];
    $hinhanh01 = time().'_'.$hinhanh1;
    // // 
    $hinhanh2 = $_FILES['hinhanh2']['name'];
    $hinhanh2_tmp = $_FILES['hinhanh2']['tmp_name'];
    $hinhanh02 = time().'_'.$hinhanh2;
    // 
    $hinhanh3 = $_FILES['hinhanh3']['name'];
    $hinhanh3_tmp =$_FILES['hinhanh3']['tmp_name'];
    $hinhanh03 = time().'_'.$hinhanh3;
    // 
    $hinhanh4 = $_FILES['hinhanh4']['name'];
    $hinhanh4_tmp = $_FILES['hinhanh4']['tmp_name'];
    $hinhanh04 = time().'_'.$hinhanh4;
    // 
    $hinhanh = $_FILES['hinhanh']['name'];
    $hinhanh_tmp = $_FILES['hinhanh']['tmp_name'];
    $hinhanh00 = time().'_'.$hinhanh;

    $tensanpham = $_POST['tensanpham'];
    $soluong = $_POST['soluong'];
    $gia = $_POST['gia'];
    $masp = $_POST['masp'];
    $tinhtrang = $_POST['tinhtrang'];
    $noidungkhuyenmai = $_POST['noidungkhuyenmai'];
    $tomtat = $_POST['tomtat'];
    $noidung = $_POST['noidung'];
    // 
    // $hinhanhspba = $_FILES['hinhanhspba']['name'];
    // $hinhanhspba_tmp = $_FILES['hinhanhspba']['tmp_name'];
    // $hinhanhspba1 = time().'_'.$hinhanhspba;
    // // 
    // $hinhanhsptu = $_FILES['hinhanhsptu']['name'];
    // $hinhanhsptu_tmp = $_FILES['hinhanhsptu']['tmp_name'];
    // $hinhanhsptu1 = time().'_'.$hinhanhsptu;
    // 
    // $tomtat = $_POST['tomtat'];
    // $noidung = $_POST['noidung'];
    // $idloaisanpham = $_POST['idloaisanpham'];
    // $tinhtrang = $_POST['tinhtrang'];
    // $noidungkhuyenmai = $_POST['noidungkhuyenmai'];

    // xuly hình ảnh

    if(isset($_POST['themsanpham'])){
        // thêm
        $sql_them = "INSERT INTO tbl_sanpham(id_danhmuc, hinhanh1, hinhanh2, hinhanh3, hinhanh4, hinhanh, tensanpham, soluongkho, gia, masp, tinhtrang, khuyenmai, chitiet, tomtac) VALUE ('"
        .$idloaisanpham."','".$hinhanh01."','".$hinhanh02."','".$hinhanh03."','".$hinhanh04."','".$hinhanh00."','".$tensanpham."','".$soluong."','".$gia."','".$masp."','".$tinhtrang."','".$noidungkhuyenmai."','".$tomtat."','".$noidung."')";
        mysqli_query($mysqli, $sql_them);
        move_uploaded_file($hinhanh1_tmp, 'uploads/'.$hinhanh01);
        move_uploaded_file($hinhanh2_tmp, 'uploads/'.$hinhanh02);
        move_uploaded_file($hinhanh3_tmp, 'uploads/'.$hinhanh03);
        move_uploaded_file($hinhanh4_tmp, 'uploads/'.$hinhanh04);
        move_uploaded_file($hinhanh_tmp, 'uploads/'.$hinhanh00);
        header('Location:../../index.php?action=quanlysp&query=them');
    }elseif(isset($_POST['suasanpham'])){
        // sua
        if($hinhanh != ''){
            move_uploaded_file($hinhanh_tmp, 'uploads/'.$hinhanh00);

            $sql_update = "UPDATE tbl_sanpham SET id_danhmuc='".$idloaisanpham."',hinhanh='".$hinhanh00."',tensanpham='".$tensanpham."',soluongkho='".$soluong."',gia='"
            .$gia."',masp='".$masp."',tinhtrang='".$tinhtrang."',khuyenmai='".$noidungkhuyenmai."',chitiet='".$tomtat."', tomtac = '".$noidung."' WHERE id_sanpham = '$_GET[idsanpham]'";
            // Xoa hinh anh củ
            $sql = "SELECT * FROM tbl_sanpham WHERE id_sanpham = '$_GET[idsanpham]' LIMIT 1";
            $query = mysqli_query($mysqli, $sql);
            while($row = mysqli_fetch_array($query)){
                unlink('uploads/'.$row['hinhanh']);
            }
        }
        else{
            $sql_update = "UPDATE tbl_sanpham SET id_danhmuc='".$idloaisanpham."',tensanpham='".$tensanpham."',soluongkho='".$soluong."',gia='"
            .$gia."',masp='".$masp."',tinhtrang='".$tinhtrang."',khuyenmai='".$noidungkhuyenmai."',chitiet='".$tomtat."', tomtac = '".$noidung."' WHERE id_sanpham = '$_GET[idsanpham]'";
        }
        mysqli_query($mysqli, $sql_update);
        header('Location:../../index.php?action=quanlysp&query=them');
    }else{
        $id = $_GET['idsanpham'];
        $sql = "SELECT * FROM tbl_sanpham WHERE id_sanpham = '$id' LIMIT 1";
        $query = mysqli_query($mysqli, $sql);
        while($row = mysqli_fetch_array($query)){
            unlink('uploads/'.$row['hinhanh']);
        }
        $sql_xoa = "DELETE FROM tbl_sanpham WHERE id_sanpham='".$id."'";
        mysqli_query($mysqli, $sql_xoa);
        header('Location:../../index.php?action=quanlysp&query=them');
    }
?>