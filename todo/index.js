let one = document.getElementById("one");
let addTask = document.getElementById("two");

one.onclick = function () {
  addTask.style.display = "block";
  addTask.style.display = "flex";
  addTask.style.justifyContent = "spacebetween";
};
window.onclick = function (event) {
  if (event.target === addTask) {
    addTask.style.display = "none";
  }
};
