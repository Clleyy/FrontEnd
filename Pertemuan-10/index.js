//export dan import

// console.log("Module");
// import{name, numbers as angka, sayHello} from "./utils.js";
// import greetings from "./greetings.js";

// console.log(name, numbers, sayHello);
// console.log(name);
// console.log(numbers);
// console.log(sayHello());
// console.log(Hello());

// Asynchronous js

// console.log("proses 1");
// console.log("proses 2");
// console.log("proses 3");
// console.log("proses 4");

//output
//proses 1
//proses 2
//proses 3
//proses 4

// Asynchronous/ multi thread/ non-blocking
console.log("proses 1");
setTimeout(() => {
    console.log("proses 2");
}, 5000);
etTimeout(() => {
    console.log("proses 3")
}, 3000);
console.log("proses 4");
console.log("prosesn 5");

setTimeout(() => {
    console.log("Cuci Baju"); //proses asynchronous
}, 2000);
console.log("Menyapu");
console.log("Mengepel");
console.log("Memasak");
// 1000 ms = 1s

//output
//Menyapu
//Mengepel
//Memasak
//Cuci Baju