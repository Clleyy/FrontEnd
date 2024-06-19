// //for loop

// // for (let i = 1; i <= 10; i++) {
// //     console.log(i);
// //   }

// // let arr = [1, 2, 3, 4, 5];
// // for (let i = 0; i < arr.length; i++) {
// //   console.log(arr[i]); 
// // }


// const students =[
//     {
//         id: 1,
//         name: "John",
//         isActive: true,
//         grade: 80,
//     },
//     {
//         id: 2,
//         name: "Jack",
//         isActive: true,
//         grade: 90,
//     },
//     {
//         id: 3,
//         name: "Bob",
//         isActive: false,
//         grade: 70,
//     },
// ];

// //menampilkan element array semuanya
// console.log(students);

// //menampilkan element array item by item
// for(let i=0; i<students.length; i++){
//     console.log(students[i]);
// }

// //Array built-in method
// //1. for each()
// students.forEach(function(item) {
//     console.log(item);
// });

// //Array.map()
// let output = students.map(function(item) {
//     item.grade +=5;
//     return item;
// });
// console.log(students);
// console.log(output);

const array1 = [1,4,9,26];
const map1 = array1.map(function (item){
    return item*2;
});
console.log(map1);

//filter()
let filterStudents = students.filter(function(item) {
    return item.isActive === true;
});

console.log(filterStudents);

let findStudents = students.find(function(item){
    return item.isActive === true;
});

console.log(filterStudents);