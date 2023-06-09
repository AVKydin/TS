import {IHz} from "./interfaces/hz.interface";





// ---------------------------------------------------------------------------—————————
// 2) протипізувати функції:
//
//     const user = {
//         name:"Max",
//         age:18,
//         gender:'male'
//     }

interface IUser  {
    name: string,
    age: number,
    gender: string
}

const user:IUser = {name:'Max', age:33, gender:'male'}

// function sum(a,b){
//     return a+b
// }
const sum =(a:number, b:number):number=> a+b;

// function showSum(a,b){
//     console.log(a + b);
// }
const showSum = (a:number, b:number):void => console.log((a + b))


// function incAge(someUser, inc){
//     someUser.age+=inc
//     return someUser
// }

const incAge = (someUser:IUser, inc:number):object =>{
    someUser.age +=inc;
    return someUser
}

//
console.log(sum(1, 2));
showSum(2,3)
incAge(user, 2)
console.log(user);
