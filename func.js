// Functions  - 3 ways
// self invoked function

(function () {
    console.log("self invoked");  
}())
//  arrow function

const func2 = () =>{
    console.log("arrow function");
}
func2();
// normal function

function func1() {
    console.log("nornal func1");
}
func1();