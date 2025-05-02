//FUNCTIONS
// camelcase(lower & upper)
 
   

    //function declaration(function def)
    function findSum1(a, b){
        return a+b;
    }

    //call function
    let result1=findSum1(10,20)
    console.log(result1)


   

    //function expression
    let findSum2=function(a,b){
        return a+b;
    }

     //call function
     let result2=findSum2(100,200)
     console.log(result2)


    //arrow function (simplify function expression)
    let findSum3=(a,b)=> a+b;

    //call function
    let result3=findSum3(11,12)
    console.log(result3)
    



    //find big num,ber in given two
    let findBig=function(a,b){
        if(a>b){
            return "a is big"
        }else if(a==b){
            return "both are equal"
        }else{
            return "b is big"
        }
    }


    let big=findBig(100,100)
    console.log(big)



    let findBig2=(a,b)=>{
        if(a>b){
            return "a is big"
        }else if(a==b){
            return "both are equal"
        }else{
            return "b is big"
        }
    }