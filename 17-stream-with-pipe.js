// var http = require('http');
// var fs = require('fs');

// http.createServer( (req, res)=>{
//     // const text = fs.readFileSync('./content/big.txt', 'utf8');
//     // res.end(text);
//     const fileStream = fs.createReadStream('./content/big.txt', 'utf8');

//     fileStream.on('open', ()=>{
//         fileStream.pipe(res);
//     })

//     fileStream.on('error', (err)=>{
//         res.end(err);
//     })
// })
// .listen(5000);


// console.log('stream example');

// const {createReadStream} = require('fs');

// const stream = createReadStream('./content/big.txt', {highWaterMark: 90000, encoding: 'utf8'});

// stream.on('data', (result)=>{
//     console.log(result);
// })

// stream.on('error', (err)=>{
//     console.log(err);
// })
