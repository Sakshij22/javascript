// function a(a){
//     console.log('hello');

//     return function
    
// }







// function sum(a){
//     return function(b){
//         if(b) return sum(a+b)
//             return a
//     }
// }
// console.log(sum(1)(2)(3)(4)(5)(6)(7)(8)());


let arr=[1,2,3,4,5,65,7]

let largest= arr.reduce((max,current)=>{
    return current > max?
    current: max;
},arr[0]);
console.log(largest);
