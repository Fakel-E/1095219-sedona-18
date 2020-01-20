var link = document.querySelector(".form__btn");

var popup_fail = document.querySelector(".popup__fail");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_fail.classList.remove("popup__fail--close");
});



//var popup_ok = document.querySelector(".popup__succes");
