let input = document.querySelector(".input-display");
let output = document.querySelector(".output");
let buttons = document.querySelectorAll("button");
let store = "";
let outputStore = "";
buttons.forEach(function (elements) {
  elements.addEventListener("click", function (e) {
    if (e.target.innerHTML == "=") {
      store = eval(store);
      output.innerHTML = store;
      if (e) {
        store = "";
        outputStore = "";
      }
    } else if (e.target.innerHTML == "AC") {
      store = "";
      input.innerHTML = store;
      output.innerHTML = store;
    } else if (e.target.innerHTML == "DEL") {
      store = store.substring(0, store.length - 1);
      input.innerHTML = store;
    } else {
      store += e.target.innerHTML;
      input.innerHTML = store;
      output.innerHTML = outputStore;
    }
  });
});
