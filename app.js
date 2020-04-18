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

function deleteEntry(e) {
  const item = e.target;
  if (item.classList[0] === "del") {
    const deleteEntry = item.parentElement;

    delFromLocalStorage(deleteEntry);
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

function delFromLocalStorage(del) {
  let entries;
  if (localStorage.getItem("entries") === null) {
    entries = [];
  } else {
    entries = JSON.parse(localStorage.getItem("entries"));
  }

  const delIndex = del.children[0].innerText;
  entries.splice(entries.indexOf(delIndex, 1));
  localStorage.setItem("entries", JSON.stringify(entries));
}

function calculateGPA(e) {
  e.preventDefault();
  let entries;
  if (localStorage.getItem("entries") === null) {
    entries = [];
    console.log("Error!No entries to calculate with");
  } else {
    entries = JSON.parse(localStorage.getItem("entries"));
  }
  // console.log(entries);
  let percent, credit, GPA, point, grade;
  let totGPA = 0,
    totCredits = 0;

  entries.forEach(function (entry) {
    // console.log(entry);
    credit = parseInt(entry[1]);
    percent = parseInt(entry[2]);
    totCredits += credit;
    if (percent >= 85) {
      point = 4;
      grade = "A+";
    } else if (percent >= 81) {
      point = 3.75;
      grade = "A";
    } else if (percent >= 77) {
      point = 3.5;
      grade = "A-";
    } else if (percent >= 73) {
      point = 3.25;
      grade = "B+";
    } else if (percent >= 69) {
      point = 3;
      grade = "B";
    } else if (percent >= 65) {
      point = 2.75;
      grade = "B-";
    } else if (percent >= 61) {
      point = 2.5;
      grade = "C+";
    } else if (percent >= 57) {
      point = 2.25;
      grade = "C";
    } else if (percent >= 50) {
      point = 2;
      grade = "C-";
    } else if (percent >= 40) {
      point = 1.5;
      grade = "D";
    } else if (percent < 40) {
      point = 2;
      grade = "F";
    }
    GPA = credit * point;
    totGPA += GPA;
    console.log(GPA);
  });

  console.log(totCredits);
  console.log(totGPA);

  let finalGPA = totGPA / totCredits;
  console.log(finalGPA);
}
