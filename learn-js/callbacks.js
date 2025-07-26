//What is callback?
//Callback is a function that send as arg to another function
//test is not a callback
//Anonymous function is a callback

//When callback executes?
//Later

//Who calls callback?
//Outside function (test function)




//FILTER(selection)
let arr = [90, 67, -23, 56, 32, 41]

//filter elements between 20 and 70
//[67,56,32,41]

let resultOfFilter = arr.filter((element) => element > 20 && element < 70)
console.log(resultOfFilter)

//MAP(modification)
//increment each element by 10
let resultOfMap=arr.map(element=>element+10)
console.log(resultOfMap)

//SEARCH(find)
//search for 32
let searchResult=arr.find(element=>element===21)
console.log(searchResult)

//SERACH BY INDEX
let searchIndexResult=arr.findIndex(element=>element===21)
console.log(searchIndexResult)


//REDUCE
    //find sum of elements
    testArr=[50,40,10,30]
    let sumResult=testArr.reduce((accumulator,element)=>accumulator+element)
                                // 50          40         90
                                //90            10        100
                                //100           30        130
                                //130
    console.log(sumResult)


//FOREACH(iteration)
    testArr.forEach((element,index)=>{
        //business logic
       console.log("Index :",index)
       console.log("Element:",element)
    })


//SORT
    let sampleArr=[9,1,4,3,12]
    // let sortedArray=sampleArr.toSorted((a,b)=>{
    //     if(a<b){
    //         return -1
    //     }else if(a>b){
    //         return 1
    //     }else{
    //         return 0
    //     }
    // }) 

    let sortedArray=sampleArr.toSorted((a,b)=>a<b?-1:a>b?1:0) 
    console.log(sortedArray)
    console.log(sampleArr)