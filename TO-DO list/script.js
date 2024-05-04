const input = document.querySelector("#input-box");
const button = document.querySelector("button");
const ol = document.querySelector("#list-container");
const reset = document.querySelector(".reset");

button.addEventListener("click", function (e) {
  if (input.value === "") {
    alert("please enter task");
  } else {
    const div = document.createElement("div");
    div.className = "list";
    const li = document.createElement("li");
    li.className = "unchecked";
    li.innerHTML = input.value;
    const del = document.createElement("button");
    del.className = "del-button";
    del.innerHTML = "DELETE";
    
    ol.appendChild(div);
    div.appendChild(li);
    div.appendChild(del);
  
    input.value = "";
    li.addEventListener("click", function (e) {
      e.target.className = "checked";
    });
    del.addEventListener('click',function(e){
e.target.parentNode.remove()
    })
    reset.addEventListener("click", function (e) {
    ol.innerHTML=""
    });
  }
});
