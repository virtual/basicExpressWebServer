var express = require("express");
var app = express();
var bodyParser = require('body-parser');
const fetch = require("node-fetch");

app.use(express.static('public'));
app.use(bodyParser.json({
  type: 'application/json'
}));
app.use(bodyParser.urlencoded({
  extended: true
}));

// 
// fork the basic express server repo. In server.js, grab the node-fetch
// library from npm. Use it like you did in fetch.js to grab an gif image url. Create a new app.get
// that responds with the image url you just retrieved. In your index.html file,
// use the fetch or jquery api to call your get, retrieve the image url, and display the gif on your webpage. woohoo1
let imageURL = null;

var refreshImage = function() {
  fetch("https://api.giphy.com/v1/gifs/random?api_key=kTbvJKFeUYfzVYxpPTOI1ZjwsQq6afPZ&tag=meteor&rating=PG-13").then((res) => {
    return res.json();
  }).then((data) => {
    imageURL = data.data.image_url;
  });  
};
refreshImage();

app.get("/imageurl", function (req, res) {
  refreshImage();
  res.json(imageURL);
});
app.get("/imageurl/refresh", function (req, res) {
  refreshImage();
  res.json(imageURL);
});

app.listen(5000, function () {
  console.log("Listening on 5000");
});