//---------------------------------------
// Слайдер 
//---------------------------------------

(function () {
// кнопки перелистывания следующий/предыдущий слайд
var btnPrev = document.querySelector('.slider-toggle-prev'),
    btnNext = document.querySelector('.slider-toggle-next');

var images = document.querySelectorAll('.slide'); // коллекция изображений

var pointsArray = document.querySelectorAll('.slider-control'); // круглые кнопки внизу

var counter = 0;   // обьявляем и инициализируем собственную переменную-счетчик
btnPrev.disabled = true;   // отключаем предыдущую кнопку

btnPrev.addEventListener('click', function() {  
    images[counter].classList.remove('shown');
    pointsArray[counter].classList.remove('slider-control-active');
    counter--;
    images[counter].classList.add('shown');
    pointsArray[counter].classList.add('slider-control-active');
    btnNext.disabled = false;

    // disable btnPrev if we are on the first slide
    if (counter === 0) {
      btnPrev.disabled = true;
    }
});

btnNext.addEventListener('click', function() {
    images[counter].classList.remove('shown');
    pointsArray[counter].classList.remove('slider-control-active');
    counter++;
    images[counter].classList.add('shown');
    pointsArray[counter].classList.add('slider-control-active');
    console.log(btnPrev.disabled);
    btnPrev.disabled = false;
  
    // disable btnNext if we are on the last slide
    if (counter === images.length - 1) {
      btnNext.disabled = true;
    }
});

let slideThroughPoints = function () {
  // I used this trick only for IE compatibility
  [].forEach.call(pointsArray, function(point, index) {
    point.addEventListener('click', function (evt) {
      if (index === counter) {
          evt.preventDefault();
          return;
      } else {
          // проверочки 
          console.log(counter);
          console.log(pointsArray[index]);
          console.log(index);
          console.log(images[index]);
        
          pointsArray[counter].classList.remove('slider-control-active'); // удаляем активный класс с начальной точки
          images[counter].classList.remove('shown'); // скрываем изначальную картинку
          counter = index; // приравниваем счетчик к индексу
          images[index].classList.add('shown'); // добавляем класс shown соответствующей картинке
          point.classList.add('slider-control-active'); // добавляем класс active точке, на которую кликнули
        
          if (counter === images.length - 1) {
            btnNext.disabled = true; // кнопка disabled
            btnPrev.disabled = false; // кнопка активна
          } else if (counter === 0) {
            btnNext.disabled = false; // кнопка активна
            btnPrev.disabled = true; // отключаем предыдущую кнопку
          } else {
            btnNext.disabled = false;  // обе кнопки активны
            btnPrev.disabled = false;
          }
      }
    });
  });
};

slideThroughPoints();

})();





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