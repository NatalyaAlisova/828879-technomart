//---------------------------------------
// Слайдер 
//---------------------------------------

(function () {
// находим кнопки перелистывания "Следующий / предыдущий слайд"
var btnPrev = document.querySelector('.slider-toggle-prev'),
    btnNext = document.querySelector('.slider-toggle-next');
    
var images = Array.from(document.querySelectorAll('.slide')); // коллекция изображений

var shownImage = document.querySelector('.shown'); // изображение, которое мы сразу показываем

var shownPoint = document.querySelector('.slider-control-active'); // активная точка

var pointsArray = document.querySelectorAll('.slider-control'); // нижние круглые кнопки


var counter = images.indexOf(shownImage);

btnPrev.addEventListener('click', function() {
  
    if (counter === 0) {
      images[counter].classList.remove('shown');
      pointsArray[counter].classList.remove('slider-control-active');
      counter = images.length - 1;
    } else {
      images[counter].classList.remove('shown');
      pointsArray[counter].classList.remove('slider-control-active');
      counter--; 
    }
  
    images[counter].classList.add('shown');
    pointsArray[counter].classList.add('slider-control-active');
});

btnNext.addEventListener('click', function() {
    
    if (counter === images.length - 1) {
        images[counter].classList.remove('shown');
        pointsArray[counter].classList.remove('slider-control-active');
        counter = 0;
    } else {
      images[counter].classList.remove('shown');
      pointsArray[counter].classList.remove('slider-control-active');
      counter++;
    }
  
    images[counter].classList.add('shown');
    pointsArray[counter].classList.add('slider-control-active');
});

let slideThroughPoints = function () {
  
  [].forEach.call(pointsArray, function(point, index) {
    point.addEventListener('click', function (evt) {
      if (index === counter) {
          evt.preventDefault();
          return;
      } else {
        
          pointsArray[counter].classList.remove('slider-control-active'); // удаляем активный класс с начальной точки
          images[counter].classList.remove('shown'); // скрываем изначальную картинку
          counter = index; // приравниваем счетчик к надетому индексу
          images[index].classList.add('shown'); // добавляем класс shown соответствующей картинке
          point.classList.add('slider-control-active'); // добавляем класс active точке, на которую кликнули
        
            btnNext.disabled = false;  // обе кнопки активны
            btnPrev.disabled = false;
      }
    });
  });
};

slideThroughPoints();

})();


//---------------------------------------
// Показываем окно с картой
//---------------------------------------

var mapContact = document.querySelector('.contact .mini-map'); //мини картинка с картой

var mapModal = document.querySelector('.modal-map'); //модальное окно с большой картой
var mapClose = mapModal.querySelector('.modal-close'); //закрыть карту (крестик)

// открываем карту 
mapContact.addEventListener('click', function (evt) {
   evt.preventDefault();
   mapModal.classList.add('modal-show');
  });


//  закрывем модалку
mapClose.addEventListener('click', function (evt) {
   evt.preventDefault();
   mapModal.classList.remove('modal-show');
  });

// закрываем модалки ESC
window.addEventListener('keydown', function (evt) {
   
    if (evt.keyCode === 27) {

      mapModal.classList.remove('modal-show');
      evt.preventDefault();
   }
  });

//---------------------------------------
// Показываем окно с обратной связью
//---------------------------------------

var buttonWrite = document.querySelector('.button-write'); //кнопка "Заблудились?"

var modalFeedback = document.querySelector('.modal-search'); //модальное окно с формой обратной связи
var modalClose = modalFeedback.querySelector('.modal-close'); //закрыть карту (крестик)

var form = modalFeedback.querySelector('form'); //форма обратной связи
var modalName = modalFeedback.querySelector('[name=user-name]'); // имя фамилия
var modalEmail = modalFeedback.querySelector('[name=user-email]'); 

var isStorageSupport = true;
var storage = '';
  
  try {
    storage = localStorage.getItem('modalName');
  } catch (err) {
    isStorageSupport = false;
  }

// открываем окно обратной связи
buttonWrite.addEventListener('click', function (evt) {
  	evt.preventDefault();
  	modalFeedback.classList.add('modal-show');

    if (storage) {
      modalName.value = storage;
      modalEmail.focus();
    } else {
      modalName.focus();
    }
  });

// закрываем модалку
modalClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalFeedback.classList.remove('modal-show');
    modalFeedback.classList.remove('modal-error');
  });

form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    if (!modalName.value || !modalEmail.value) {
      evt.preventDefault();
      modalFeedback.classList.remove('modal-error');
      modalFeedback.offsetWidth = modalFeedback.offsetWidth;
      modalFeedback.classList.add('modal-error');
    } else { 
      if (isStorageSupport) {
        localStorage.setItem('modalName', modalName.value); // сохраняет в storage имя и фамилию
      }
    } 
  });

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modalFeedback.classList.contains('modal-show')) {
        modalFeedback.classList.remove('modal-show');
        modalFeedback.classList.remove('modal-error');
      }
    }
  });