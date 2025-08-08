let emp={
    empId:100,
    name:"ravi",
    address:{
        city:"hyd",
        pincode:4444
    }
}


//copy
//let copyEmp={...emp}//shallow copy
let copyEmp=structuredClone(emp) //deep copy

//check
emp.empId=1234;
emp.address.city="chennai"

console.log("emp :",emp)
console.log("empCopy :",copyEmp)