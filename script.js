       const inputBox = document.getElementById("input-box");
       const listcontainer = document.getElementById("list-container");
        function addTask(){
            if(inputBox.value === ''){
              alert("you must Add atleast one task!");
            }
            else{
                let li = document.createElement("li");
                li.innerHTML = inputBox.value;
                listcontainer.appendChild(li);
                let span = document.createElement("span");
                span.innerHTML = "\u00d7";
                li.appendChild(span);
            }
            inputBox.value = "";
            saveData();
        } 
        listcontainer.addEventListener("click", function(e){
            if(e.target.tagName === "li"){
               alert("Select task that you complete")
                saveData();
            }
             else if(e.target.tagName === "span"){
                e.target.parentelement.remove();
                saveData();
            }
        }, false);
        function saveData(){
            localStorage.setItem("data", listcontainer.innerHTML);
        }   
        function showtask(){
            listcontainer.innerHTML = localStorage.getItem("data");
        }   
        showtask();