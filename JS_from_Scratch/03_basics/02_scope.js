let a = 300;

if(true){
    let a = 30;
    const b = 40;
}

// console.log(`INNER: ${a}`);
// console.log(a);



///
// ++++++++++++++++++++Scope level parent  can not access the child elements but child can acces the parent elements
function one(){
    const username= "Sayantan";
    
    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);
    two();
   
}

// one();

if(true){
    const username = "Sayantan";
    if(username === "Sayantan"){
        const website = " youtube";
        // console.log(username   + website)

    }
    // console.log(website);
}

// console.log(username);



///+++++++++++ ++++++++++++++++++++++++++++++++++++++intresting ++++++++++++ cosept of hoisting

function addone(num){
    return num+1;
}

console.log(addone(3));





// console.log(addTwo(7));
const addTwo = function(num){
    return num+2;
}
