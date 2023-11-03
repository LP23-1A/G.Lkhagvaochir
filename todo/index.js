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

// addBtn.onclick = addTask;
overlay.onclick = closeModal;
const data = [];

function render(data) {
  const cards = document.getElementsByClassName("cards");
  cards.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    cards[i].innerHTML += addTask(data[i]);
  }
}
function addCard() {
  modal.style.display = "none";
  console.log("is working");
  const mockData = {
    title: "",
    desc: "",
    status: "",
    priority: "",
  };
  mockData.title = "todo1";
  mockData.desc = "yuch bish";
  mockData.status = "done";
  mockData.priority = "low";
  data.push(mockData);
  render(data);
}
function addTask(card) {
  const { title, desc, priority } = card;
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
}
closeModal();
// render(data);
