const express = require('express');
const app = express();
const db = require("../config/Data.js");
const mysql = require('mysql2');


app.get("/sanpham", (req, res) => {
    db.query("SELECT * FROM tbl_sanpham WHERE tinhtrang = 1", (err, result) => {
        if (err) {
            res.status(422).json("Kong")
        }else{
            res.status(201).json(result);
        }
    })
});

app.get(`/sanpham/:id_sanpham`, (req, res) => {
    const {id_sanpham} = req.params;
    const sql = "SELECT * FROM tbl_sanpham WHERE id_sanpham = ? ";
    db.query(sql, id_sanpham, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });
});

app.get("/Mavic", (req, res) => {
    db.query("SELECT * FROM tbl_sanpham WHERE tinhtrang = 1 AND id_danhmuc = 1", (err, result) => {
        if (err) {
            res.status(422).json("Kong")
        }else{
            res.status(201).json(result);
        }
    })
});
app.get("/Phantom", (req, res) => {
    db.query("SELECT * FROM tbl_sanpham WHERE tinhtrang = 1 AND id_danhmuc = 2", (err, result) => {
        if (err) {
            res.status(422).json("Kong")
        }else{
            res.status(201).json(result);
        }
    })
});
app.get("/PJIFPV", (req, res) => {
    db.query("SELECT * FROM tbl_sanpham WHERE tinhtrang = 1 AND id_danhmuc = 3", (err, result) => {
        if (err) {
            res.status(422).json("Kong")
        }else{
            res.status(201).json(result);
        }
    })
});
app.get("/OSMO", (req, res) => {
    db.query("SELECT * FROM tbl_sanpham WHERE tinhtrang = 1 AND id_danhmuc = 4", (err, result) => {
        if (err) {
            res.status(422).json("Kong")
        }else{
            res.status(201).json(result);
        }
    })
});
app.get("/INSPIRE", (req, res) => {
    db.query("SELECT * FROM tbl_sanpham WHERE tinhtrang = 1 AND id_danhmuc = 5", (err, result) => {
        if (err) {
            res.status(422).json("Kong")
        }else{
            res.status(201).json(result);
        }
    })
});
app.get("/Agriculture", (req, res) => {
    db.query("SELECT * FROM tbl_sanpham WHERE tinhtrang = 1 AND id_danhmuc = 6", (err, result) => {
        if (err) {
            res.status(422).json("Kong")
        }else{
            res.status(201).json(result);
        }
    })
});
app.get("/Industty", (req, res) => {
    db.query("SELECT * FROM tbl_sanpham WHERE tinhtrang = 1 AND id_danhmuc = 7", (err, result) => {
        if (err) {
            res.status(422).json("Kong")
        }else{
            res.status(201).json(result);
        }
    })
});
module.exports  = app;