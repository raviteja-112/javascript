const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseFloat(document.querySelector("#height").value) / 100;
  const weight = parseFloat(document.querySelector("#weight").value);
  //   console.log(height);
  //   console.log(weight);

  const BMI = weight / (height * height);
  //   console.log(BMI);

  let text;
  if (BMI < 18.6) {
    text = "Under Weight";
  } else if (BMI < 24.9) {
    text = "Normal Range";
  } else {
    text = "Overweight";
  }

  const result = document.querySelector("#results");
  result.innerHTML = `<span>Your BMI is ${BMI.toFixed(
    2
  )} and your are ${text}</span>`;
});
