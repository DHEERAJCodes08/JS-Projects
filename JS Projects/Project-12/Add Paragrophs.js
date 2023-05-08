const form = document.querySelector(".lorem-form");
const amount =document .querySelector("#amount");
const result = document.querySelector(".lorem-text")


const text = [
    "Technology has transformed our lives in countless ways, from how we communicate to how we work and even how we entertain ourselves. One of the most significant changes that technology has brought about is the rise of social media. Platforms like Facebook, Instagram, and Twitter have connected people around the world like never before, allowing us to share our thoughts, experiences, and photos with friends and family regardless of distance. However, social media has also brought about challenges such as cyberbullying, privacy concerns, and addiction. It's important to recognize both the positive and negative impacts of social media and use it responsibly.",

    "Education is the foundation for success, and it's essential for personal and societal growth. From traditional classroom settings to online learning platforms, there are many ways to pursue education today. However, despite the many benefits of education, it's not accessible to everyone. Financial constraints, lack of access to quality education, and discrimination are some of the barriers that prevent people from achieving their educational goals. Governments and societies need to work together to address these challenges and ensure that education is available to all",
    
    
    "Health and wellness are vital components of a happy and fulfilling life. Regular exercise, a balanced diet, and good sleep hygiene are just a few of the habits that can promote physical and mental well-being. Unfortunately, in today's fast-paced world, many people neglect their health due to work, social obligations, or other priorities. It's essential to make time for self-care and prioritize our health, both for ourselves and for the people we care about.",

    "Art has been a cornerstone of human expression for thousands of years. From cave paintings to modern-day sculptures and paintings, art allows us to express ourselves in ways that words cannot. Whether we create art ourselves or appreciate the work of others, it can be a source of inspiration, comfort, and beauty. Additionally, art can also serve as a powerful tool for social and political commentary, shining a light on important issues and inspiring change",
    

    "zTraveling is a great way to expand our horizons, learn about new cultures, and create unforgettable memories. Whether we travel for leisure or work, it can be a transformative experience that broadens our perspectives and teaches us new things about the world and ourselves. However, travel also comes with challenges such as language barriers, cultural differences, and safety concerns. It's essential to plan ahead, be aware of our surroundings, and respect local customs when traveling to new places.",
]

form.addEventListener("submit", function(e){
    e.preventDefault();     //it prevents the Default  working of the submit event
    console.log("hello") 

    const value = (amount.value)
    console.log(value)
    const Showid = Number(value);
    console.log(typeof Showid)

     const Alertmsg =result.innerHTML = `<h3> ${"My name   is Dheeraj Prasad"}</h3>`




    if(value < 0 || value == 0  || value > 5){

       const Alertmsg = result.innerHTML=`<h3 class ="result" >${"Please Enter the Value Greater than Zero"}</h3>`
    }


    
/*     if (value > 0){

        result.remove();       //To remove the Previous Message from the result class, we need to use this 

    }
     */

  


/*     else if(value > 0 && value < 5){

        console.log(text[Showid])                                        //This is Just for Showing the Paragraph present in that Perticular value 
        result.innerHTML = `<p class=result">${text[Showid]}</p>` ;
        

    }   */
/*     if we want to display the no of Paregraph  according to the number entered we use the Slice function */


 else if(value > 0 && value < 5){
 let  TextShow = text.slice(0, value);

//since we have to wrap those in the  p tag so we use 

TextShow =TextShow.map(function(item){
    return `<p>${item}</p>`;

})
.join(" ");

result.innerHTML=TextShow;


}

    

})
