console.log('файл скриптов подключен');

//---------------------------------------
// Этот блок относится к каталогу
//---------------------------------------
// объявление переменных
var addToBasketBtns = document.querySelectorAll('.product-hidden .buy');
 	console.log(addToBasketBtns);
var popupAddToBasket = document.querySelector('.modal-added-cart');
var modalCloseBtn = document.querySelector('.modal-close');
var continueShoppingBtn = document.querySelector('.continue-shopping');


// вешаем обработчик на все кнопки купить
for (var i = 0; i < addToBasketBtns.length; i++) {
   		console.log(i);
		addToBasketBtns[i].addEventListener ("click", function (evt) {
			    evt.preventDefault();
				console.log('нажали на кнопку');
				popupAddToBasket.classList.add('modal-show');
		}); 
	}

//  закрывем модалку
if (modalCloseBtn) {
	modalCloseBtn.addEventListener ("click", function (evt) {
	    evt.preventDefault();
		console.log('нажали закрыть');
		if (popupAddToBasket) { 
			popupAddToBasket.classList.remove('modal-show');
		}
	});
}
// закрываем модалку по кнопке "Продолжить покупки"


if (continueShoppingBtn) {
	continueShoppingBtn.addEventListener ("click", function (evt) {
	    evt.preventDefault();
		console.log('нажали на кнопку "Продолжить покупки');
		popupAddToBasket.classList.remove('modal-show');
	});
}

// закрываем модалки ESC
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupAddToBasket.classList.contains("modal-show")) {
        popupAddToBasket.classList.remove("modal-show");
       }
    }
  });


//---------------------------------------
// Показываем карту
//---------------------------------------


var mapContact = document.querySelector('.contact img');

var mapModal = document.querySelector('.modal-map');
var mapClose = mapModal.querySelector('.modal-close');

// открываем карту 
if (mapContact) {
mapContact.addEventListener("click", function (evt) {
   evt.preventDefault();
   console.log('нажали посмотреть карту');
   mapModal.classList.add("modal-show");
  });
}

//  закрывем модалку
if (mapClose) {
mapClose.addEventListener("click", function (evt) {
   evt.preventDefault();
   console.log('нажали закрыть карту');
   mapModal.classList.remove("modal-show");
  });
}

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

var modalName = modalSearch.querySelector("[name=name]");

// открываем окно обратной связи
buttonWrite.addEventListener("click", function (evt) {
	evt.preventDefault();
	modalSearch.classList.add("modal-show");
    name.focus();
  });

// закрываем модалку
close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });
