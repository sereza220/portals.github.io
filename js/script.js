$(document).ready(function(){
 		 var menu_link = $('.menu-link');
 		 var menu_link_active = $('.menu-link_active');
 		 var over_menu = $('.over-menu');
 		 var nav_link = $('.over-menu a');

 		 menu_link.click(function(){
 		 	menu_link.toggleClass('menu-link_active');
 		 	over_menu.toggleClass('over-menu_active');
 		 });
 		 nav_link.click(function(){
 		 	menu_link.toggleClass('menu-link_active');
 		 	over_menu.toggleClass('over-menu_active');
 		 });
});

/*Слайдер на главной берет один из рандомных блоков*/
var random = Math.floor(Math.random() * $('.block').length);
$('.block').hide().eq(random).show();
/*Рандомный портал*/
var random = Math.floor(Math.random() * $('.random-block').length);
$('.random-block').hide().eq(random).show();

/*Крутящиеся щиты*/
$(".portals-list__card_img").mouseover(function(){
  $(this).toggleClass("portals-list__card_img_hover");  //Toggle the active class to the area is hovered
});

/*Спойлер*/
$('.spoiler').hide();
$('.spoiler-link').on('click', function(e) {
var idSpoiler = $(this).attr('href'),
 classSelect = 'spoiler-link--active';
$(this).toggleClass(classSelect);
$(idSpoiler).slideToggle(200);
e.preventDefault();
 });

/*Крутящиеся щиты на страницах порталов*/
$(".main-shield__img").mouseover(function(){
  $(this).toggleClass("main-shield__img_hover");  //Toggle the active class to the area is hovered
});

/* Слайдер сликовский на страницах порталов*/
$('.portal-carousel').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
/*  autoplay: true,
  autoplaySpeed: 4000,*/
  arrows: true,
  prevArrow: '<div class="slider-arrow slider-arrow_prod slider-arrow_prod_right"><div>',
  nextArrow: '<div class="slider-arrow slider-arrow_prod slider-arrow_prod_left"><div>',
  responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});


/*Хронология*/
(function() {

  // VARIABLES
  const timeline = document.querySelector(".timeline ol"),
    elH = document.querySelectorAll(".timeline li > div"),
    arrows = document.querySelectorAll(".timeline .arrows .arrow"),
    arrowPrev = document.querySelector(".timeline .arrows .arrow__prev"),
    arrowNext = document.querySelector(".timeline .arrows .arrow__next"),
    firstItem = document.querySelector(".timeline li:first-child"),
    lastItem = document.querySelector(".timeline li:last-child"),
    xScrolling = 500,
    disabledClass = "disabled";

  // START
  window.addEventListener("load", init);

  function init() {
    setEqualHeights(elH);
    animateTl(xScrolling, arrows, timeline);
    setSwipeFn(timeline, arrowPrev, arrowNext);
    setKeyboardFn(arrowPrev, arrowNext);
  }

  // SET EQUAL HEIGHTS
  function setEqualHeights(el) {
    let counter = 0;
    for (let i = 0; i < el.length; i++) {
      const singleHeight = el[i].offsetHeight;

      if (counter < singleHeight) {
        counter = singleHeight;
      }
    }

    for (let i = 0; i < el.length; i++) {
      el[i].style.height = `${counter}px`;
    }
  }

  // CHECK IF AN ELEMENT IS IN VIEWPORT
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // SET STATE OF PREV/NEXT ARROWS
  function setBtnState(el, flag = true) {
    if (flag) {
      el.classList.add(disabledClass);
    } else {
      if (el.classList.contains(disabledClass)) {
        el.classList.remove(disabledClass);
      }
      el.disabled = false;
    }
  }

  // ANIMATE TIMELINE
  function animateTl(scrolling, el, tl) {
    let counter = 0;
    for (let i = 0; i < el.length; i++) {
      el[i].addEventListener("click", function() {
        if (!arrowPrev.disabled) {
          arrowPrev.disabled = true;
        }
        if (!arrowNext.disabled) {
          arrowNext.disabled = true;
        }
        const sign = (this.classList.contains("arrow__prev")) ? "" : "-";
        if (counter === 0) {
          tl.style.transform = `translateX(-${scrolling}px)`;
        } else {
          const tlStyle = getComputedStyle(tl);
          // add more browser prefixes if needed here
          const tlTransform = tlStyle.getPropertyValue("-webkit-transform") || tlStyle.getPropertyValue("transform");
          const values = parseInt(tlTransform.split(",")[4]) + parseInt(`${sign}${scrolling}`);
          tl.style.transform = `translateX(${values}px)`;
        }

        setTimeout(() => {
          isElementInViewport(firstItem) ? setBtnState(arrowPrev) : setBtnState(arrowPrev, false);
          isElementInViewport(lastItem) ? setBtnState(arrowNext) : setBtnState(arrowNext, false);
        }, 1100);

        counter++;
      });
    }
  }

  // ADD SWIPE SUPPORT FOR TOUCH DEVICES
  function setSwipeFn(tl, prev, next) {
    const hammer = new Hammer(tl);
    hammer.on("swipeleft", () => next.click());
    hammer.on("swiperight", () => prev.click());
  }

  // ADD BASIC KEYBOARD FUNCTIONALITY
  function setKeyboardFn(prev, next) {
    document.addEventListener("keydown", (e) => {
      if ((e.which === 37) || (e.which === 39)) {
        const timelineOfTop = timeline.offsetTop;
        const y = window.pageYOffset;
        if (timelineOfTop !== y) {
          window.scrollTo(0, timelineOfTop);
        }
        if (e.which === 37) {
          prev.click();
        } else if (e.which === 39) {
          next.click();
        }
      }
    });
  }

})();

