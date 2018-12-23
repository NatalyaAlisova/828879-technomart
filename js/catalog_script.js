
// объявление переменных
var addToBasketBtns = document.querySelectorAll('.product-hidden .buy'); //коллекция кнопок "Купить" в карточке товара
 	
var popupAddToBasket = document.querySelector('.modal-added-cart'); //модальное окно с окном "товар добавлен в корзину"
var modalCloseBtn = document.querySelector('.modal-close'); // закрытие окна (крестик)
var continueShoppingBtn = document.querySelector('.continue-shopping'); // кнопка "Продолжить покупки"


// вешаем обработчик на все кнопки купить
for (var i = 0; i < addToBasketBtns.length; i++) {
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



