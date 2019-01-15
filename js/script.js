var user_item_login = document.querySelector(".user-item:nth-child(2)");
var login_form = document.querySelector(".user-login");
var login = document.querySelector("[name=login]");
var password = document.querySelector("[name=password]");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

user_item_login.addEventListener("mouseover", function (evt) {
  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});
user_item_login.addEventListener("mouseout", function (evt) {
  login_form.classList.remove("modal-error");
});
login_form.addEventListener("submit", function (evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    login_form.classList.remove("modal-error");
    login_form.offsetWidth = login_form.offsetWidth;
    login_form.classList.add("modal-error");
    console.log("Нужно ввести логин и пароль");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});
