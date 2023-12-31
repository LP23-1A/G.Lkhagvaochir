let modal = document.getElementById("two");
let one = document.getElementsByClassName("addBtns");
let overlay = document.querySelector(".overlay");
let addBtn = document.querySelector(".addBtn");
let cards = document.querySelector(".cards");
let Todo = document.querySelector(".Todo");
let Inprogress = document.querySelector(".Inprogress");
let Stuck = document.querySelector(".Stuck");
let Done = document.querySelector(".Done");
let checkbtn = document.querySelectorAll(".check");
let draggedItem = null;

let count = {
  todo: 0,
  inprogress: 0,
  stuck: 0,
  done: 0,
};

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
let data = [];

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
  dragAndDrop();
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
        console.log(select[0].value);
        return mockData;
      }
      return el;
    });
  } else {
    data.push(mockData);
    duudah();
  }
  render(data);
}
function addTask(card) {
  const { title, desc, priority, id } = card;
  return `<div draggable="true" id="${id}" class="card flex gap12">
              <img onclick="moveDone(${id})" class="done check crs" src="./icons/check-mark.png" alt="" />
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

function moveDone(id) {
  let moveId = "id" + id;
  const moveList = data.map((item) => {
    if (item.id === moveId) {
      if (item.status === "To do") {
        count.todo -= 1;
      } else if (item.status === "In progress") {
        count.inprogress -= 1;
      } else if (item.status === "Stuck") {
        count.stuck -= 1;
      } else if (item.status === "Done") {
        count.done -= 1;
      }
      item.status = "Done";
      if (item.status === "Done") {
        count.done += 1;
      }
      Todo.innerHTML = count.todo;
      Inprogress.innerHTML = count.inprogress;
      Stuck.innerHTML = count.stuck;
      Done.innerHTML = count.done;
    }

    return item;
  });

  render(moveList);
}
function dragAndDrop() {
  const card = document.querySelectorAll(".card");
  const boards = document.querySelectorAll(".board");
  card.forEach((card) => {
    card.addEventListener("dragstart", (event) => {
      event.target.value;
      draggedItem = event.target;
      event.dataTransfer.setData("text", event.target.getAttribute("id"));
    });
    card.addEventListener("dragend", () => {
      draggedItem = null;
    });
  });
  boards.forEach((board, index) => {
    board.addEventListener("dragover", (event) => {
      event.preventDefault();
    });
    board.addEventListener("dragenter", (event) => {
      event.preventDefault();
      if (draggedItem) {
        const draggingBoard = draggedItem.parentNode;
        if (draggingBoard !== event.currentTarget) {
          event.currentTarget.querySelector(".cards").appendChild(draggedItem);
          let id = draggedItem.getAttribute("id");
          console.log(data);
          console.log(draggedItem.getAttribute("id"));

          data.map((el) => {
            if (el.id === id) {
              if (index === 0) {
                el.status = "To do";
              } else if (index === 1) {
                el.status = "In progress";
              } else if (index === 2) {
                el.status = "Stuck";
              } else if (index === 3) {
                el.status = "Done";
              }
            }
            duudah();
            console.log(index);
          });
        }
      }
    });
    board.addEventListener("dragleave", () => {});
    board.addEventListener("drop", (event) => {
      event.preventDefault();
      const draggedAElementId = board.querySelector(".card").id;

      data.map((el) => {
        if (el.id === draggedAElementId) {
          el.status = board.id;
        }
      });
    });
  });
}
function duudah() {
  let count = {
    todo: 0,
    inprogress: 0,
    stuck: 0,
    done: 0,
  };
  data.map((e) => {
    if (e.status === "To do") {
      count.todo += 1;
    } else if (e.status === "In progress") {
      count.inprogress += 1;
    } else if (e.status === "Stuck") {
      count.stuck += 1;
    } else if (e.status === "Done") {
      count.done += 1;
    }
  });

  Todo.innerHTML = count.todo;
  Inprogress.innerHTML = count.inprogress;
  Stuck.innerHTML = count.stuck;
  Done.innerHTML = count.done;
}
duudah();
render(data);
