let section = document.getElementById("mainSection");

let container = section.children[0].children[0];

let createdDiv = document.createElement("div");
createdDiv.setAttribute("id",'product');

createdDiv.classList.add("p-2")

let createdInput =  document.createElement("input");

createdInput.setAttribute("placeholder","Test attribute");

createdDiv.appendChild(createdInput)

container.appendChild(createdDiv);


createdDiv.innerHTML =`   <div class="mb-3"><label for="exampleFormControlTextarea1" 
    class="form-label">Example textarea</label><textarea class="form-control"
 id="exampleFormControlTextarea1" rows="3"></textarea></div>`


