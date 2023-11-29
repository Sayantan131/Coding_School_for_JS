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





 const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName:"Sayantan",email:"maitysayantan111@gmail.com"})
    },1000)
 })

 promiseThree.then(function(user){
    console.log(user);
 })


 const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({userName:"Sayantan",password:"1234"})
        }else{
            reject('ERROR: Something Went Wrong');
        }
    },1000)
 })

 promiseFour.then((user)=>{
    console.log(user);
    return user.userName;
 }).then((username)=>{
    console.log(username);
 }).catch((error)=>{
    console.log(error);
 }).finally(()=>{
    console.log("The promise is either resolve or reject");
 })  


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({userName:"JavaScript",password:"1234"})
        }else{
            reject('ERROR: JS Went Wrong');
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
    
}

consumePromiseFive();

// async function getAllUsers(){

//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ",error)
//     }
 
// }

// getAllUsers();


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log("E: ",error);
})