// let myName = "hitesh     "
// let mychannel = "Chai    "


// console.log(myName.trueLength());




let myHeros = ["thor","spiderman"]


let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}


Object.prototype.sayantan = function(){
    console.log(`sayantan is present in all objects`);
}


Array.prototype.heySayantan = function(){
    console.log(`Sayantan says hello`);
}



// heroPower.sayantan();
myHeros.sayantan();
myHeros.heySayantan();
// heroPower.heySayantan();


//inheritance

const user = {
    name:"Chai",
    gmail:"chai@gmail.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport={
    isAvailable:false
}

const TASupport = {
    makeAssignment :'JS assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = user;

//modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher);


let anotherUsername = "Chaiaurcode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Sayantan".trueLength()
"Adrija".trueLength()
"icecream".trueLength()

