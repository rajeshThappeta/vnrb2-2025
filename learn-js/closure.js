function test1(){
    let a=10;
    let x=20;
   return function sum(){
        let b=20;
        return a+b;

    }
}


let result=test1()
console.log(result()) //




function hello(){
    return function hi(){
        return function good(){
            return "good"
        }
    }
}


let r=hello()()
console.log(r)
//let s=r()
//console.log(s())