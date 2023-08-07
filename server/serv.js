const a=require('http')

a.createServer((req,res)=>{
    res.write('<h1>hello</h1>');
    res.write('<h1>hello</h1>');
    res.end()
    
}).listen(800,()=>console.log('runing'))

