const userEmail = [];


if(userEmail){
    console.log("Got user email")
}else{
    console.log("Don't have user email")
}

// falsy value

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values 

//"0",'false'," ",[], {}, function(){}


//if array is empty

// if(userEmail.length === 0){
//     console.log("Array is Empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}


//Nullish Coalescing Operator (??): null undefined

let val1;

// val = 5 ?? 10

// val = null ?? 10;

val = undefined ?? 37;

console.log(val);


//Ternary Operator 

// condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice>=80 ? console.log("greater than 80") : console.log("lesss than 80");











