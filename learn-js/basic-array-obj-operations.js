//BASIC OPEARTIONS ON ARRAY

let testArr = [10, 20, 30, 40]
console.log(testArr)

//Accessing elements
console.log(testArr[5])


//Iteration
//basic for loop
for (let index = 0; index < testArr.length; index++) {
   // console.log(testArr[index])
}

//white loop
let index = 0;
while (index < testArr.length) {
   // console.log(testArr[index])
    index++;
}

//for-of loop
for (let v of testArr) {
   // console.log(v)
}

//Insert elements
    //at start
    testArr.unshift(1,2,3)
    console.log(testArr)

    //at end
    testArr.push(100,200,300)
    console.log(testArr)

    //index based(at specific index)
    testArr.splice(2,0,1111,2222)
    console.log(testArr)

//Delete elements
    //from start
    testArr.shift()
    console.log(testArr)
    //from end
    testArr.pop()
    console.log(testArr)
    //index based
    testArr.splice(4,3)
    console.log(testArr)

//Update elements
    testArr.splice(0,1,123)
    console.log(testArr)
    