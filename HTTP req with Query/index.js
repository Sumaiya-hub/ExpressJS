const express = require('express');
const app = express()

const PORT = 3000


app.get("/",(req,res)=>{

     const {id,name} = req.query.id;
     res.send('Student id is : ${id},Student name is : ${name}') 
})

app.listen(PORT,()=>{

    console.log('Server is Running');
})