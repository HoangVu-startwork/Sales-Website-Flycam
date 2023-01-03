const express = require('express');
const router = new express.Router();
const db = require("../config/Data.js");
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post("/register1", (req, res) => {

        const name = req.body.name;
        const email = req.body.email;
        const mobile = req.body.mobile;
        const work = req.body.work;
      
        bcrypt.hash(work, saltRounds, (err, hash) => {
          if (err) {
            console.log(err);
          }
          if(!name || !email || !mobile || !work) {
            res.status(422).json("pls fill the all data")
        }try {
            db.query("SELECT * FROM users WHERE email = ?", email, (err, result) =>{
                if(result.length){
                  res.send({ message: "Tài khoản đã có" });
                }else{
                    db.query('INSERT INTO users Set ?', {name: name, email: email, mobile: mobile, work: hash}, (err, result) =>{
                        if(err){
                            console.log("email đã chùng" + err);
                        }else{
                          res.send({ message: "Đăng ký tài khoản thành công" });
                        }
                    })
                }
            })
        }catch(error){
          res.status(422).json(error);
        }});
    });

module.exports  = router;