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


//const obj3 = {target,source}
//in down line {} is target and obj1 & obj2 is source


// const obj3 = Object.assign({},obj1,obj2);
const obj3 = {...obj1,...obj2}; //spread operator

// console.log(obj3);

const users  = [
    {
        id:1,
        email:"m@gamil.com"
    },
    {
        id:1,
        email:"m@gamil.com"
    },
    {
        id:1,
        email:"m@gamil.com"
    }
]

users[1].email;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('name')) 

const course = {
    coursename: "js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

//cousrse.

const {courseInstructor} = course;

console.log(courseInstructor);