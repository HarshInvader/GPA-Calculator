//Select DOM
const newSub = document.querySelector(".subject");
const newCredit = document.querySelector(".credit");
const newPercent = document.querySelector(".percentage");
const calcButton = document.querySelector(".calcButton");
const addButton = document.querySelector(".addButton");
const list = document.querySelector(".list");

document.addEventListener("DOMContentLoaded", getEntries);
addButton.addEventListener("click", addSubject);
calcButton.addEventListener("click", calculateGPA);
list.addEventListener("click", deleteEntry);

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

  saveToLocalStorage([newSub.value, newCredit.value, newPercent.value]);

  const del = document.createElement("button");
  del.innerHTML = '<i class="fas fa-trash"></i>';
  del.classList.add("del", "button");
  entry.appendChild(del);

  list.appendChild(entry);
  newSub.value = "";
  newCredit.value = "";
  newPercent.value = "";
}

function calculateGPA(e) {
  e.preventDefault();
}

function deleteEntry(e) {
  const item = e.target;
  if (item.classList[0] === "del") {
    const deleteEntry = item.parentElement;
    // remove below line when/if adding delete animation
    deleteEntry.remove();

    //uncomment below lines once animation css class is defined

    // deleteEntry.classList.add("remove");
    // deleteEntry.addEventListener("transitionend", function () {
    //   deleteEntry.remove();
    // });
  }
}

function saveToLocalStorage(entry) {
  let entries;
  if (localStorage.getItem("entries") === null) {
    entries = [];
  } else {
    entries = JSON.parse(localStorage.getItem("entries"));
  }
  entries.push(entry);
  localStorage.setItem("entries", JSON.stringify(entries));
}

function getEntries() {
  let entries;
  if (localStorage.getItem("entries") === null) {
    entries = [];
  } else {
    entries = JSON.parse(localStorage.getItem("entries"));
    console.log(entries);
  }
  entries.forEach(function (e) {
    const entry = document.createElement("div");
    entry.classList.add("entry");

    const subject = document.createElement("li");
    subject.innerText = e[0];
    entry.appendChild(subject);

    const credit = document.createElement("li");
    credit.innerText = e[1];
    entry.appendChild(credit);

    const percent = document.createElement("li");
    percent.innerText = e[2];
    entry.appendChild(percent);

    const del = document.createElement("button");
    del.innerHTML = '<i class="fas fa-trash"></i>';
    del.classList.add("del", "button");
    entry.appendChild(del);

    list.appendChild(entry);
  });
}

function delFromLocalStorage(e) {}
