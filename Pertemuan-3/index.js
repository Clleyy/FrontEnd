// // //review exercise

// // function hitungBmi(berat,tinggi) {
// //     let bmi = berat / (tinggi * tinggi);
// //     return bmi;

// // }

// // let berat = 53
// // let tinggi = 1.70

// // let bmi = hitungBmi (berat,tinggi)


// // // IIFE & Callback Function
// //  //BMI = berat / (tinggi * tinggi)
// //  function calculateBMI(berat,tingi){
// //     let bmi = berat / (tinggi*tinggi);
// //     return bmi;
// //  }

// //  let output = calculateBMI(52, 1.70)
// //  console.log("BMI anda adalah" + output)




// //  //IIFE (Immediately Invoked Function Expression)
// // //  (function (){
// // //     console.log("Hello IIFE")

// // //  })()

// //  //Callback Function
// //  function greetings(){
// //     console.log("Hello")
// //  }

// // function sayHello(callback) {
// //     callback()
// // }

// // sayHello(greetings)


// // function hitungBmi(berat, tinggi, callback) {
// //     let bmi = berat / (tinggi * tinggi);
// //     let classification;
   
// //      if (bmi < 18.5) {
// //        classification = 'underwight'
// //      } else if (bmi >= 18.5 && bmi < 24.9) {
// //        classification = 'normal range'
// //      } else if (bmi >= 25 && bmi < 29.9) {
// //        classification = 'pre obese'
// //      } else {
// //        classification = 'obese'
// //      }
// //      callback(classification);
 
// //  }
// //  hitungBmi(53, 1.77, function(bmi) {
// //      console.log("BMI:", classification);
// //  });

//  // IIFE & Callback Function

// //BMI = berat / (tinggi * tinggi)
// // function calculateBMI(berat, tinggi){
// //     let bmi = berat / (tinggi * tinggi)
// //     let classification;
// //     if (bmi < 18.5) {
// //         classification = 'Underweight'
// //     } else if(bmi >= 18.5 && bmi < 24.9){
// //         classification = 'Normal Range'
// //     } else if (bmi >= 25){
// //         classification = 'Overweight'
// //     } else if (bmi > 25 && bmi <= 29.9){
// //         classification = 'Pre obese'
// //     } else {
// //         classification = 'Obese'
// //     }
// //     return classification
// // }

// // let output = calculateBMI(90, 1.7)
// // console.log('Clasifikasi BMI anda adalah ' + output)


// //IIFE (Immediately Invoked Function Expression)
// // No params and arguments
// // (function (){
// //     console.log("Hello IIFE")
// // })()
// // With params and arguments
// (function (name){
   
//     console.log("Hello " + name)
// })('John')

// //Callback function
// //No params and arguments
// // function sayHello(callback){
// //     callback()
// // }

// // sayHello(function (){
// //     console.log('Hello')
// // })

// //With params and arguments and return value
// function sayHello(callback){
//     let output = callback('John')
//     console.log(output)
// }

// sayHello(function (name){
//    return 'Hello ' + name
// })

//Array & Objek
//Deklarasi array
// Cara 1. Array literal
// let numbers = [1, 2, 3, 4, 5];
// Cara 2. Kata kunci new
// let numbers2 = new Array(6, 7, 8, 9, 10);

//Tipe data dalam array
// let numbers = [1, 2, 3, 4, 5]; //numbers
// let students = ["John", "Jane", "Bob"]; //String
// let john = ["John", 30, true, [80, 90, 100]]; //Campuran

// console.log(numbers);
// console.log(students);
// console.log(john);

//Mengakses element didalam array
//melalui index
// console.log(numbers[3]); //4
// console.log(students[1]); //Jane
// console.log(john[3]); //[80, 90, 100]
// console.log(john[3][1]); //90

// numbers[3] = 100;
// console.log(numbers);

//Array length
// console.log(numbers.length); //5
// console.log(student.length); //3

//Mengakses element terakhir
// console.log(numbers[numbers.length - 1]);

//Array Method
// let array = [1, 2, 3, "halo", false, true];
// console.log(array);
// console.log(array.toString());
// console.log(array.join("-"));

// array.pop();
// console.log(array);
// array.push("Selamat pagi");
// console.log(array);
// array.shift();
// console.log(array);
// array.unshift("Selamat Pagi");
// console.log(array);
//Splice
// array.splice(4, 0, 4, 5);
// console.log(array);

//Concatination
// let buah = ["pisang", "apel", "jeruk"];
// let sayur = ["tomat", "bayam", "wortel"];
// let biji = ["kedelai", "kacang tanah", "kacang polong"];

// let makanan = buah.concat(sayur, biji);
// console.log(makanan);

//Slice
// let cemilan = ["kripik singkong", "kripik kentang", "krupuk ikan", "permen", "coklat", "kue"];
// let cemilanGurih = cemilan.slice(0, 3);
// let cemilanManis = cemilan.slice(3);

// console.log(cemilanGurih); // Output: ["kripik singkong", "kripik kentang", "krupuk ikan"]
// console.log(cemilanManis); // Output: ["permen", "coklat", "kue"]

//Object
//Deklarasi Object
//Cara 1. Objek literal

let john = {
  firstName: "John",
  age: 30,
  isMarried: true,
  grade: [80, 90, 100],
  sayGreetings: function () {
    console.log("Hello my name is " + this.firstName);
  },
  address: {
    street: "Jl. Arnold Mononutu",
    city: "Minahasa Utara",
    province: "Sulawesi Utara",
    postalCode: 95371,
  },
};
console.log(john);
// 2 cara mengakses properti dalam object
// 1. Dot notation
console.log(john.firstName);
john.job = "Teacher"; // Tambah properti baru
console.log(john);
// 2. Bracket notation
console.log(john["isMarried"]);
john["nationality"] = "indonesian"; //Tambah properti baru
console.log(john);

//Object Method
john.sayGreetings();

//Object inside Object
console.log(john.address.street);

//Delete property
delete john.grade;
console.log(john);

//Array Object
let students = [
  {
    nim: "11111",
    name: "John",
    address: "Manado",
  },
  {
    nim: "22222",
    name: "Jack",
    address: "Minut",
  },
  {
    nim: "33333",
    name: "Jane",
    address: "Tondano",
  },
];