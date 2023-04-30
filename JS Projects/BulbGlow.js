

        let btn = document.getElementById('Clickme')
        let bulb = document.getElementById('bulb')
        btn.addEventListener("click", Dheeraj)

        function Dheeraj(e) {
            
            if(btn.textContent.includes("On")){
                bulb.src="images/glow.jpg"
                btn.textContent= "Turn Off"
                
            }
            else{
                bulb.src="images/off.jpg"
                btn.textContent= "Turn On"

            }
            
        }


    