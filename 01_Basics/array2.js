const marvel_heros=["thor","Ironman","spiderman"]
const rc_heros=["superman","flash","batman"]
const newArr=marvel_heros.push(rc_heros);
console.log(marvel_heros);
console.log(newArr);
console.log(rc_heros);
console.log(marvel_heros[3][1]);

const num1=[2,3,98,43,2]
const num2=[1,4,7,9,32]
//const newNum=num1.concat(num2);
//console.log(newNum);
console.log(num1);

//spread operator
const all_num=[...num1,...num2];
console.log(all_num)

const another_array=[2,3,4,[5,2],1,[4,6,[8,7,1]],9]
//const real_another_array=another_array.flat(1);
//console.log(real_another_array);
const real_another_array=another_array.flat(2);
console.log(real_another_array)

console.log(Array.isArray("Kajal"));
console.log(Array.from("Kajal"));
console.log(Array.from({name:"soumya"}))

let score1=100
let scroe2=200
let score3=800
console.log(Array.of(score1,scroe2,score3));