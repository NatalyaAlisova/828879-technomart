console.log('файл скриптов подключен');


// объявление переменных
var addToBasketBtns = document.querySelectorAll('.product-hidden .buy');
 	console.log(addToBasketBtns);
var popupAddToBasket = document.querySelector('.modal-added-cart');
var modalCloseBtn = document.querySelector('.modal-close');
var continueShoppingBtn = document.querySelector('.continue-shopping');


// коллекция кнопок "Купить" в карточке товара
for (var i = 0; i < addToBasketBtns.length; i++) {
   		console.log(i);
		addToBasketBtns[i].addEventListener ("click", function (evt) {
			    evt.preventDefault();
				popupAddToBasket.classList.add('modal-show');
		}); 
	}

//  закрывем модалку
modalCloseBtn.addEventListener ("click", function (evt) {
	    evt.preventDefault();
		popupAddToBasket.classList.remove('modal-show');
	});

// закрываем модалку по кнопке "Продолжить покупки"
continueShoppingBtn.addEventListener ("click", function (evt) {
	    evt.preventDefault();
		popupAddToBasket.classList.remove('modal-show');
	});

// закрываем модалки ESC
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupAddToBasket.classList.contains("modal-show")) {
        popupAddToBasket.classList.remove("modal-show");
       }
    }
  });



