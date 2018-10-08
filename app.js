/**
 * Created by Talel on 2018-10-08.
 */
var express = require('express');
var app = express();

// app.use(express.static(__dirname + '/public'));
// app.get('/process_get', function (req, res) {
//     // Prepare output in JSON format
//     res.send('Hello Express')
// })
//
// var server = app.listen(4800, function () {
//     var host = '127.0.0.1'
//     var port = server.address().port
//     console.log("Example app listening at http://%s:%s", host, port)
//
// })

var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(__dirname + '/public'));
// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/object', function(req, res) {
    res.sendFile(path.join(__dirname + '/object.html'));
})
app.get('/dom', function(req, res)  {
    res.sendFile(path.join(__dirname + '/dom.html'));
})
app.get('/event', function(req, res) {
    res.sendFile(path.join(__dirname + '/eventPage.html'));
})
app.get('/tabs', function(req, res) {
    res.sendFile(path.join(__dirname + '/tabs.html'));
})
app.get('/closure', function(req, res) {
    res.sendFile(path.join(__dirname + '/closure.html'));
})

app.listen(4800);