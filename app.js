"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = { name: 'Max', age: 33, gender: 'male' };
// function sum(a,b){
//     return a+b
// }
var sum = function (a, b) { return a + b; };
// function showSum(a,b){
//     console.log(a + b);
// }
var showSum = function (a, b) { return console.log((a + b)); };
// function incAge(someUser, inc){
//     someUser.age+=inc
//     return someUser
// }
var incAge = function (someUser, inc) {
    someUser.age += inc;
    return someUser;
};
//
console.log(sum(1, 2));
showSum(2, 3);
incAge(user, 2);
console.log(user);
