process.stdout.write('prompt >')
process.stdin.on('data',(data)=>{
    let cmd = data.toString().trim();
    let cmdArr = cmd.split(' ')
    if(cmdArr.length===2){
        let invokedFunc = require(`./${cmdArr[0]}.js`)
        invokedFunc(cmdArr[1])
    }
})



    

   
