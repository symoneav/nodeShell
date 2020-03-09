process.stdout.write('prompt >')
process.stdin.on('data',(data)=>{
    let cmd = data.toString().trim();
    let invokedFunc = require(`./${cmd}.js`)
    invokedFunc()
})



    

   
