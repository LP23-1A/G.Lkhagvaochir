let modal = document.getElementById("two");
let one = document.getElementsByClassName("addBtns");
let overlay = document.querySelector(".overlay");
let addBtn = document.querySelector(".addBtn");
let cards = document.querySelector(".cards");

// let titleInput = document.querySelector("#title");
// let textarea = document.querySelector("#textarea");

for (let i = 0; i < one.length; i++) {
  one[i].onclick = function () {
    modal.style.display = "flex";
    addBtn.onclick = () => addCard(false);
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

const input = document.querySelector("input");
const textarea = document.querySelector("textarea");
const select = document.querySelectorAll("select");

function addCard(isEdit, id) {
  cards.innerHTML = "";
  modal.style.display = "none";
  const uid = "id-" + Math.random();

  const mockData = {
    id: uid,
    title: "",
    desc: "",
    status: "",
    priority: "",
  };

  mockData.title = input.value;
  mockData.desc = textarea.value;
  mockData.status = select[0].value;
  mockData.priority = select[1].value;

  input.value = "";
  textarea.value = "";

  if (isEdit) {
    console.log("test");
    data = data.map((el) => {
      if (el.id === id) {
        mockData.id = id;
        return mockData;
      }
      return el;
    });
  } else {
    data.push(mockData);
    if (mockData.status === "To do") {
      count.todo += 1;
    } else if (mockData.status === "In progress") {
      count.inprogress += 1;
    } else if (mockData.status === "Stuck") {
      count.stuck += 1;
    } else if (mockData.status === "Done") {
      count.done += 1;
    }
    Todo.innerHTML = count.todo;
    Inprogress.innerHTML = count.inprogress;
    Stuck.innerHTML = count.stuck;
    Done.innerHTML = count.done;
  }
  render(data);
}
function addTask(card) {
  const { title, desc, priority, id } = card;
  return `<div id="${id}" class="card flex gap12">
              <img class="done crs" src="./icons/check-mark.png" alt="" />
              <div class="details flex1 gap12 flex column">
                <h4>${title}</h4>
                <p>${desc}</p>
                <div class="priority">${priority}</div>
              </div>
              <div class="actions flex column gap8 crs">
                <button onclick="removeF(${id})" class="crs boardnone"><img class="remove" src="./icons/x-mark.png" alt="" /></button>
                <button onclick="editF('${id}')" class="crs boardnone"><img class="edit" src="./icons/edit.png" alt="" /></button>
              </div>
            </div>`;
}
function removeF(id) {
  let elementId = "id" + id;
  let element = null;
  const a = data.filter((e) => {
    if (e.id === elementId) {
      element = e;
    } else {
      return true;
    }
    return false;
  });
  data = a;

  if (element.status === "To do") {
    count.todo -= 1;
  } else if (element.status === "In progress") {
    count.inprogress -= 1;
  } else if (element.status === "Stuck") {
    count.stuck -= 1;
  } else if (element.status === "Done") {
    count.done -= 1;
  }
  Todo.innerHTML = count.todo;
  Inprogress.innerHTML = count.inprogress;
  Stuck.innerHTML = count.stuck;
  Done.innerHTML = count.done;

  render(data);
}
function isModalOpen() {
  if (modal.style.display == "block") modal.style.display = "none";
  else modal.style.display = "block";
  modal.style.display = "flex";
}
function editF(id) {
  console.log("text");
  const findEl = data.find((el) => el.id == id);
  input.value = findEl.title;
  textarea.value = findEl.desc;
  addBtn.onclick = () => addCard(true, id);

  isModalOpen();
}
closeModal();

// render(data);
let count = {
  todo: 0,
  inprogress: 0,
  stuck: 0,
  done: 0,
};
let Todo = document.querySelector(".Todo");
let Inprogress = document.querySelector(".Inprogress");
let Stuck = document.querySelector(".Stuck");
let Done = document.querySelector(".Done");
