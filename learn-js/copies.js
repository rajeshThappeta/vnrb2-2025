
//copy of primitives
let username='ravi'

let copyUsername=username;

console.log("Original username :",username)
console.log("Copy username :",copyUsername)

//check
username='ravi kumar'
console.log("Original username :",username)
console.log("Copy username :",copyUsername)


//COPY OF NON_PRIMITIVE
let person={
    pid:100,
    name:'bhanu'
}

//spread operator
let copyPerson={...person};

console.log("Original person :",person)
console.log("Copy person :",copyPerson)

//check
person.pid=200

console.log("Original person :",person)
console.log("Copy person :",copyPerson)