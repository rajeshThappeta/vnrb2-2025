//Array of objects

   let students=[{sno:1,name:'ravi'},{sno:2,name:'vasu'},{sno:3,name:"vikas"}]

   let emps=[
    {
        eno:100,
        name:'kiran',
        age:34,
        salary:50000,
        skills:['react','java']
    },
    {
        eno:200,
        name:'mansa',
        age:32,
        salary:40000,
        skills:['nextjs','nodejs']
    },{
        eno:300,
        name:'madhu',
        age:37,
        salary:80000,
        skills:['angular','python']
    }
   ]

   for(let empObj of emps){
        for(let k in empObj){
            console.log(k," is ",empObj[k])
        }
   }
