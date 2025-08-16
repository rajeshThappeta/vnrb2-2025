//get elements
let form = document.querySelector("form")
let firstInput = document.querySelector("#first")
let secondInput = document.querySelector("#second")

//add evnt lsnt
form.addEventListener('submit', (event) => {
    //stop page reload after form submit
    event.preventDefault()
    //get values from iput elements
    let first = Number(firstInput.value);  //12
    let second = Number(secondInput.value);//12

    console.log(first + second) 
})