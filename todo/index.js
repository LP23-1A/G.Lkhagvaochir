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

let title = titleInput.addEventListener("change", (event) => {
  return event.target.value;
});

const cardElement = `<div class="card flex gap12">
              <img class="done crs" src="./icons/check-mark.png" alt="" />
              <div class="details flex1 gap12 flex column">
                <h4>Todo</h4>
                <p>this is a todo card</p>
                <div class="Priority">high</div>
              </div>
              <div class="actions flex column gap8 crs">
                <img class="done" src="./icons/x-mark.png" alt="" />
                <img class="done" src="./icons/edit.png" alt="" />
              </div>
            </div>`;

function addTask() {
  let done = document.querySelector("#done");
  done.innerHTML += cardElement;

  closeModal();
}
