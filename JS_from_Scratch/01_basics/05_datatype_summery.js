//primitive

//7 types: String, Number, Bollean, null, undefined,  symbol,BigInt,


const score  =100;

const scoreValue=false;
const outsideTemp = null;

let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 21655641654946464666n; //bigInt datatype

//Reference Type(Non primitive)

//Array, Objects, Functions //I have to master object & event in browser


const heros = ["shaktimna","nagarajj","doga"];
let muObj= {
    name :"sayantan",
    age:22,
}



const myfunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);


//**************************************** */

//Stack(primitive), Heap(non-premitive)

let myYoutubename = "Mrsayantan";

console.log(myYoutubename);

let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne;

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);

