// coremodule
const readline=require("readline");

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout  
});

rl.question('what is ur name',(ans)=>{
    if(ans === 'siva')
    {
        rl.close;
    }
    else
    {
        rl.setPrompt("wrong name try again");
        rl.prompt();
        rl.on('line',(inp)=>{
            if(inp==='siva'){
                rl.close();
            }else{
                rl.setPrompt(inp + ' wrong \n');
                rl.prompt();
            }
        })
    }
})

rl.on('close',()=>{
    console.log('correct ');
})
    