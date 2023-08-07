const fs=require("fs");


// create file

fs.writeFileSync("./welcome.txt","Welcome to the page");
//read file
const read=fs.readFileSync("./welcome.txt");

console.log(read.toString());

//delete file
// fs.unlinkSync("./welcome.txt")