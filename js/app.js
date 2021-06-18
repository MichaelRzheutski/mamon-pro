/* jQuery Apps */
$(document).ready(function(){

  /* Menu nav toggle */
  $("#nav_toggle").on("click", function(event){
    event.preventDefault();

    $(this).toggleClass("active");
    $("#burger-menu").toggleClass("active");
  });

  /* Smooth Scroll For Links */
  $("a").on('click', function(event) {

    if (this.hash !== "") {

      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    }
  });

  /* Smooth Scroll For Button */
  $("[data-scroll]").on("click", function(event){

    var $this = $(this),
        blockId = $this.data("scroll"),
        blockOffset = $(blockId).offset().top;

    $("html, body").animate({
      scrollTop: blockOffset
    }, 800);
  });

});


// ToTop Button
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 788) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
