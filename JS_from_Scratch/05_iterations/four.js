//forin loop

const myObject = {
    js:'JavaScript',
    cpp:'C++',
    rb:'rubi',
    Swift:'Swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} is the shortcut for ${myObject[key]}`)
}

//array in forin

const programming = ['js','cpp','py','java','ruby','java']

for (const key in programming) {
//    console.log(programming[key])
}

const map = new Map()

map.set('IN',"India")
map.set('Fr',"France")
map.set('USA',"United State of America")

// for (const key in map) {  //using forin lopp map is not itratable // intaration is a process of repeatedly executing a process of operation
 
//    console.log(key)
// console.log(key)
// }