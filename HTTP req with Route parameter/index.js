const express = require('express');
const app = express()

const PORT = 3000


app.get("/userid/:id/userage/:age",(req,res)=>{

     const id = req.params.id;
     const age = req.params.age;

     res.send('Student id is : ${id}, Age is : ${age}') 
})

app.listen(PORT,()=>{

    console.log('Server is Running');
})