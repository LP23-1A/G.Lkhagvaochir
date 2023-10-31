// let one = document.getElementById("one");
let modal = document.getElementById("two");
let one = document.getElementsByClassName("addBtns");
let overlay = document.querySelector(".overlay");
// let modal = document.querySelector(".modal");

for (let i = 0; i < one.length; i++) {
  one[i].onclick = function () {
    modal.style.display = "flex";
  };
}

function closeModal(event) {
  event.stopPropagation();
  modal.style.display = "none";
}

overlay.onclick = closeModal;

// window.onclick = function (event) {
//   if (event.target === modal) {
//     modal.style.display = "none";
//   }
// };
