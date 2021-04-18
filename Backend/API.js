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
            var deviceName = JSON.stringify(req.body.deviceName)
            var totalCounts = JSON.stringify(req.body.userInteractionData.upperGridClickCount) + JSON.stringify(req.body.userInteractionData.lowerGridClickCount)
            var upperTaps = JSON.stringify(req.body.userInteractionData.upperGridClicks)
            var bottomTaps = JSON.stringify(req.body.userInteractionData.lowerGridClicks)
            console.log(deviceName, '\n',totalCounts,'\n', "This is upperTaps", upperTaps,'\n',"This is upperTaps", bottomTaps)

            var data = {
                deviceName: req.body.deviceName,
                totalCounts: req.body.userInteractionData.upperGridClicks.length + "," + req.body.userInteractionData.lowerGridClicks.length,
                upperTaps: req.body.userInteractionData.upperGridClicks,
                bottomTaps: req.body.userInteractionData.lowerGridClicks
            };

            //console.log(JSON.stringify(req.body.userInteractionData.lowerGridClicks));
            client.query(`INSERT INTO jsondata (data) VALUES('${JSON.stringify(data)}');`, (err, res) => {
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