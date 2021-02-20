const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express()

app.use(express.static('dist'))
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
// MeaningCloud API
var textapi = new MeaningCloud({
    /*
    application_id: "https://api.meaningcloud.com/sentiment-2.1?",
    application_key: "4b3ca4bda944456e99daed73d3b30439"
    */
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  });
  console.log(`Your API key is ${process.env.API_KEY}`);
