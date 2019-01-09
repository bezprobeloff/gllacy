var link_feedback = document.querySelector(".feedback-form .open-modal");
var popup = document.querySelector(".modal-feedback");
var close = document.querySelector(".modal-feedback .modal-close");
link_feedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  console.log("Клик по ссылке вход");
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
