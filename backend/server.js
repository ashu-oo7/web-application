const express = require('express')
const app = express()
const dotenv = require('dotenv')
const {chats} = require('./data/data.js')

dotenv.config()

app.get('/',(req,res)=>{
    res.send("API is running");
})

app.get('/api/chat',(req,res)=>{
    res.send(chats)
})

app.get('/api/chat/:id',(req,res)=>{
    const id = req.params.id
    let chat = chats.filter(chat => chat._id === id)
    res.send(chat)
})

const PORT = process.env.PORT || 5000
app.listen(5000,console.log(`PORT is running on ${PORT}`))