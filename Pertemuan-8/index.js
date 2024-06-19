//JavaScript EcmaScript (ES)6

//1. Let & Const
// Penggunaan conts pada array dan object
const number = [1,2,3,4,5];
number[2] = 10
console.log(number);

const john = {
    name: "John Doe",
    age: 30,
    isActive: true,
};
john = {};
john.age = 31,
console.log(john);

//2. String Literal
const john = {
    name: "John Doe",
    age: 30,
    isActive: true,
};
//Hi, nama saya John Doe. Umur saya 30 tahun
// let string5 =
//   "Hi, nama saya" + john.name + ".Umur saya"+ john". 30 tahun"
// console.log(string5);

// let string6 = 'Hi, nama saya ${john.name}. Umur saya
// console.log(string6);


//3. Arrow Function
// function greetings5(name){
//     return 'Hello ${name}}';
// }

//Deklarasi arrow function
// const greetings6 = (name, age, status) => {
//     return 'Hello ${name}}' ;
// };

//Implicit Return Value
// const greetings6 = (name, age, status) =>  'Hello ${name}';

//Penggunaan Aarrow function pada callback function
// let = numbers [1,2,3,4,5];
// let output = numbers.map((item) => item * 5);

//4. Default parameter
const greetings5 = (name, age) =>
    'Hi, nama saya ${name}. Umur saya ${age} tahun.'