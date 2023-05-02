
const btn  = document.querySelector(".nav-toggle")
const links  = document.querySelector(".links")


btn.addEventListener("click",function(){
/*     console.log(links.classList)
    //console.log(links.classList.contains("random"))   //this means that the Random Class is not present
     
    if(links.classList.contains("show-links")){
        links.classList.remove("show-links")
    }
    else{
        links.classList.add("show-links")
    }
 */

    //insted of usin the Complete if function we can directly use this in the one line bu

    links.classList.toggle("show-links")  //here in Toogle function  if the Class is present it will remove and if the Class is not present it will delete
    
})

