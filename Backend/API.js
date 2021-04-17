const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const { Client } = require('pg')
const bodyParser = require('body-parser')
const { json } = require('body-parser')
require('dotenv').config()




app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post('/', (req, res) => {
    const client = new Client({
        user: 'aylin',
        host: '3.141.26.152',
        database: 'game_db',
        password: 'aylin',
        port: '5432',

    });
    client
        .connect()
        .then(() => {
            console.log("connected")

            client.query(`INSERT INTO jsondata (data) VALUES('${JSON.stringify(req.body)}');`, (err, res) => {
                console.log("data sent")
                client.end()
            })
        })
        .catch(err => console.error('connection error', err.stack))
    res.sendStatus(200)



});


app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})