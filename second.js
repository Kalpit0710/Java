// function examplefxn() {
//     if (true) {
//         var functionscope = "I am function-scoped"; //*var should not be used outside fxn and same for const
//     }
//     console.log(functionscope);
// }
// examplefxn();
// console.log(functionscope);

// function examplefxn() {
//     if (true) {
//         let functionscope = "I am function-scoped"; //* let should be used inside block..print statement should not be outside if
//         console.log(functionscope);
//     }
// }
// examplefxn();

// console.log(x); //* prints undefined known as hoisting... it also happens with let and const but gives different output an error
// var x=5;
// console.log(x);

//* functions are also hoisted (accessing a fxn before its declaration)
// hello();
// function hello(){
//     console.log("hello world");
// }

//? Object
// let person={
//     name :"Abhishek",
//     age: 22,
//     isStudent: false
// };
// console.log(person.name);
// console.log(person);
// console.log(typeof(person.isStudent));

//? Arrays
// let person=[1,"Abhishek",false];
// console.log(person);
// console.log(person[2]);

// let a=5+"5"
// console.log(a);
// console.log(typeof(a));

