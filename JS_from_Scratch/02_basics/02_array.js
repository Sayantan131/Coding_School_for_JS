const marvel_heros = ["spideman","Ironman","thor"];
const dc_heros = ["batman","superman","flash"];
  
// console.log(marvel_heros);
// const allheros = marvel_heros.concat(dc_heros);
//  marvel_heros.push(dc_heros);
// //  const a =marvel_heros.push(dc_heros);
// console.log(allheros);
// console.log(marvel_heros);


const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1,2,3,[4,45],[6,7,8,[4,6,7]]];

const  real_another_array = another_array.flat(Infinity);

// console.log(real_another_array);

console.log(Array.isArray("Sayantan"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name:"Sayantan"})) //intresting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));