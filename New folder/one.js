const my= ()=>{
    console.log("Function working");
}
var a=2345678;
// module.exports.my=my;
// module.exports.a=a;

module.exports={
    my:my,
    a:a
}