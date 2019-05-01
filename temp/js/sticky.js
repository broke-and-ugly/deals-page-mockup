$(function() {
   $(window).scroll(function () {
       console.log($(window).scrollTop())
     if ($(window).scrollTop() > 160) {
       $('#toStick').addClass('stuck');
     }
     if ($(window).scrollTop() < 161) {
       $('#toStick').removeClass('stuck');
     }
   });
 });