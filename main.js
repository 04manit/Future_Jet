$(document).ready(function () {
  $('.menu').click(function () {
    $('.fixed-header').css({
      "top": "0",
      "right": "0",
      "border-radius": "0",
      "opacity": "1"
    }, 300);
  })

  $('.close-fixed-header').click(function () {
    $('.fixed-header').css({
      "top": "-100%",
      "right": "-100%",
      "border-radius": "50%",
      "opacity": "0"
    }, 300);
  })



  
})