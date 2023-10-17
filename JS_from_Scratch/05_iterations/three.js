//for of

// ["","",""]

// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "hello world!";

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

//Maps 

const map = new Map()

map.set('IN',"India")
map.set('Fr',"France")
map.set('USA',"United State of America")

// console.log(map)

for (const [key,value] of map) {
    console.log(key, ':-' , value)
}

console.log(map)

