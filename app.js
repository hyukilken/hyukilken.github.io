var express = require('express');
var app = express();

//app.use(express.static('public'));

app.get('/lottery',function(req,res){
    res.sendFile(__dirname + '/lottery.html');
});

app.get('/', function(req, res){
    res.send('Hello home page');;
});

var port = 3000;
app.listen(port,function(){
    console.log('Connected port : ' + port);
});