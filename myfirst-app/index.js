const express = require('express')
const app = express()
const hbs = require('hbs');

app.set('view engine', 'hbs');
app.set('views', __dirname +'/views')
app.use(express.static('public'));
hbs.registerPartials(__dirname + '/views/partials');
 
app.get('/', function (req, res) {
  res.send('Hello World');
})

app.get('/home', function(req, res){
 res.render("home.hbs");
})

app.get('/about', function(req, res){
    res.render("about.hbs");
})

app.get('/Gallery', function(req, res){
  res.render("Gallery.hbs");
})


   

   
app.listen(3000, ()=>{console.log('App is running on port 3000!')})