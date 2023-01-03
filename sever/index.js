const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const db =require("./config/Data.js");
require("./config/Data.js");
const router = require("./Router/router.js");
const cooRieParser = require('cookie-parser');
const session = require("express-session");
const morgan = require('morgan');
const multiparty = require('connect-multiparty');
const MultipartyMiddleware = multiparty({uploadDir: '../images'})
const port = 5090

const login = require('./Login/login.js');
const sanpham = require('./sanpham/sanpham.js');
const giohang = require("./giohang/giohang.js");
const diachi = require("./Diachi/diachi");
const hoadon = require("./hoadon/hoadon.js");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const multer = require('multer');
var path = require('path');

app.use(cors({
    origin: ["http://localhost:3000"],
    method: ["POST", "GET"],
    credentials: true
}));
app.use(express.json());
app.use(session({
    key: "userId",
    secret: "subscribe",
    resave: true,
    saveUninitialized: true,
    cookie: {
        express: 60 * 60 * 24,
    }
}));
app.use(bodyParser.urlencoded({extended: true}));

app.use(router);
app.use(login);
app.use(sanpham);
app.use(giohang);
app.use(diachi);
app.use(hoadon);

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../client/public/images/', 'uploads'),
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

app.post('/imageupload', async (req, res) => {
    try {
        let upload = multer({storage: storage}).single('avatar');
        upload(req, res, function(err) {
            if(!req.file) {
                return res.send('Please select an image to upload');
            }else if (err instanceof multer.MulterError) {
                return res.send(err);
            }else if (err){
                return res.send(err);
            }
            const classifiedsadd = {
                imgae: req.file.filename,
            };
            // const sql = "INSERT INTO ok SET ?";
            // db.query(sql, classifiedsadd, ten, (err, results) => {
            //     if(err) throw err;
            //         res.json({success: 1})
            // })
            const ten = req.body.ten;
            db.query('INSERT INTO ok SET ?', {imgae: req.file.filename, ten: ten}, (err, results) => {
                if(err) throw err;
                    res.json({success: 1})
            })

        })
    }catch (err) {(console.log(err))}
})
// app.get('/sanpham', function (req, res) {
//      db.query("SELECT `name` FROM users", function (error, results, fields) {
//          if (error) throw error;
//          return res.send({ error: false, data: results, message: 'users list.' });
//      });
//  });

// app.post('/uploads', MultipartyMiddleware, (req, res) => {
//     console.log(req.files.upload)
// })

app.listen(port, () => {
    console.log("Server is");
})