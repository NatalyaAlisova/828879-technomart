console.log('файл скриптов подключен');

// объявление переменных
var addToBasket = document.querySelectorAll('.product-hidden .buy');
 	console.log(addToBasket);
var popup = document.querySelector('.modal-added-cart');
var close = document.querySelector('.modal-close');

// вешаем обработчик на все кнопки купить
for (var i = 0; i < addToBasket.length; i++) 
  {
   		console.log(i);
		addToBasket[i].addEventListener ("click", function (evt) 
			{
			    evt.preventDefault();
				console.log('нажали на кнопку');
				popup.classList.add('modal-show');
			}
		); 

  }

//  закрывем модалку
close.addEventListener ("click", function (evt) 
	{
	    evt.preventDefault();
		console.log('нажали закрыть');
		popup.classList.remove('modal-show');
	}
);