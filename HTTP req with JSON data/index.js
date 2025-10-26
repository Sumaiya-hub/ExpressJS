const express = require('express');
const app = express()

const PORT = 3000
const bodyParser=require('body-parser')

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())


app.post("/user",(req,res)=>{
 const name = req.body.name;
 const age = req.body.age;
res.send(`Welcome ${name} . You are ${age}`)
  
})

app.listen(PORT,()=>{

    console.log('Server is Running');
})