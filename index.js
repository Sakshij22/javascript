fetch('https://dummyjson.com/recipes')
   .then((res)=>res.json())
    .then((data)=>{
    call(data.recipes);

});

let div =  document.querySelector('div');


function call(data){
    console.log(data,"heheh");

    for(let i of data){
    let img = document.createElement('img');
    img.setAttribute('src',i.image);
    img.style.width = "200px";
    img.style.margin = "10px";


    div.append(img);
   
        // let h1=document.createElement('h1')
        // h1.innertext=i.name
        // div.append(h1)
    }
    
}