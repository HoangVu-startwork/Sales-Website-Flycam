<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" tyle="text/css" href="css/index1.css">
    <script src="./ckeditor1/ckeditor.js"></script> 
    <title>Document</title>
</head>
<style>
            body{
                font-family: arial;
            }
            .container{
                width: 1000px;
                margin: 0 auto;
            }
            #send-email-form label {
                width: 150px;
                display: inline-block;
            }
            #send-email-form input {
                margin-bottom: 10px;
                line-height: 32px;
            }
            #send-email-form textarea {
                width: 500px;
                height: 200px;
            }
            #send-email-form input[type=submit] {
                margin-top: 35px;
                height: 32px;
                margin-left: 150px;
            }
            .g-recaptcha{
                margin-left: 153px;
            }
            #cke_email-content{
                float: right;
                width: 650px;
            }
            </style>
            
<body>
        <?php
            include("config/config.php");
            include("modules/header.php");
            include("modules/menu1.php");
            include("modules/main1.php");
            include("modules/footer.php");
        ?>
  <script>
		CKEDITOR.replace('editor', {
            height: 300,
            filebrowserUploadUrl: "/fty_togethert/client/public/amin/modules/quanlysp/ajaxfile.php?type=file",
            filebrowserImageUploadUrl: "/fty_togethert/client/public/amin/modules/quanlysp/ajaxfile.php?type=image",
            removeButtons: 'PasteFromWord'
        } );
        CKEDITOR.replace('noidungkhuyenmai', {
            height: 300,
            filebrowserUploadUrl: "/fty_togethert/client/public/amin/modules/quanlysp/ajaxfile.php?type=file",
            filebrowserImageUploadUrl: "/fty_togethert/client/public/amin/modules/quanlysp/ajaxfile.php?type=image",
            removeButtons: 'PasteFromWord'
        } );
        CKEDITOR.replace('noidung', {
            height: 300,
            filebrowserUploadUrl: "/fty_togethert/client/public/amin/modules/quanlysp/ajaxfile.php?type=file",
            filebrowserImageUploadUrl: "/fty_togethert/client/public/amin/modules/quanlysp/ajaxfile.php?type=image",
            removeButtons: 'PasteFromWord'
        } );
	</script>
 
</body>
</html>