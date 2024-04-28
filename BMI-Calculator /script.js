const Form = document.querySelector("form");
const reset = document.querySelector("#reset");

Form.addEventListener("submit", function (e) {
  e.preventDefault();
  const Height = parseInt(document.querySelector("#height").value);

  const Weight = parseInt(document.querySelector("#weight").value);

  const Results = document.querySelector("#results");

  const Test = document.querySelector("#test");

  if (Height === "" || Height <= 0 || isNaN(Height)) {
    Results.innerHTML = "Please give a Valid Input in Height";
    Results.style.color = "red";
  }
  if (Weight === "" || Weight <= 0 || isNaN(Weight)) {
    Results.innerHTML = `Please give a Valid Input in Weight `;
    Results.style.color = "red";
  } else {
    const bmi = (Weight / ((Height * Height) / 10000)).toFixed(1);

    Results.style.color = "black";
    Results.innerHTML = `BMI:- ${bmi}`;
    const checkResult = `${bmi}`;
    console.log(checkResult);
    if (checkResult < 18.6) {
      Test.innerHTML = "UNDER WEIGHT";
      Test.style.color = "red";
    } else if (checkResult >= 18.6 && checkResult <= 24.9) {
      Test.innerHTML = "NORMAL RANGE";
      Test.style.color = "green";
    } else {
      Test.innerHTML = "OVER WEIGHT";
      Test.style.color = "red";
    }
  }
  reset.addEventListener("click", function () {
    Results.innerHTML = " ";
    test.innerHTML = " ";
  });
});
