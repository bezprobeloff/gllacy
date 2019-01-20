var link_feedback = document.querySelector(".feedback .open-modal");
var popup = document.querySelector(".modal-feedback");
var close = document.querySelector(".modal-feedback .modal-close");

link_feedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    }
  }
});
