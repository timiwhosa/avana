var express = require("express");
var bodyparser = require("body-parser");
var path = require("path");

var app = express();
var Port = process.env.PORT || 3000; 
app.use(express.static(path.join(__dirname, "/public")))

var jsonparser = bodyparser.json();
var urlencodedparser = bodyparser.urlencoded({extended: false})


app.get("/", (req, res) => {
    res.send("/public/index.html")
})

app.listen(Port);
