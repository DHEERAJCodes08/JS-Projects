const btn =document.querySelector(".switch-btn")
const video =document.querySelector(".video-container")

const preloader = document.querySelector(".preloader")

window.addEventListener("load", function(){       //load acts after the Complete loading of the Webpage ie After html,css,js  but when we use DOMContentLoaded acts when the just html gets
    preloader.classList.add("hide-preloader")     // loaded immediately it dose not wait for the Css and Js to Load  
})

btn.addEventListener("click", function(){
    if(!btn.classList.contains("slide")){   //the meaning of the Sentence becomes that if the btn classList dose not contains the slide class then apply the Codition
        btn.classList.add("slide")
        video.pause();

    }
    else{
        btn.classList.remove("slide")
        video.play();
    }
})