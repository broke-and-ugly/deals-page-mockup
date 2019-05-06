$(function() {
   $("#carousel-thumb").on("swiperight", function() {
      $(this).carousel('prev');
   });
   $("#carousel-thumb").on("swipeleft", function() {
      $(this).carousel('next');
   });
});