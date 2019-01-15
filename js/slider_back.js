var link_slider1 = document.querySelector(".slider-1");
var link_slider2 = document.querySelector(".slider-2");
var link_slider3 = document.querySelector(".slider-3");
var back_body = document.querySelector("body");


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
