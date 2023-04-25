const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const PORT = 3001;

const {encrypt, decrypt} = require("./EncryptionHandler");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'Virgo1109@',
    database: 'passwordmanager',
});

app.post("/addentry", (req, res) => {
    const {title, username, password} = req.body;
    const hashedPassword = encrypt(password);
    db.query("INSERT INTO passwords (title, username, password, iv) VALUES (?,?,?,?)", 
    [title, username, hashedPassword.password, hashedPassword.iv],
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Success");
        }
    }
    );
});

app.get('/showpasswords',(req, res) => {
    db.query('SELECT * FROM passwords;', (err, result) => {
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.post('/decryptpassword', (req, res) => {
    res.send(decrypt(req.body));
})

app.listen(PORT, ()=> {
    console.log("Server is running.");
});