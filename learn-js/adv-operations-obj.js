let product={
    pid:1234,
    name:'TV',
    brand:'Sony',
    price:500000
}

//Get all keys
console.log(Object.keys(product))

//Get all values
console.log(Object.values(product))


//Freeze
Object.freeze(product)

//modify product
product.brand='LG'
product.price=300000
console.log(product)



