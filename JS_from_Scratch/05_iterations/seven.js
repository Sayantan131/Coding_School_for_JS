const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.map( (num)=> num+10 )

// console.log(newNums);

//using foreach loop

// const newNums = [];

// myNums.forEach(  (num)=>{
//       num = num+10 ;
//     newNums.push(num);
// } )


const newNums = myNums
.map( (num)=>num * 10 )
.map( (num)=>num+1 )
.filter( (num)=>num>=40 )

console.log(newNums)