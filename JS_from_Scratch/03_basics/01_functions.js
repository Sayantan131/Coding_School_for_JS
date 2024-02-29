

function sayMyName(){
    console.log("S")
    console.log("A")
    console.log("Y")
    console.log("A")
    console.log("N")
    console.log("T")
    console.log("A")
    console.log("N")
}

// sayMyName();


// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }

function addTwoNumbers(number1,number2){
    let result = (number1+number2);
    return result; 
}

const result = addTwoNumbers(2,5);

// console.log("Result: ", result);

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter  a username");
//         return
//     }
//     return `${username} just logged in`
// }

function loginUserMessage(username="sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}




// console.log(loginUserMessage("sayantan"));
// console.log(loginUserMessage());


function calculateCartPrice(val1,val2,...num1){   //it is a rest operator
            return num1;
}

// console.log(calculateCartPrice(38783,673,6386,8724));

const user = {
    username:"Sayantan",
    price:166
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`)
}

// handleObject(user);
handleObject({
    username:"sam",
    price:455
})

const myNewArray = [200,300,4994,455];

function returnSecondvalue(getArray){
    return getArray[1]
}

console.log(returnSecondvalue(myNewArray));


