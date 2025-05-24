const body = document.querySelector("body");
const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const color = e.target.id;
    body.style.backgroundColor = color;
  });
});
