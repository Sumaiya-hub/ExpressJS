const express = require('express');
const app = express()

const PORT = 3000
const bodyParser=require('body-parser')

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())


app.get("/register",(req,res)=>{

res.sendFile(__dirname + "/index.html")
  
})


app.post("/register",(req,res)=>{
 const fn = req.body.fn;
 const age = req.body.age;
res.send(`<h3>Your Name is ${fn} . You are is ${age}</h3>`)
  
})

app.listen(PORT,()=>{

    console.log('Server is Running');
})