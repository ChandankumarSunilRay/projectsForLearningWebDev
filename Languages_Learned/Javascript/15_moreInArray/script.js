// Array methods
// ....spread operator

let myArr = ['chandan','suraj','mummy','dropadi','devi']
let anotherArr = ['nadnahc','jarus','ymmum','idapord','ivedi']
let names = ['bablu','ankit','satyam','ayush','pyush']


// -----------!proper way
myArr.push(anotherArr);
console.log(myArr);

// ---decent way
let thirdArr = myArr.concat(anotherArr,names)
console.log(thirdArr);

// --------spreadOperator(widely used)
let spreadOperator = [...myArr, ...anotherArr, ...names]
console.log(spreadOperator);

// -------
const nestedArr = [1,2,3,[4,5,6],7,[8,9]]
const solveNestedArr = nestedArr.flat(Infinity)
console.log(solveNestedArr);

// -----
console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))          //it will make a new array
console.log(Array.from({name:"hitesh"}))   //interesting (it needs what should be made array)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))   // it  will make another array






