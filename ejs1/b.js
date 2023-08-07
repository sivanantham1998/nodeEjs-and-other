const express=require('express');

const app=express();
let name=[true,'siva']
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.send("hello")
    res.render('b',{person:name})
})






app.listen(2500,()=>console.log('running'))