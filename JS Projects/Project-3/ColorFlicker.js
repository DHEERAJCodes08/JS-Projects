



/*       //This is the JS for the Background Color Flicker from the given array <<<<<<<<<
      
      let colorarr = ["Green", "Red", "Blue", "Purple"] 


      const btn = document.getElementById("btnid")
      const colorname = document.getElementById("Spn")


      btn.addEventListener('click', Changecolor)

      function Changecolor(Currentelement){
        console.log(document.body)
        //Get Random Number from 0 to 3, color[2]
        //let randomNumber = 2
        const randomNumber = getRandomNumber()
        console.log(randomNumber)
        document.body.style.backgroundColor = colorarr[randomNumber]
        colorname.textContent = colorarr[randomNumber]

      }
      

      // we need an random no generater function which will generate random number for us
      
      function getRandomNumber(){        
        //return Math.random()*colorarr.length     //its an function which  will generate random number
        
        //itsreturning an random number which is  in decimal format to get it in integer format we use Math.floor Math.random()  

        return Math.floor (Math.random()*colorarr.length)

      } */







      //This is the JS Program that will perform the background Color Flicker on generating its one Color Code

      const colorarr =[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F" ]

      const btn = document.getElementById("btnid")

      const colorname = document.getElementById("Spn")

      btn.addEventListener("click",colorCodeGenerator)

      function colorCodeGenerator(Currentelement){
        console.log(document.body)
        
        let  hexavalue = "#"
        for(i=0; i<6; i++){
          hexavalue += colorarr[RandomColorCode()]
          console.log(hexavalue)
        }

        colorname.textContent = hexavalue
        document.body.style.backgroundColor = hexavalue


        //Random number generater function for color Code
        function RandomColorCode(){
          return Math.floor(Math.random()*colorarr.length)
          
        }
        
       /*  Keep notes : 
                 1> The Math.random() is an function that generates decimal values greater  than 0 and less than 1
                 2> To make this decimal value into integer we use Another Function ie the Math.floor
                 3> we are Multiplying the arrays length on line 180 bcz since the Math.random() produces value greater than 0
                    and more than 1 ,so we have walues up to the 3 in the first problem and 15 in the second problem  
                    so it creates index value less than that only   */ 



      }
