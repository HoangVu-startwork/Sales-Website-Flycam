const express = require('express');
const app = express();
const db = require("../config/Data.js");
const mysql = require('mysql2');

app.get(`/diachi`, (req, res) =>{
    const sql = "SELECT * FROM tbl_thanhpho";
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });
});
app.get(`/diachi/:id_thanhpho`, (req, res) =>{
    const {id_thanhpho} = req.params;
    const sql = "SELECT * FROM tbl_huyen WHERE id_thanhpho = ?";
    db.query(sql, id_thanhpho, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });
});

app.get(`/diachikhachhang/:id`, (req, res) =>{
    const {id} = req.params;
    const sql = "SELECT * FROM tbl_diachi WHERE id = ?";
    db.query(sql, id, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });
});


app.post(`/thongtindiachi`, (req, res) =>{
    const id = req.body.id;
    const tengoinho = req.body.tengoinho;
    const thanhpho = req.body.thanhpho;
    const quan = req.body.quan;
    const sonha = req.body.sonha;
    if(!id){
        res.send({ message: "Bạn chưa đăng nhập" });
    }else{ 
        db.query('INSERT INTO tbl_diachi SET ?', {id: id, tengoinho: tengoinho, thanhpho: thanhpho, quan: quan, sonha: sonha}, (err, result) => {
        if(result){
            res.send({ message:"Bạn đã có địa chỉ"});
        }else{
            res.send({ message:"Bạn đã thêm địa chỉ thành công"});
        }
    })}
})
app.put(`/thaydoidiachi/:id`, (req, res) =>{
    const tengoinho = req.body.tengoinho;
    const thanhpho = req.body.thanhpho;
    const quan = req.body.quan;
    const sonha = req.body.sonha;
    const {id} = req.params;
    const sqlUpdate = `UPDATE tbl_diachi SET tengoinho = ?, thanhpho = ?, quan = ?, sonha = ? WHERE id = ?`;
    db.query(sqlUpdate, [tengoinho, thanhpho, quan, sonha, id], (error, result) => {
    if(error){
      console.log(error)
    }
    res.send(result);
  })
})
module.exports  = app;

