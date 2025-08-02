
const images =['https://images.unsplash.com/photo-1736890729709-4443ac5b6bf0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',''];

       
const slideShow = document.querySelector("#slideShow");
 
let currentIndex = 0;


setInterval(()=>{
   
    currentIndex = (currentIndex + 1) % images.lenght;
    slideShow.setAttribute("src", images[currentIndex]);

},2000);
