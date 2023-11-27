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