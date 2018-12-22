//---------------------------------------
// Показываем карту
//---------------------------------------


var mapContact = document.querySelector('.contact img');

var mapModal = document.querySelector('.modal-map');
var mapClose = mapModal.querySelector('.modal-close');

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
   evt.preventDefault();
   if (evt.keyCode === 27) {
     if (mapModal.classList.contains("modal-show")) {
       mapModal.classList.remove("modal-show");
      }
   }
  });

//---------------------------------------
// Показываем окно с обратной связью
//---------------------------------------

var buttonWrite = document.querySelector('.button-write');

var modalSearch = document.querySelector('.modal-search');
var modalClose = modalSearch.querySelector('.modal-close');

var form = modalSearch.querySelector("form");
var modalName = modalSearch.querySelector("[name=name]");

// открываем окно обратной связи
buttonWrite.addEventListener("click", function (evt) {
	evt.preventDefault();
	modalSearch.classList.add("modal-show");
    name.focus();
  });

// закрываем модалку
modalClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });