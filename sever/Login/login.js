const express = require('express');
const app = express();
const db = require("../config/Data.js");
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const saltRounds = 10;


app.post("/login", (req, res) => {
    const email = req.body.email;
    const work = req.body.work;
  
    db.query(
        "SELECT * FROM users WHERE email = ?",
        email,
        (err, result) => {
            if(err) {
                res.send({err: err});
            }
            if(result.length > 0) {
                bcrypt.compare(work, result[0].work, (error, response) => {
                    if (response) {
                      req.session.user = result;
                      console.log(req.session.user);
                        res.send(result);
                    } else {
                      res.send({ message: "Tài khoản mật không chính sác" });
                    }
                  });
            }else{
                res.send({ message: "Tài khoản không có" });
            }
        }
    )
})
app.get("/login", (req, res) => {
    if (req.session.user) {
      res.send({ loggedIn: true, user: req.session.user });
    } else {
      res.send({ loggedIn: false });
    }
});

app.get(`/login/:id`, (req, res) => {
    const {id} = req.params;
    const sql = "SELECT * FROM users WHERE id = ? ";
    db.query(sql, id, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });
});
module.exports  = app;