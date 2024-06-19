//Arry & Objek
//Deklarasi Array
// Cara 1. Array Literal
// let numbers = [1,2,3,4,5]
// Cara 2. Kata Kunci New
let numbers2 = new Array (6,7,8,9,10);

//Tipe data dalam Array
let numbers = [1,2,3,4,5]; //numbers
let student = ["John","Jane","Bob"]; //string
let john = ["John", 30, true, [80,90,100]]; //campuran

console.log(numbers);
console.log(student);
console.log(John);

//Mengakses element didalam array melalui index
console.log(numbers[3]);//4
console.log(student[1]);//Jane
console.log(John[3]);//[80,90,100]
console.log(John[3][1]);//90

numbers [3]= 100;
console.log(numbers);

//Array  length
console.log(numbers.length);//5
console.log(student.length);//3


//mengakses element terakhir
console.log(numbers[numbers.length -1]);

//Array Method
let array  = [1,2,3, "halo", false, true];
console.log(array);
//mengubah array menjadi toString
console.log(array.toString());
console.log(array.join("-"));

//mengubah dan mengeluarkan element array dengan pop()
array.pop();
console.log(array);
array.push("Selamat Pagi")
console.log(array);
array.shif("Selamat Pagi")
console.log(array);
array.unshif("Selamat Pagi")
console.log(array);

//Splice
array.splice(4,0,4,5);
console.log(array);

let makanan = abuah.concat(sayur,biji);
console.log(makanan);

let cemilan = ["pisang", "apel", "jeruk"];
let cemilanGurih = cemilan.slice(0,3)
let cemilanManis = cemilan.slice

console.log(cemilanGurih);
console.log(cemilanManis);

//Cara 1. Objek Literal
let john = {
    fristName : 'john',
    umur : 30,
    isMarried : true,
    grade : [ 80,90,100],
};
console.log("John");
//Cara 2. 