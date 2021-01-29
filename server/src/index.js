"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    return res.send('hello node + ts');
});
app.listen(8080, function () {
    console.log('servidor rodando');
});
