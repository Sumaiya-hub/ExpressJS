const express = require('express');
const app = express()

const PORT = 3000

app.get('/',(req,res)=>{

    res.send('Hello Express')
})


app.post('/',(req,res)=>{
 
     res.send('Hello ,I am post method')
    
})

app.put('/',(req,res)=>{
 
     res.send('Hello ,I am put method')
    
})

app.delete('/',(req,res)=>{
 
     res.send('Hello ,I am delete method')
    
})


app.listen(PORT,()=>{

    console.log('Server is Running');
})