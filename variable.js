'use strict'; // 1. 사용 이유 : 자바스크립트의 자유도가 너무 높아지면 안정적이지 못하기 때문에
console.log('Hello World!');

//2. Variable
// let (added in ES6)

// 3. Constants
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

const Joon = { name: 'Joon', age: 28 };

Joon.age = 29;

console.log(Joon);

// 4. Function declaration
function PrintHello(message) {
  console.log(message);
}

PrintHello('holiday');

// for (const arg of arts)
// {
//     console.log(arg);
// }

//args.forEach( (arg) => console.log(arg) );
//const add = (a,b) => a+b;
