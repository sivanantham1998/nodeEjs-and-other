const express = require('express');
const app =  express();

app.get('/',(req,res)=>{
    res.send('hello');
})
app.get('/y',(req,res)=>{
    res.send('hello y');
})


app.listen(900,()=>console.log('running'))