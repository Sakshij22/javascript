//...
// let arr=[1,2,3,4,5]
// let num=[...arr,6,7,8,9]

// console.log(num);

// function sum(a,b,c,...rest){
//     console.log(rest,"hehe");
    
// }
// sum(1,2,3,4,5,6,7,6)

// let obj={
//     id:1,
//     name:'hello'
// }
// obj.name


// let{id,name}=obj
// console.log(id);

// let arr=[1,2,3,4,5,6,7]
// console.log(arr[3]);

// let[a,b]=arr
// console.log();


//prototype

let obj={
    id:1,
    name:"hello"

}

// console.log(obj.__proto__.__proto__,"heheh");
// console.log(obj.map(),"hehee");

// console.log(obj.toString());
// console.log(obj.id);
// console.log(obj.fullName);



// let arr=[1,2,3,4,5]

// arr.map(()=>{

// })
// console.log(arr.__proto__.__proto__,"dekho");



// Array.prototype.myMap=function(callback){
//     let newArr=[]
//     for(let i=0;i<this.length;i++){
//         newArr.push(callback(this[i],i,this))
//     }
//     return newArr
// }

// let arr=[1,2,3,4,5]

//  let data= arr.myMap((a,b,c)=>{
//     return a*2
//  })
//  console.log(data,"data");
 

Array.prototype.myFilter=function(calback){
    let newArr=[]
    for(let i=0;i<this.length;i++){
        if(calback(this[i],i,this)){
            newArr.push(this[i])
        }
    }
    return newArr
}


let arr=[1,2,3,4,5,6,7]

let data= arr.myFilter((a,b,d)=>{
    return a>2
})
console.log(data);
