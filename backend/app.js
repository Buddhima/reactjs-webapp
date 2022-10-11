var express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');


var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000'
}));

const history = []

app.get('/', function(req, res) {
    // handle the / route here
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.write("Hello World")
    res.end()
});

app.get('/entry', function(req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.write(JSON.stringify(history))
    res.end()
});

app.post('/entry', function (req, res) {
    // let data = JSON.parse(req.body)
    console.log(req.body)
    // history.push(req.body)
    let entry = req.body
    let idVal = 'ID' + (Math.random()*10000).toFixed(0)
    entry = {...entry, id: idVal}
    history.push(entry)

    res.writeHead(201, {'Content-Type': 'application/json'})
    res.end()
})

app.listen(4000);