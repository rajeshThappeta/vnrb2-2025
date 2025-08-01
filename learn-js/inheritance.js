//Inheritance (Parent ---> Child)

//Parent or Super or Base class
class Person  {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address
    }
}

//Student IS A Person
//Child or Subclass or derived class
class Student extends Person {
    constructor(name, age, address, collegeName, fee) {
        //pass name,age and address to Parent class
        super(name, age, address)
        this.collegeName = collegeName
        this.fee = fee
    }
}

//Create STudent object
let std = new Student('ravi', 21, 'Hyderabad', 'vnr', 150000)
console.log(std.toString())


//Employee IS A Person
class Employee extends Person {
    constructor(name, age, address, companyName, salary) {
        super(name, age, address)
        this.companyName = companyName
        this.salary = salary
    }
}


//Create employee object
let emp=new Employee('Kiran',35,'Vijawada','CTS',300000)
console.log(emp)


//object(datatype)
//Object(Root constructor)



let test={
    a:10
}

console.log(test)