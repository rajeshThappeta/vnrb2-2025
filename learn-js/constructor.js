//object literal(objects of differrent types)
let person = {
    pid: 100,
    name: 'ravi',
    city: "hyd",
    mobile: 99999,
    pincode: 33333,
    email: 'test@mail.com',
}



//create 100 person objects
// 100 X 10 = 1000 lines
//  10 + 100 = 110 lines


//Constructor function(Multiple objects of same type)

// create a Blueprint(Constructor function)
// function Person(pid, name, city) {
//     //object initilization logic
//     //this ---->{ pid :1,name:'bhanu',city:'hyd',.........}
//     this.pid = pid;
//     this.name = name;
//     this.city = city;
// }

// //add methods to prototype of Constructor function
//   Person.prototype.getName=function(){
//     return this.name;
//   }


//class(to create blueprint)
    class Person{
        //a special method to initilize current object
        constructor(pid, name, city){
            this.pid=pid;
            this.name=name;
            this.city=city;
        }

        getName(){
            return this.name;
        }
    }

//Create objects of that blueprint
let p1 = new Person(1, 'bhanu', 'hyd',)
let p2 = new Person(2, 'kiran', 'chennai')
console.log(p1.getName())
console.log(p2)



// studentDetails(lower camelcase)
// StudentDetails(upper camelcase)