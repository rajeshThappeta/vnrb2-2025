//A function can be stored in a variable
let a = function () { }

//A function can send as arugument
function test(x) {
    console.log(x)
}

test(function () { })

//a function can return another function
function createGreeter(timeOfDay) {
        return function (name) {
            console.log(`Good ${timeOfDay} to ${name}`)
        }
    }

//create specific function
let morningGreeter = createGreeter('morning')
let eveningGreeter = createGreeter('evening')

morningGreeter('Ravi')
eveningGreeter('Bhanu')