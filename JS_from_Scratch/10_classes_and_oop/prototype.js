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

