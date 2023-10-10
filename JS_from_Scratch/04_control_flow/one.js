//if statement


if(false){

}
if(false){

}

const isUserloggedIn = true;
const temperature = 41;

// if(2 != 3){
//     console.log("executed");
// }

// if(temperature===40){
//     console.log("that is from if")
// }else{
//     console.log("that is from the else part")
// }

//<,>,<=, >=, ==, !=, ===, !==


// *************Block Scope ************

// const score = 200;
// if(score>100){
//     let power = "fly";
//     console.log(`user power: ${power}`)
// }
// console.log(`user power: ${power}`);


const balance = 4000;


// aisa nahi karna hai , lagake
// if(balance>500) console.log("test"), console.log("test2");


// *****************if else nested*************8

// if(balance<1000){
//     console.log("balance less than 1000")
    
// }else if(balance<2000){

//     console.log("balance less than 2000")
// }else if(balance<3000){

//     console.log("balance less than 3000")
// }else{
//     console.log("balance less than 5000")
// }

//Real life example: 

const userloggedIn = true
const debitCard = true
const loggedInfromGoogle = false
const loggedInfromEmail = true

if(userloggedIn && debitCard && loggedInfromEmail && loggedInfromGoogle ){
    console.log("Allow to buy a course");
}
if(userloggedIn || debitCard || loggedInfromEmail || loggedInfromGoogle ){
    console.log("Allow to buy a course");
}




