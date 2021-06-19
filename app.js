const express = require('express')
const app = express()

app.listen(3000)

app.get('/',(req,res)=>{
    res.sendFile('./pages/home.html',{root:__dirname})
})

app.get('/services',(req,res)=>{
    res.sendFile('./pages/our-services.html',{root:__dirname})
})

app.get('/contact',(req,res)=>{
    res.sendFile('./pages/contact-us.html',{root:__dirname})
})


