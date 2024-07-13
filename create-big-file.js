const { writeFileSync } = require('fs');
// sync
for(let i=1; i< 10 ; i++){
    // async - problem started
    setTimeout(() => {
        writeFileSync('./content/big.txt', `hello world ${i}\n\r`, {flag: 'a'})
    }, Math.random()*100);
}
    
