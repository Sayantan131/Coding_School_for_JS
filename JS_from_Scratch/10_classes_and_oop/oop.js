
//object literal
const user = {

    username:"Sayantan",
    loginCount:8,
    signedIn:true,

    getUserDetails: function(){
      //  console.log("Got user details from database");
       // console.log(`username: ${this.username}`);
       console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails())

//console.log(this);


function User(username, loginCount, isLoggedIn){

  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greetings = function(){
    console.log(`Welcome ${this.username}`);
  }

  return this;
}

const userOne = new User('Sayantan',12,true);
const userTwo =new User('Adrija',11,false);

console.log(userOne);
console.log(userTwo);

/*
after use of new keyword 
i)a new object will create 
ii)a constructor function will be called all arguments will be packed in it
iii)for this key word all argument will store in the object
iv)get the result
*/

