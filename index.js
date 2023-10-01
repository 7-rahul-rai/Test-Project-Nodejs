const express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors')
const port = 3000;
const db = require('./Models/index')
const inventry = db.inventry
const router = require('./Routes/itemRoute')

app.use(express.static('public'));

app.set('views','views')
app.set('view engine','ejs')

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(cors());

app.use('/',router)

   

app.listen(port, ()=>{
    console.log(`app is listening on ${port}`)
})