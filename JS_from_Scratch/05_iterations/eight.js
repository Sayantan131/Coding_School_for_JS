const myNums = [1,2,3,4]

// const myTotal = myNums.reduce( function(acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc+currval
// },0 )

// const myTotal = myNums.reduce( (acc,currval)=> acc+currval,0
// ,0)

// console.log(myTotal)

const shoppingcart = [
    {
        itemname:'js course',
        price:1000
    },
    {
        itemname:'java course',
        price:1000
    },
    {
        itemname:'py course',
        price:1000
    }
]



const PriceTotal = shoppingcart.reduce( (acc,item)=> acc + item.price, 0 )

console.log(PriceTotal);

