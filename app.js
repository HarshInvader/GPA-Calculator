//Select DOM
const newSub = document.querySelector(".subject");
const newCredit = document.querySelector(".credit");
const newPercent = document.querySelector(".percentage");
const calcButton = document.querySelector(".calcButton");
const addButton = document.querySelector(".addButton");
const list = document.querySelector(".list");
const delButton = document.querySelector(".del");

addButton.addEventListener("click", addSubject);
calcButton.addEventListener("click", calculateGPA);
delButton.addEventListener("click", deleteEntry);
function addSubject(e) {
  e.preventDefault();
  const entry = document.createElement("div");
  entry.classList.add("entry");

  const subject = document.createElement("li");
  subject.innerText = newSub.value;
  entry.appendChild(subject);

  const credit = document.createElement("li");
  credit.innerText = newCredit.value;
  entry.appendChild(credit);

  const percent = document.createElement("li");
  percent.innerText = newPercent.value;
  entry.appendChild(percent);

  const del = document.createElement("button");
  del.innerHTML = '<i class="fas fa-trash"></i>';
  del.classList.add("button", "del");
  entry.appendChild(del);

  list.appendChild(entry);
}

function calculateGPA(e) {
  e.preventDefault();
}

function deleteEntry(e) {
  console.log(e);
}

function saveToLocalStorage() {}
