const btns = document.querySelectorAll(".tab-btn ");
const about = document.querySelector(".about");
const content = document.querySelectorAll(".content");

about.addEventListener("click", function(e){
   const id = e.target.dataset.id;
   console.log(id);

   if(id){
    //remove the Class fro other items
    btns.forEach(function (btn){
        btn.classList.remove("active")
    });
    e.target.classList.add("active");
    
    //hide other articles
    content.forEach(function (article){
        article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");

   }


})