const {readFile, writeFile} = require('fs').promises;
// const { result } = require('lodash');
// const { util } = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async() => {
    try{
        const first = await readFile('./content/first.txt');
        const second = await readFile('./content/second.txt');
        await writeFile('./content/result-mind-grenade.txt', `This is awesome : ${first} ${second}`);
        console.log(first, second)
    }
    catch{
        console.log(error)
;    }   
}

start();

//
// const getText = (path) => {
//     return new promises((resolve, reject) => {
//         readFile(path , 'utf-8' , (err,data) => {
//             if(err)
//                 reject(err);
//             else
//                 resolve(data);
//         })
//     })
// }

// getText('./content/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err));