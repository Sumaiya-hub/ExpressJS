const express = require('express');
const app = express()

const PORT = 3000


app.get("/userid/:id/userage/:age",(req,res)=>{

     const id = req.header('id');
     const name = req.header('name');

     res.send('Student id is : ${id},Name is : ${name}') 
})

app.listen(PORT,()=>{

    console.log('Server is Running');
})