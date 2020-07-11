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

// const Joon = { name: 'Joon', age: 28 };

// Joon.age = 29;

// console.log(Joon);

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
// const add = (a, b) => a + b;

// console.log(add(1, 2));

//-------------------------'--------------------------------'--------------
// let number = 1;

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   speak() {
//     console.log('${    number} : asdf');
//   }
// }

// const Joon = new Person('Joon', 28);

// Joon.speak();
//''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
// class User {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }
//   get age() {
//     return this._age;
//   }
//   set age(value) {
//     this._age = value < 0 ? 0 : value;
//   }

//   speak() {
//     console.log(this.age);
//   }
// }

// //const Ho = new User('Hojoon', 'Yoon', 3);

// //console.log(Ho.age);

// class Someone1 extends User {
//   speak() {
//     super.speak();
//     console.log('aaaa');
//   }
// }

// const seo = new Someone1('a', 'b', 6);

// //console.log(seo.age);

// seo.speak();
//---------------------------object-------------------------------------------------
// 1. Literals and properties
// object = { key : value};
// const cat = { name: 'yayong', age: 4 };

// console.log(cat.name, cat.age);
// console.log('aa');
// console.log(cat['name'], cat['age']);

//
// function MakePerson(name, age) {
//   console.log(name, age);
// }

// MakePerson('Joon', 21);
// console.clear();
const arrs = [0, 1];

// for (let arr of arrs) {
//   console.log(arr);
// }
// console.clear();

// arrs.forEach((arr, index) => console.log(arr, index));

// arrs.push('5');

// for (let arr of arrs) {
//   console.log(arr);
// }
// //console.clear();

// //arrs.pop();

// for (let arr of arrs) {
//   console.log(arr);
// }

// const s = 'abc,defg,hijkl,mnopq';
// const arr2 = s.split(',', 4);
// console.log(arr2);

//----------------'---------------------------------'---------------------------------------

const id = prompt('enter your id');
const password = prompt(`enter your ${arrs[0]}`);
console.log(id, password);
