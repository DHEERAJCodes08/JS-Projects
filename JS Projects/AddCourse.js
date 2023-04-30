

        let btn = document.getElementById("AddBtn")

        btn.addEventListener("click", AddChapter)             //Assing Event to the button
        let Parentul = document.getElementById("newul")      //Fetching the parent UL element 
       
        function AddChapter(e) {

            console.log(e)                                   //conffirm weather the Event is running or not
            if(Parentul.children[0].className == "EmptyMessage") {
                Parentul.children[0].remove()
            }
            let trapdata = btn.previousElementSibling        //since the input field is present in the side  of the button  where this twotags are present ie they acts as Sibbiling
            currentChapterValue = trapdata.value
            console.log(trapdata.value)                      // Conforming that  the value is Stored inside the trapdata or not

            

            let newli = document.createElement("li")             //Creating  new li value

            //newli.classList.add("list-group-item")               // using the classlist property so that the Styling can be applied to other nodes

             newli.className = "list-group-item d-flex justify-content-between"

             newli.innerHTML = ` <h3 class="flex-grow-1" >${currentChapterValue}</h3>
                    <button type="button" class="btn btn-warning mx-2"onclick="EditChapter(this) ">Edit</button>
                    <button type="button" class="btn btn-danger"onclick="RemoveChapter(this)" >Remove</button>`
                            //Assining the values of the trapdata element to the newli
            

            Parentul.appendChild(newli)                          //Adding Li to the DOM

        }


        function RemoveChapter(CurrentElement) {
            CurrentElement.parentElement.remove()
            let Parentul = document.getElementById("newul")
            if(Parentul.children.length <= 0){
                let newEmptymsg =document.createElement('h3')
                newEmptymsg.classList.add("EmptyMessage")       //Class list is used to add the class to it 
                newEmptymsg.textContent = "Nothing is here, Please add Something 💙✨"
                Parentul.appendChild(newEmptymsg)
            }


        }


        function EditChapter(currentElement){
            if(currentElement.textContent == "Done"){
                currentElement.textContent = "Edit"
                let currHeading = document.createElement('h3')
                currHeading.className = "flex-grow-1"
                currHeading.textContent = currChapter
                currentElement.parentElement.replaceChild(currHeading, currentElement.previousElementSibling)

            }


        

        else{
            currentElement.textContent = "Done"
           let currChapter = currentElement.previousElementSibling.textContent
           //console.log(currChapter)
           let currentinput = document.createElement('input')
           currentinput.type  = "text"
           currentinput.className = "form-control"
           currentinput.placeholder = "Chapter Name" 
           currentinput.value = currChapter
           //console.log(currentinput.value)
           currentElement.parentElement.replaceChild(currentinput, currentElement.previousElementSibling)

            
        }

        }



