const express = require('express');
const app =express();
var body = require('body-parser')
app.use(body.urlencoded({ extended: true }))

let name=['siva','surya','sathish']
// let name = []
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    // res.send('helloqwertyu')
    res.render('a',{names:name});
    
})
app.get('/b',(req,res)=>{
    // res.send('helloqwertyu')
    res.render('b',{names:name});
    
})

app.post('/',(req,res)=>{

    name.push(req.body.name)
    
    res.redirect('/')
})


app.listen(900,()=>console.log('running'))