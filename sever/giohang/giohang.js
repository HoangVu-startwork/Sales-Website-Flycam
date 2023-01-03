const express = require('express');
const app = express();
const db = require("../config/Data.js");
const mysql = require('mysql2');
const { default: arSA } = require('date-fns/locale/ar-SA/index.js');

// thêmm vào giỏ hàng
app.post("/giohang1", (req, res) => {
        const id_sanpham = req.body.id_sanpham;
        const tensp = req.body.tensp;
        const tonggia = req.body.tonggia;
        const gia = req.body.gia;
        const soluongmua = req.body.soluongmua;
        const id = req.body.id;
      
        if(!id_sanpham) {
            // res.status(422).json("pls fill the all data")
          res.send({ message: "San pham đã có ? id_sanpham" });
        }else if(!tensp){
          res.send({ message: "San pham đã có ? tensp" });
        }else if(!tonggia){
          res.send({ message: "San pham đã có ? tonggia" });
        }else if(!soluongmua){
          res.send({ message: "San pham đã có ? soluongmua" });
        }else if(!id){
          res.send({ message: "Bạn chưa đăng nhập" });
          return;
        }
        try {
            db.query("SELECT * FROM tbl_giohang WHERE id_sanpham = ? AND id = ?", [id_sanpham, id],(err, result) =>{
                if(result.length){
                  res.send({ message: "Sản phẩm đã có trong giỏ hàng" });
                  return;
                }else{
                  db.query('INSERT INTO tbl_giohang Set ?', {id_sanpham: id_sanpham, tensp: tensp, tonggia: tonggia, gia: gia, soluongmua: soluongmua, id: id}, (err, result) =>{
                    if(result){
                        console.log("Sản phẩm đã có trong giỏ hàng 1");
                        res.send(result);
                    }else{
                      console.log("Thêm vào giỏ hành thành công");
                    }
                })
                }
            })
        }catch(error){
          res.status(422).json(error);
        }
      });


// xem giỏ hàng 
app.get(`/xemgiohang/:id`, (req, res) =>{
  const {id} = req.params;
    const sql = "SELECT * FROM tbl_giohang, tbl_sanpham WHERE tbl_giohang.id_sanpham = tbl_sanpham.id_sanpham AND id = ? ";
    db.query(sql, id, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });
});
app.get(`/ok/:id`, (req, res) =>{
  const {id} = req.params;
    const sql = "SELECT * FROM tbl_giohang, tbl_sanpham WHERE tbl_giohang.id_sanpham = tbl_sanpham.id_sanpham AND id = ?";
    db.query(sql, id, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });
});

app.get(`/xemgiohang1/`, (req, res) =>{
  const {id} = req.params;
    const sql = "SELECT * FROM tbl_giohang";
    db.query(sql, id, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });

});

app.put(`/capnhap/:id_giohang`, (req, res) =>{
  const soluongmua = req.body.soluongmua;
  const {id_giohang} = req.params;
  const sqlUpdate = `UPDATE tbl_giohang SET soluongmua = ? WHERE id_giohang = ?`;
  db.query(sqlUpdate, [soluongmua, id_giohang], (error, result) => {
    if(error){
      console.log(error)
    }
    res.send(result);
  })
})

app.delete("/giohang/:id_giohang", (req, res) => {
  const {id_giohang} = req.params;
  const sqlRemove = "DELETE FROM tbl_giohang WHERE id_giohang = ?";
  db.query(sqlRemove, id_giohang, (error, result) => {
    if(error) {
      console.log(error);
    }
  })
})
// app.get(`/so/:id`, (req, res) =>{
//   const {id} = req.params;
//     const sql = "SELECT count(id_giohang) FROM tbl_giohang WHERE id = ?";
   
// });
// app.get("/", (req, res) => {
//   const id = req.body.id;
//     db.query("SELECT * FROM tbl_giohang WHERE id = ?", id, (err, result) => {
//         if (err) {
//             res.status(422).json("Kong")
//             console.log(err)
//         }else{
//             res.status(201).json(result);
//         }
//     })
// });
var today = new Date();
   var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
   var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
   var dateTime = date+' '+time;
app.post("/hoadon", (req, res) => {
  tinhtrang = 1;
  // ngay = '12/18/2022'
  const id = req.body.id;
  const diachigiaohang = req.body.diachigiaohang;
  // id = req.body
  // const tinhtrang = req.body.tinhtrang;
  const tien = req.body.tien;
  // const ngay = req.body.ngay;
  // const id_sanpham = req.body.id_sanpham;
  // const soluong = req.body.soluong;
  // const tiensp = req.body.tiensp;
  // console.log(id_sanpham);
  // db.query(`INSERT INTO tbl_hoadon SET ?`, {id: id, tinhtrang: tinhtrang, tien: tien, ngay: dateTime});
  // // var data = db.forEach(`select @@IDENTITY AS id_hoadon`)
  console.log(dateTime);
  // db.query(`INSERT INTO tbl_chitiethoadon SET ?`, {id_hoadon: id_hoadon, id_sanpham: id_sanpham, soluong: soluong, tiensp: tiensp})
  var sql = "INSERT INTO tbl_hoadon (id, tinhtrang, tien, ngay, diachigiaohang) VALUES (?,?,?,?,?)";
  var preqare = [id, tinhtrang, tien, dateTime, diachigiaohang];
  sql = db.format(sql, preqare);
  db.query(sql, function(err, results, fields) {
    db.query(`INSERT INTO tbl_chitiethoadon (id_hoadon, id_sanpham, soluong, tiensp, tongtien)
    SELECT `+ results.insertId +`, id_sanpham, soluongmua, gia, tonggia
    FROM tbl_giohang WHERE id = ` + id + ``, (err, result)=> {
      if(result.length){
          res.send({ message: "Sản phẩm đã có trong giỏ hàng" });
          return;
      }else{
        const sqlRemove = "DELETE FROM tbl_giohang WHERE id = ?";
        db.query(sqlRemove, id, (error, result) => {
        if(error) {
      console.log(error);
        }
        })
      }
    })
   // db.query('INSERT INTO tbl_chitiethoadon (id_hoadon, id_sanpham, soluong, tiensp, tongtien) SELECT (' + results.insertId +', id_sanpham, soluongmua ,  gia ,'+ tonggia +') FROM tbl_giohang WHERE id = ?')
  })

})

module.exports  = app;