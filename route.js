const express = require('express');
const app = express()

const PORT = 3000

app.get('/',(req,res)=>{

    res.send('Hello Express.....')
})

//about route
app.get('/about',(req,res)=>{

    res.send('This is About Route')
})

//Contac route
app.get('/contact',(req,res)=>{

    res.send('This is contact  Route')
})


//Dynamic route
app.get('/contact/:username',(req,res)=>{
    const username =req.params.username;
    res.send('Hello ${username}')
})


app.listen(PORT,()=>{

    console.log('Server is Running');
})