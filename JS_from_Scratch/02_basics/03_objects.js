//singleton

//object literals

const mySym = Symbol("key1");  ///********************important*****************

// Object.create
const JsUser = {
    name:"sayantan",
    "full name":"Sayantan Maity",
    [mySym]:"myKey1",
    email:"maitysayantan111@gmail.com",
    age:22,
    location:"kolkata",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
     
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser.age);
// console.log(JsUser.location);
// console.log(JsUser.isLoggedIn);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mySym]);


 JsUser.email = "maitysayntan67@gmail.com";
//  console.log(JsUser.email);
//  Object.freeze(JsUser); /////*****************88important */
 JsUser.email = "maitysayantan@google.com";
//  console.log(JsUser);


  JsUser.greeting = function(){
    console.log("Hello JS user");
  }
  
  JsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`); ////***********important***** */
  }

  console.log(JsUser.greeting());
  console.log(JsUser.greetingTwo());