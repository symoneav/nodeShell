module.exports= function (input){

const fs = require('fs')
fs.readFile(input,'utf8',(err,data) => {
    if(err){
        throw err
    }
    else{
        process.stdout.write(data)
        process.stdout.write('prompt >') 
    }
})
}