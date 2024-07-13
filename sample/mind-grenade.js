const num1 = 5;
const num2 = 10;
const f = require('../mind-grenade')

function addValue(){
    console.log(`Add ${num1+num2}`);
}
// passing by reference
 module.exports = {addValue}; 