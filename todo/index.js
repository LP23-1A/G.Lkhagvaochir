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
let data = [
  // {
  //   title: "asd",
  //   desc: "asd",
  //   priority: "asd",
  //   status: "To do",
  // },
];

function render(data) {
  const cards = document.getElementsByClassName("cards");
  cards[0].innerHTML = "";
  cards[1].innerHTML = "";
  cards[2].innerHTML = "";
  cards[3].innerHTML = "";
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    if (data[i].status === "To do") {
      cards[0].innerHTML += addTask(data[i]);
    } else if (data[i].status === "In progress") {
      cards[1].innerHTML += addTask(data[i]);
    } else if (data[i].status === "Stuck") {
      cards[2].innerHTML += addTask(data[i]);
    } else if (data[i].status === "Done") {
      cards[3].innerHTML += addTask(data[i]);
    }
  }
}
function addCard() {
  cards.innerHTML = "";
  modal.style.display = "none";
  const uid = Math.random();

  const mockData = {
    id: uid,
    title: "",
    desc: "",
    status: "",
    priority: "",
  };
  const input = document.querySelector("input");
  const textarea = document.querySelector("textarea");
  const select = document.querySelector("select");
  mockData.title = input.value;
  mockData.desc = textarea.value;
  mockData.status = select.value;
  mockData.priority = select.value;
  data.push(mockData);
  render(data);
}
function addTask(card) {
  const { title, desc, priority, id } = card;
  return `<div id="rem" id="${id}" class="card flex gap12">
              <img class="done crs" src="./icons/check-mark.png" alt="" />
              <div class="details flex1 gap12 flex column">
                <h4>${title}</h4>
                <p>${desc}</p>
                <div class="priority">${priority}</div>
              </div>
              <div class="actions flex column gap8 crs">
                <button onclick="removeF(${id})" class="crs boardnone"><img class="remove" src="./icons/x-mark.png" alt="" /></button>
                <button class="crs boardnone"><img class="edit" src="./icons/edit.png" alt="" /></button>
              </div>
            </div>`;
}
function removeF(id) {
  const a = data.filter((e) => e.id !== id);
  data = a;
  render(data);
}
closeModal();

let count = 0;
let output = document.getElementById("output");
function countClick() {
  count = count + "";
  output.innerHTML = count;
}
countClick();
// render(data);
