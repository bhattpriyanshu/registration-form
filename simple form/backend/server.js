const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: '',
    database: "signup"
})

app.post('/signup',(req, res) => {
    console.log(req.body)
    const sql = "INSERT INTO login (`name`, `email`, `password`) Values ?";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password,
]
console.log(values)
db.query(sql, [values], (err,data) =>{
    if(err) return res.json(err);
    return res.json(data);
})
}
) 

app.listen(8080, ()=>{
    console.log("Listening...")
})