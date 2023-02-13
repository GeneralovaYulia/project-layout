$(document).ready(function () {

  $("#menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 2500);
  });
});


/* burger */

let burger = document.querySelector(".burger");
let menu = document.querySelector('.header-top__menu');
let menuLinks = menu.querySelectorAll('.header-link');


burger.addEventListener('click', function () {

  burger.classList.toggle('burger--active');
  menu.classList.toggle('header-top__menu--visible');
  document.body.classList.toggle('stop-scroll');
});

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    menu.classList.remove('header-top__menu--visible');
    document.body.classList.remove('stop-scroll');
  });
});


/* modal */

const btns = document.querySelectorAll(".header-bottom__list-btn");
const dropdowns = document.querySelectorAll(".modal");
const activeClassdropdowns = "modal--visible";
const activeClassbtns = "header-bottom__list-btn--active";

btns.forEach(item => {
  item.addEventListener("click", function () {
    let DropThis = this.parentElement.querySelector(".modal");
    dropdowns.forEach(el => {
      if (el != DropThis) {
        el.classList.remove(activeClassdropdowns)
      }
    });
    btns.forEach(el => {
      if (el != this) {
        el.classList.remove(activeClassbtns)
      }
    });
    DropThis.classList.toggle(activeClassdropdowns);
    this.classList.toggle(activeClassbtns);
  })
})


/* loop */

let loop = document.querySelector(".loop");
let formHeader = document.querySelector(".header-top__form");
let closed = document.querySelector(".closed");

loop.addEventListener('click', function () {
  formHeader.classList.toggle('formHeader--active');
});

closed.addEventListener('click', function () {
  formHeader.classList.remove('formHeader--active');
});


/* hero */

const mySwiper = new Swiper('.heroSlider', {
  allowTouchMove: false,
  loop: true,
  effect: 'fade',

  autoplay: {
    delay: 8000,
  },

  pagination: {
    clickable: false,
  },
});


/* Селект в Gallery */

const element = document.querySelector('select');
const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
  placeholder: true
});


/* Слайдер в Gallery */

const gallerySlider = new Swiper('.gallery-swiper-container', {
  loop: false,

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1
    },

    577: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 38
    },

    769: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
    },

    1025: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    },
  },

  pagination: {
    el: '.gallery__swiper-pagination',
    type: 'fraction',
    clickable: true,
  },
  navigation: {
    nextEl: '.gallery__swiper-button-next',
    prevEl: '.gallery__swiper-button-prev',
  },
});


/* Аккордион */

document.addEventListener('DOMContentLoaded', function () {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(function (el) {
    el.addEventListener('click', function (e) {
      const control = e.currentTarget.querySelector('.accordion-btn');
      const content = e.currentTarget.querySelector('.accordion-content');

      e.currentTarget.classList.toggle('accordion--active');
    });
  });
});


/* Табы в Каталоге */

const tabsBtn = document.querySelectorAll('.tabs-nav__btn');
const tabsItem = document.querySelectorAll('.tabs-content');

tabsBtn.forEach(el => {
  el.addEventListener('click', (e) => {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(el => el.classList.remove('tabs-nav__btn--active'));
    e.currentTarget.classList.add('tabs-nav__btn--active');

    tabsItem.forEach(el => el.classList.remove('tabs-content--active'));
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-content--active');
  });
});


/* Слайдер в Events */

const eventsSlider = new Swiper('.events-swiper-container', {
  loop: false,

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1
    },

    510: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
    },

    769: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27
    },

    1025: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    },
  },

  pagination: {
    el: '.developments__swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.developments__swiper-button-next',
    prevEl: '.developments__swiper-button-prev',
  },
});


/* Тултипы */

(() => {
  tippy('.js-tooltip-btn', {
    theme: 'tooltip-dscr',
    maxWidth: 264,
  });
})();


/* Слайдер в Projects */

const projectSwiper = new Swiper('.project-swiper-container', {
  loop: false,

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1
    },

    680: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
    },

    705: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
    },

    1120: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    },
  },

  navigation: {
    nextEl: '.partners__swiper-button-next',
    prevEl: '.partners__swiper-button-prev',
  },
});


/* Map */

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.8, 37.8],
    zoom: 14,
    controls: []
  });

  var myPlacemark = new ymaps.Placemark([55.8, 37.6], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map-icon.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [0, 0]
  });

  myMap.geoObjects.add(myPlacemark);
  myMap.controls.add("zoomControl");
  myMap.controls.add('geolocationControl');
  myMap.behaviors.disable(['drag', 'rightMouseButtonMagnifier', 'scrollZoom']);


  myMap.controls.add('geolocationControl', {
    float: 'right'
  });

  myMap.controls.add('zoomControl', {
    float: 'none',
    position: {
      bottom: '50px',
      right: '30px'
    }
  });

}


/* InputMask  */

let selector = document.querySelector("input[type='tel']");
let im = new Inputmask("+7 (999) 999-99-99");

im.mask(selector);


/* Validate */

let validation = new JustValidate('#form', {
  errorLabelStyle: {
    color: "#D11616",
  }
});

validation.addField("#input-name", [
  {
    rule: "required",
    ErrorMessage: "Недопустимый формат",
  },
  {
    rule: "minLength",
    value: 2,
    errorMessage: "Недопустимый формат",
  },
  {
    rule: "maxLength",
    value: 20,
    errorMessage: "Недопустимый формат",
  }
])
  .addField("#input-tel", [
    {
      validator: (value) => {
        const phone = selector.inputmask.unmaskedvalue();
        return Boolean(Number(phone) && phone.length > 0)
      },
      ErrorMessage: "Недопустимый формат",
    },
    {
      validator: (value) => {
        const phone = selector.inputmask.unmaskedvalue();
        return Boolean(Number(phone) && phone.length === 10)
      },
      errorMessage: "Недопустимый формат",
    },
  ]);
