var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000
});

$(function() {
    $(document).scroll(function() {
      var $nav = $("#thisNavbar");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    })
  })

