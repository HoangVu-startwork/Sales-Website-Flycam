const mysql = require('mysql2');

const db = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: '',
    database: 'fly_together'
});

db.connect(function (err){
    //nếu có nỗi thì in ra
    if (err) throw err.stack;
    //nếu thành công
    console.log('ket noi thanh cong');
    
});

module.exports = db;