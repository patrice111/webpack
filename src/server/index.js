const fetch = require('node-fetch')
const dotenv = require('dotenv');
dotenv.config();

//MeaningCloud API
const API_KEY = process.env.API_KEY;
const baseUrl = "https://api.meaningcloud.com/sentiment-2.1?";

const path = require('path')
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
    res.sendFile(path.resolve('src/dist/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
});

  app.post("/article", async (req, res) => {
    const resp = await fetch(`${baseUrl}${API_KEY}&lang=auto&url=${req.body.url}`);
  
    try {
      const data = await resp.json();
      res.send(data);
    } catch (err) {
      console.log("error", err);
    }
  });  