const express = require('express');
const app = express();
const db = require("../config/Data.js");
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const saltRounds = 10;


app.get(`/hoadon/:id`, (req, res) => {
    const {id} = req.params;
    const sql = "SELECT * FROM tbl_hoadon WHERE id = ? AND tinhtrang = 0";
    db.query(sql, id, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });
});

app.delete("/xoahoadon/:id_hoadon", (req, res) => {
  const {id_hoadon} = req.params;
  const sqlRemove = "DELETE FROM tbl_hoadon WHERE id_hoadon = ?";
  db.query(sqlRemove, id_hoadon, (error, result) => {
    if(error) {
      console.log(error);
    }
  })
})
app.get(`/hoadon1/:id_hoadon`, (req, res) => {
    const {id_hoadon} = req.params;
    const sql = "SELECT * FROM tbl_hoadon WHERE id_hoadon = ?";
    db.query(sql, id_hoadon, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });
});
app.get(`/chitiethoadon/:id_hoadon`, (req, res) => {
    const {id_hoadon} = req.params;
    const sql = "SELECT * FROM tbl_chitiethoadon, tbl_sanpham WHERE tbl_chitiethoadon.id_sanpham = tbl_sanpham.id_sanpham AND id_hoadon = ?";
    db.query(sql, id_hoadon, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });
});

app.get(`/hoadonchuaduyet/:id`, (req, res) => {
    const {id} = req.params;
    const sql = "SELECT * FROM tbl_hoadon WHERE id = ? AND tinhtrang = 1";
    db.query(sql, id, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });
});
module.exports  = app;