/*Чтобы при клике в истории перебрасывало в хронологию нужную.*/

$( "#period1" ).click(function() {
    $('html, body').animate({
      scrollTop:$('#period1_c').offset().top - 580
    }, 'slow');
});

$( ".period1_t" ).click(function() {
    $('html, body').animate({
      scrollTop:$('#period1').offset().top - 80
    }, 'slow');
});

$( "#period2" ).click(function() {
    $('html, body').animate({
      scrollTop:$('#period2_c').offset().top - 580
    }, 'slow');
});

$( ".period2_t" ).click(function() {
    $('html, body').animate({
      scrollTop:$('#period2').offset().top - 80
    }, 'slow');
});

$( "#period3" ).click(function() {
    $('html, body').animate({
      scrollTop:$('#period3_c').offset().top - 580
    }, 'slow');
});

$( ".period3_t" ).click(function() {
    $('html, body').animate({
      scrollTop:$('#period3').offset().top - 80
    }, 'slow');
});
$( "#period4" ).click(function() {
    $('html, body').animate({
      scrollTop:$('#period4_c').offset().top - 580
    }, 'slow');
});

$( ".period4_t" ).click(function() {
    $('html, body').animate({
      scrollTop:$('#period4').offset().top - 80
    }, 'slow');
});

$( "#period5" ).click(function() {
    $('html, body').animate({
      scrollTop:$('#period5_c').offset().top - 580
    }, 'slow');
});
$( ".period5_t" ).click(function() {
    $('html, body').animate({
      scrollTop:$('#period5').offset().top - 80
    }, 'slow');
});

$( "#period6" ).click(function() {
    $('html, body').animate({
      scrollTop:$('#period6_c').offset().top - 580
    }, 'slow');
});

$( ".period6_t" ).click(function() {
    $('html, body').animate({
      scrollTop:$('#period6').offset().top - 80
    }, 'slow');
});
/* Слайдер сликовский на страницах порталов внизу*/
$('.friends-carousel').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
/*  autoplay: true,
  autoplaySpeed: 4000,*/
  arrows: true,
  prevArrow: '<div class="slider-arrow slider-arrow-also slider-arrow_prod slider-arrow_prod_right"><div>',
  nextArrow: '<div class="slider-arrow slider-arrow-also slider-arrow_prod slider-arrow_prod_left"><div>',
  responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
});


/*Прокрутка страницы наверх*/

$(window).scroll(function(){
if ($(this).scrollTop() > 100) {
$('.scrollup').fadeIn();
} else {
$('.scrollup').fadeOut();
}
});
 
$('.scrollup').click(function(){
$("html, body").animate({ scrollTop: 0 }, 600);
return false;
});

/*Чтобы дергать хронологию*/