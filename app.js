var express = require('express');
var exphbs  = require('express-handlebars');
var port = process.env.PORT || 3000
const bodyParser = require("body-parser");
const mercadopago = require("mercadopago");

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('assets'));
 
app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/detail', function (req, res) {
    res.render('detail', req.query);
});

app.listen(port, function(){
    console.log("Server up and runnig at port 3000");
});