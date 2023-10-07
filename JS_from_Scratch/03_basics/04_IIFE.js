//Immediately Invoked Function Expressions(IIFE)

(function chai(){
console.log("DB CONNECTED")  //named iife
})();

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`)  //unnamed iife
})("sayantan")