const user={
    username : "Sayantan",
    price : "999",

    welcomemessage: function(){
        console.log(this.username);
    }

}

// user.welcomemessage();

user.username = "sam";

// user.welcomemessage();

// console.log(this);



// function chai(){
//     let username = "sayamtan"
//     console.log(this.username);
// }

// chai();

// const chai = function(){
//     let username = "sayantan"
//     console.log(this)
// }


const chai = ()=> {
    let username = "sayantan"
    console.log(this)
}


// chai();

 
