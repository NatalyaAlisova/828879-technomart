//---------------------------------------
// Показываем окно с картой
//---------------------------------------

var mapContact = document.querySelector('.contact img'); //мини картинка с картой

var mapModal = document.querySelector('.modal-map'); //модальное окно с большой картой
var mapClose = mapModal.querySelector('.modal-close'); //закрыть карту (крестик)

// открываем карту 
mapContact.addEventListener("click", function (evt) {
   evt.preventDefault();
   mapModal.classList.add("modal-show");
  });


//  закрывем модалку
mapClose.addEventListener("click", function (evt) {
   evt.preventDefault();
   mapModal.classList.remove("modal-show");
  });

// закрываем модалки ESC
window.addEventListener("keydown", function (evt) {
   
    if (evt.keyCode === 27) {

      mapModal.classList.remove("modal-show");
      evt.preventDefault();
   }
  });

//---------------------------------------
// Показываем окно с обратной связью
//---------------------------------------

var buttonWrite = document.querySelector('.button-write'); //кнопка "Заблудились?"

var modalFeedback = document.querySelector('.modal-search'); //модальное окно с формой обратной связи
var modalClose = modalFeedback.querySelector('.modal-close'); //закрыть карту (крестик)

var form = modalFeedback.querySelector("form"); //форма обратной связи
var modalName = modalFeedback.querySelector("[name=user-name]"); // имя фамилия
var modalEmail = modalFeedback.querySelector("[name=user-email]"); 

var isStorageSupport = true;
var storage = "";
  
  try {
    storage = localStorage.getItem("modalName");
  } catch (err) {
    isStorageSupport = false;
  }

// открываем окно обратной связи
buttonWrite.addEventListener("click", function (evt) {
  	evt.preventDefault();
  	modalFeedback.classList.add("modal-show");

    if (storage) {
      modalName.value = storage;
      modalEmail.focus();
    } else {
      modalName.focus();
    }
  });

// закрываем модалку
modalClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalFeedback.classList.remove("modal-show");
    modalFeedback.classList.remove("modal-error");
  });

form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    if (!modalName.value || !modalEmail.value) {
      evt.preventDefault();
      modalFeedback.classList.remove("modal-error");
      modalFeedback.offsetWidth = modalFeedback.offsetWidth;
      modalFeedback.classList.add("modal-error");
    } else { 
      if (isStorageSupport) {
        localStorage.setItem("modalName", modalName.value); // сохраняет в storage имя и фамилию
      }
    } 
  });

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modalFeedback.classList.contains("modal-show")) {
        modalFeedback.classList.remove("modal-show");
        modalFeedback.classList.remove("modal-error");
      }
    }
  });