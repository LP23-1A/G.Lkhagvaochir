let modal = document.getElementById("two");
let one = document.getElementsByClassName("addBtns");
let overlay = document.querySelector(".overlay");
let addBtn = document.querySelector(".addBtn");
let cards = document.querySelector(".cards");

let titleInput = document.querySelector("#title");
let textarea = document.querySelector("#textarea");

for (let i = 0; i < one.length; i++) {
  one[i].onclick = function () {
    modal.style.display = "flex";
  };
}

function closeModal() {
  modal.style.display = "none";
}

addBtn.onclick = addTask;

overlay.onclick = closeModal;

const data = [
  {
    title: "todo",
    desc: "this a todo card",
    status: "done",
    priority: "high",
  },
];

function addTask(cards) {
  let done = document.querySelectorAll(".cards");
  const { title, desc, priority } = cards;
  return `<div class="card flex gap12">
              <img class="done crs" src="./icons/check-mark.png" alt="" />
              <div class="details flex1 gap12 flex column">
                <h4>${title}</h4>
                <p>${desc}</p>
                <div class="priority">${priority}}</div>
              </div>
              <div class="actions flex column gap8 crs">
                <img class="remove" src="./icons/x-mark.png" alt="" />
                <img class="edit" src="./icons/edit.png" alt="" />
              </div>
            </div>`;

  closeModal();
}
