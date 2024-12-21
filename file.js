const fs = require('fs');

//sync
// fs.writeFileSync('./test.txt','level')

//Async
fs.writeFile('./test.txt',"level2",(err)=>{})