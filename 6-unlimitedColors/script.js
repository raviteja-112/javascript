const body = document.querySelector("body");

const randomColors = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * 16 + 1);
    color = color + hex[random];
  }

  return color;
};

let start;
document.getElementById("start").addEventListener("click", () => {
  start = setInterval(() => {
    let color = randomColors();
    body.style.backgroundColor = color;
  }, 1000);
});

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(start);
});
