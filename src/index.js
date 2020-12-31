const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars  = require('express-handlebars');

const app = express();
const port = 3000;

// http logger
// app.use(morgan("combined"));
app.use(express.static(path.join(__dirname,'public')));

// midleware from submitform send data
app.use(express.urlencoded({
  extended: true
}));

// midleware from xmlhttprequest, fetch, axios, ajax send data
app.use(express.json());

// template engine
app.engine('hbs', handlebars({
  extname: ".hbs"
}));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'resources\\views'))

// action -> dispatch -> function handler=controller
// route
app.get('/', function (req, res) {
  res.render('home');
});

app.get('/new', function (req, res) {
  res.render('new');
});

app.get('/search', function (req, res) {
  res.render('search');
});

app.post('/search', function (req, res) {
  res.send(req.body);
});

app.listen(port, () => console.log("hehe"));