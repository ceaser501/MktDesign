// to get current year
function getYear() {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  dots: false,
  nav: true,
  navText: [],
  autoplay: true,
  autoplayHoverPause: true,
  navText: [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});

/** google_map js **/
function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(40.712775, -74.005973),
    zoom: 18,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// 현재 연도 자동 업데이트
function updateYear() {
  const currentYear = new Date().getFullYear();
  document.querySelector(
    "footer p"
  ).innerText = `© ${currentYear} Master’s Program in the College of Engineering, Yonsei University, Taesu Kim.`;
}

updateYear();

// WOW.js 초기화
$(document).ready(() => {
  new WOW().init();
});

// 스크롤 시 헤더 배경 변경
$(window).on("scroll", function () {
  const header = $(".header");
  if ($(window).scrollTop() > 50) {
    header.addClass("scrolled");
  } else {
    header.removeClass("scrolled");
  }
});
