// this is the Program for the implementation of the Modal Project

const Closebtn = document.querySelector(".close-btn")
const Btn = document.querySelector(".modal-btn")
const modal = document.querySelector(".modal-overlay")
Btn.addEventListener("click",function(){
    modal.classList.add("open-modal")
    
})

Closebtn.addEventListener("click",function(){
    modal.classList.remove("open-modal")
})