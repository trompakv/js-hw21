import { helloWorld, randomNumber } from "./functions";

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const maxLabel = document.getElementById("max-label");
const maxNum = document.getElementById("max-num");

btn1.addEventListener("click", helloWorld);

maxNum.addEventListener("input", (e) => {
  maxLabel.textContent = e.target.value;
});

btn2.addEventListener("click", () => {
  randomNumber(maxNum.value);
});
