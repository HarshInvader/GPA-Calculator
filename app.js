//Select DOM
const fieldsInput = document.querySelector(".boxi");
const calcButton = document.querySelector(".calcButton");
const addButton = document.querySelector(".addButton");

addButton.addEventListener("click", addSubject);
calcButton.addEventListener("click", calculateGPA);

function addSubject(e) {
  e.preventDefault();
}

function calculateGPA(e) {
  e.preventDefault();
}
