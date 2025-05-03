//employee object
let employee={
    eid:100,
    name:'bhanu',
    age:35,
    basic:10000,
    mobile:99999999  
}


//Accessing properties
    //dot notation
    console.log(employee.eid)
    console.log(employee.name)
    console.log(employee.city)

    //bracket notation
    console.log(employee['eid'])
    console.log(employee['name'])

    //traverse object (iterate - for in loop)
    for(let v in employee){
        console.log(employee[v])
    }

//Insertion
    employee.city='hyderabad'
    

//Delete
    delete employee.mobile
    

//Update
     employee.name='bhanu'

     console.log(employee)


//Complex object
    let student={
        sno:111,
        name:'raghu',
        marks:[90,98,97],
        address:{
            street:"KPHB",
            city:"hyd",
            pincode:8888888
        },
        //method
        getAverage:function(){
            //business logic to find average 
            console.log("this is method call")
        }
    }

    student.getAverage()

    console.log(student.address.city)

    