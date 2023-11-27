const promiseOne = new Promise(function(resove, reject){
    //do an async task
    //DB calls. crytography,network

    setTimeout(function(){
        console.log("Async task is complete");
        resove();
    },1000)

});

promiseOne.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2 complete");
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 consumed");
})