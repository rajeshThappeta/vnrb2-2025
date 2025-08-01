//Instance variables & Static variables
//Instance methods & Static methods

class Student {
    //constructor
    constructor(sno, firstName, lastName) {
        //instance properties(they are part of each object)
        this.sno = sno;
        this.firstName = firstName;
        this.lastName = lastName
    }

    //static members
    static collegeName = 'vnr'
    static pincode = 55555


    //instance method(methods can be called on object)
    getFullName() {
        return this.firstName + " " + this.lastName
    }
    //static method
    static getCollegeDetails() {
        return Student.collegeName
    }
}


//create student obj
console.log(Student.getCollegeDetails())
let std1=new Student(100,'Ravi','Kumar','vnr',55555)


console.log(std1)

