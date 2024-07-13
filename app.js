// const names = require('./tutorial.js');
// const sayHi = require('./util.js');
// const {singleperson, items} = require('./alternative-flavour.js');
// require('./mind-grenade.js');
// return;
// console.log(singleperson);
// console.log(items);

// const amount = 9;
// if(amount < 10){
//     console.log('small number');
// }
// else{
//     console.log('large number');
// }

// console.log('hey its my first node app !!!');

// console.log(__dirname);
// async function
// setInterval(() => {
//     console.log("Hello");
// }, 1000);



// setInterval(
    
//     logfunction2, 1000
// )
// // It will initialize during the code execution
// const logfunction = () => {
//     console.log("111");
// }
// // it will initialize when javascript compiler running
// function logfunction2() {
//     console.log("2222");
// }


// // Modules
// const john = 'john';
// const peter = 'peter';
// const sayHi = (dummy = "") => {
//     console.log(`function invoked for ${dummy}`);
// }
// const name = "kkkkk";
// sayHi();
// sayHi(john);
// sayHi(peter);


// console.log(names);

// custom module 
// const custom = require('./sample/mind-grenade');
// custom.addValue();

// module -os
// const os = require('os');
// const user = os.userInfo();
// // console.log(os.uptime());
// const currentOs = {
//     name: os.type(),
//     release : os.release(),
//     totalMem : os.totalmem(),
//     freeMem : os.freemem()
// };

// console.log(currentOs);

// path 
// const path = require('path');
// console.log(path.sep);
// file path
// join - concatename
// const filePath = path.join('/content/', '/subfolder', 'test.txt');
// console.log(filePath);
// file base name
// const base = path.basename(filePath);
// console.log(__dirname);
// console.log(base);
// absolute path 
// const absolute = path.resolve(__dirname, '/content', '/subfolder', 'test.txt');
// console.log(absolute);

// file system (fs) 
// const {readFileSync, writeFileSync} = require('fs');
// const first = readFileSync('./content/first.txt', 'utf-8');
// const second = readFileSync('./content/second.txt', 'utf-8');
// // console.log(first, second);
// writeFileSync(
//     './content/result-sync.txt', 
//     `Here is the result :hjsdhjhsdhsj`,
//      {flag : 'a'}
// );


// read file
// const {readFile, writeFile} = require('fs');
// readFile('./content/first.txt', 'utf8', (err, result) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     const first = result;
// })
    // console.log(result);
    
    // readFile('./content/second.txt', 'utf8', (err, result) => {
    //     if(err){
    //         console.log(err);
    //         return;
    //     }
    //     // console.log(result);
    //     const second = result
    // })

   
    // writeFile(
    //     './content/result-async.txt',
    //     `Here is the result : ${first}, ${second}`,
    //     (err, result) => {
    //         if(err)
    //         {
    //             console.log(err);
    //             return;
    //         }
    //         else{
    //             console.log(result);
    //         }
    //     }
    // )  

// const http = require('http');
// const server = http.createServer((req, res) => {
//     if(req.url === '/'){
//         res.end('this is home page')
//     }
//     if(req.url === '/about'){
//         res.end('this is about page') 
//     }
//     res.end(
//         `<h1>Oops!</h1>
//         <p>We can't seem to find the page you are lookong for </p>
//         <a href = "/"> Back to home</a>`
//     )
// })

// server.listen(4000);

// npm - global command , comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores importantinfo about the project / package)
// manual approach (create package.json in the root, create properties , etc)
// npm init (step by step, please enter to skip)
// npm init -y (everything default)

// lodash
// const _ = require('lodash');
// const items = [112, [2, [3, [4]]]];
// const newItems = _.flattenDeep(items);
// console.log(newItems);

// js is synchronous and single threaded
// need clarity - Done
// console.log('first task');
// console.time();
// for(let i =0; i<5; i++){
//     console.log('sendond task');
    // const h3 = document.querySelector('h3')
    // h3.textContent =`sample text`
// }
// console.timeEnd();
// console.log('End task');
// // asynchronous function - setTimeout
// console.log('first task')
// setTimeout(() => {
//     console.log('second task')
// }, 0);
// console.log('next task');
//end

// Files  - asyncronous
const { readFile } = require('fs');
console.log('started first task');
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    console.log('completed first task');
})
console.log('starting next task');