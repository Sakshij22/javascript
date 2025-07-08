let input= document.querySelector('input');
let btn = document.querySelector('button');
let list = document.getElementById('list');


btn.addEventListener('click',function(){
    let searchText = input.value;
    fetchData(searchText);
    input.value='';
})
function fetchData(searchText){


    fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`).
    then((res)=>{
        return res.json()

    }).then((response)=>{
        console.log(response,"kya");
        
        manipulateDom(response)

    })
}


function manipulateDom(datas){
    let figure = document.createElement('figure');

    for(let data of datas){
        let figure = document.createElement('figure');

        if(data.show.image){
            figure.innerHTML = `
            <img src=${data.show.image.original} alt='photo'/>
            <br/>
            <h2> Genre: ${data.show.genres[0]} </h2>
            `
            list.appendChild(figure)
        }
    }
}
       
      
    

 