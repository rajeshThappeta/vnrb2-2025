//global scope
let a=10;


function test(){
    //function scope
    let b=20;
    console.log("a is ",a,"and b is ",b)
    if(true){
        //block scope
        let c=30;
        console.log(c)
    }
    
}


test()

console.log(a)

let result=findBig()

let findBig=function(){
    return "big number"
}


console.log(result)

