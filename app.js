var express = require('express')
var app = module.exports = express()
var config = require('./config.js')(app, express);

var pagesCtrl = require("./controllers/pages_controller");
app.get('/', pagesCtrl.landing);

app.listen(3000)
