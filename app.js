const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const bodyParser = require('body-parser')
require('net').createServer

const app = express()
app.use(cors())

mongoose.Promise = global.Promise

var port = process.env.PORT || 6000
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex:true
})

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

var v1 = require('./api/routes')

app.use('/api/v1',v1.router)

app.use(function(req,res){
    res.status(404).send({
        url:req.originalUrl + 'not found'
    })
})

app.listen(port,()=>{
    console.log('API server is started on :' ,port)
})