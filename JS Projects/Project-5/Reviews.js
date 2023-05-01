

    const reviews = [
        {
            id:1,
            img:"images/glow.jpg",
            name:"Sara Jones ",
            job:"UX DESIGNER",
            info:"UX DEsign ipsum dolor sit amet consectetur adipisicing elit. Iyie gerge bsfgjw gfjewqgf vefh hfgrg gferg gwt hgjrg hfewf ewbg hfbejjfg bjjebf bc bg4d b gfbd fgb df gfb fbbg  gfbd gf kfhbkf bkfbv bjfdv hfdigyi" 
              
        },
        {
            id:2,
            img:"images/175958478_525556551976310_667427404318292669_n.jpg",
            name:"Dheeraj Prasad ",
            job:"Software Engineer",
            info:"Software Engineer ipsum dolor sit amet consectetur adipisicing elit. Iyie gerge bsfgjw gfjewqgf vefh hfgrg gferg gwt hgjrg hfewf ewbg hfbejjfg bjjebf bc bg4d b gfbd fgb df gfb fbbg  gfbd gf kfhbkf bkfbv bjfdv hfdigyi" 
              
        },
        {
            id:3,
            img:"images/off.jpg",
            name:"Tom Jeery ",
            job:"Cartoon Network",
            info:"Cartoon Network dolor sit amet consectetur adipisicing elit. Iyie gerge bsfgjw gfjewqgf vefh hfgrg gferg gwt hgjrg hfewf ewbg hfbejjfg bjjebf bc bg4d b gfbd fgb df gfb fbbg  gfbd gf kfhbkf bkfbv bjfdv hfdigyi" 
              
        },
        {
            id:4,
            img:"images/213610457_525540515311247_7441651600375690326_n.jpg",
            name:"Ninja Hatorii ",
            job:"Nick Lodian",
            info:"NInja Hatorii lorem ipsum dolor sit amet consectetur adipis loremIyie gerge bsfgjw gfjewqgf vefh hfgrg gferg gwt hgjrg hfewf ewbg hfbejjfg bjjebf bc bg4d b gfbd fgb df gfb fbbg  gfbd gf kfhbkf bkfbv bjfdv hfdigyi " 
              
        }
    ]

    const img =document.getElementById("person-img")
    const author =document.getElementById('author');
    const job =document.getElementById('job');
    const info =document.getElementById('info');

    const prevbtn = document.querySelector(".prev-btn")
    const nextbtn = document.querySelector(".next-btn")
    const randombtn = document.querySelector(".random-btn")



    window.addEventListener("DOMContentLoaded", nextReviews)
    let count = 0;
    function nextReviews(e){
        console.log("shake and break");
        showreviews();
    }
     
    function  showreviews(){
        const item = reviews[count]
        console.log(item)
        img.src = item.img
        author.textContent = item.name
        job.textContent = item.job
        info.textContent = item.info
    }

        nextbtn.addEventListener("click", function(){
            count++;
            if (count > reviews.length-1){
                count = 0;
            }
            showreviews(count)
        })

        prevbtn.addEventListener("click", function(){
            count--;
            if(count < 0){
                count = reviews.length - 1;
                
            }
            showreviews(count)
        })



        randombtn.addEventListener("click", function(){
          count = Math.floor(Math.random()*reviews.length)
          console.log(count)

          showreviews()
        })







