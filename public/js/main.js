var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000
});

$(function() {
    $(document).scroll(function() {
      var $nav = $("#thisNavbar");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    })
  })
  window.sr = ScrollReveal();
  sr.reveal('.intro', {
    duration: 1000,
    origin:'top',
    distance:'800px'
  });
  sr.reveal('.introText', {
    duration: 2000,
    origin:'bottom',
    distance:'800px'
  });
  if((window.screen.width>=992)&&(window.screen.height>=992)){
    sr.reveal('#ecomService', {
      duration: 2000,
      origin:'bottom'
    });
    sr.reveal('#respService', {
      duration: 4000,
      origin:'bottom'
    });
    sr.reveal('#microService', {
      duration: 6000,
      origin:'bottom'
    });
    sr.reveal('#appService', {
      duration: 8000,
      origin:'bottom'
    });
    sr.reveal('.card', {
      duration: 1000,
      origin:'bottom',
      distance:'100px',
      viewFactor: 0.4
    });
    sr.reveal('.form', {
      duration: 1000,
      origin:'right',
      distance:'300px',
      viewFactor: 0.2
    });
    sr.reveal('footer', {
      duration: 3000,
      origin:'bottom',
      distance:'300px'
    });
  }

  $(function() {
    // Smooth Scrolling
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

