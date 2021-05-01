// const rgb = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
const ColorBackground = document.querySelector(".Color_container")
console.log(ColorBackground);

const rgbColor = `rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`;
function getRandomNumber() {
  return Math.floor(Math.random() * 256);
}
console.log(rgbColor);

color.textContent = rgbColor;
//one way
// ColorBackground.style.backgroundColor= rgbColor;

//2nd way
const test = document.getElementsByClassName("Color_container")[0].style.background = rgbColor;
// test.style.backgroundColor = rgbColor
});


