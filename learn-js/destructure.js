//packing
    //array
    let arr=[1,2,3,4]
    //object
    let obj={
        a:10,
        b:20
    }

//Unpacking(Destructing)
    //array
    console.log(arr[0])
    console.log(arr[1])

    let [m,n,p,q]=arr;
    console.log(m)
    console.log(q)

    //object
    console.log(obj.a)
    console.log(obj.b)

    let {a,b}=obj;
    console.log(a)
    console.log(b)