function getDataFromAPI(){

    //make API req
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
}



getDataFromAPI()

console.log("hello")
console.log("last line")