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
