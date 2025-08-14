

//I WILL CALL YOU IN 5 MINS

let yourAvailabilityAfter5Mins = true;
console.log("You primised to your frnd that u call him in 5 mins")

//Create Promise(You)
let callingPromise = new Promise((fulfilled, rejected) => {

    setTimeout(() => {
        if (yourAvailabilityAfter5Mins === true) {
            fulfilled('Hello frnd..')
        } else {
            rejected("Sorry ...")
        }
    }, 5000);


})


//Consume a Promise(Your frnd)
callingPromise
    .then(message => console.log("Fulfilled state :", message))
    .catch(message => console.log("Rejected state :", message))

console.log("hello")