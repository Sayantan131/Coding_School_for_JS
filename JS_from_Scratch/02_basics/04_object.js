// const tinderUser = new Object();

const tinderUser = {};

tinderUser.id = "123kjdjh";
tinderUser.name = "Sayantan";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email:"sayantan@google.com",
    fukkname:{
        userfullname:{
            firstname:"Sayantan",
            lastname:"Maity"
        }
    }
}

// console.log(regularUser.fukkname.userfullname.firstname);

const obj1 = {1:"a",2:"b"};
const obj2 = {3:"c",4:"d"};

// const obj3 = {obj1,obj2};
const obj3 = Object.assign(obj1,obj2);

console.log(obj3);