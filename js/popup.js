var link_feedback = document.querySelector(".feedback-form .open-modal");
var popup = document.querySelector(".modal-feedback");
var close = document.querySelector(".modal-feedback .modal-close");
var link_slider1 = document.querySelector(".slider-1");
var link_slider2 = document.querySelector(".slider-2");
var link_slider3 = document.querySelector(".slider-3");
var back_body = document.querySelector("body");
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
link_slider1.addEventListener("click", function (evt) {
  back_body.classList.remove("back-slider-2");
  back_body.classList.remove("back-slider-3");
  back_body.classList.add("back-slider-1");
});
link_slider2.addEventListener("click", function (evt) {
  back_body.classList.remove("back-slider-1");
  back_body.classList.remove("back-slider-3");
  back_body.classList.add("back-slider-2");
});
link_slider3.addEventListener("click", function (evt) {
  back_body.classList.remove("back-slider-2");
  back_body.classList.remove("back-slider-1");
  back_body.classList.add("back-slider-3");
});
