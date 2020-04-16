//Select DOM
const newSub = document.querySelector(".subject");
const newCredit = document.querySelector(".credit");
const newPercent = document.querySelector(".percentage");
const calcButton = document.querySelector(".calcButton");
const addButton = document.querySelector(".addButton");
const list = document.querySelector(".list");

addButton.addEventListener("click", addSubject);
calcButton.addEventListener("click", calculateGPA);

function addSubject(e) {
  e.preventDefault();
}

function calculateGPA(e) {
  e.preventDefault();
}
