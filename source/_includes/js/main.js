AOS.init( {duration:800, easing:'slide'} );
(function($) {
  "use strict";

  // sets and .js-fullheight element height to screen height, resizes with screen
  var fullHeight=function() {
    $('.js-fullheight').css('height',$(window).height());
    // console.log($(window).height())
    $(window).resize(function() {
      $('.js-fullheight').css('height',$(window).height());
    });
  };
  fullHeight();

  // hides loading overlay when page is ready
  $('#loader').removeClass('show');
  var loader=function() {
    setTimeout(function() {
      if ($('#loader').length>0) {
        $('#loader').removeClass('show');
      }
    },1);
  };
  loader();


  $.Scrollax();

  // expand menu dropdown on hover
  $('nav .dropdown').hover(function() {
      var $this=$(this);
      $this.addClass('show');
      $this.find('> a').attr('aria-expanded',true);
      $this.find('.dropdown-menu').addClass('show');
    }, function() {
      var $this=$(this);
      $this.removeClass('show');
      $this.find('> a').attr('aria-expanded',false);
      $this.find('.dropdown-menu').removeClass('show');
  });

  // shows fixed navbar after scrolling down
  var scrollWindow=function() {
    $(window).scroll(function() {
      var $w=$(this),st=$w.scrollTop(),navbar=$('.dx-navbar'),sd=$('.js-scroll-wrap');
      if (st>150) {
        if (!navbar.hasClass('scrolled')) {
          navbar.addClass('scrolled');
        }
      }
      if (st<150) {
        if (navbar.hasClass('scrolled')) {
          navbar.removeClass('scrolled sleep');
        }
      }
      if (st>350) {
        if (!navbar.hasClass('awake')) {
          navbar.addClass('awake');
        }
        if (sd.length>0) {
          sd.addClass('sleep');
        }
      }
      if (st<350) {
        if (navbar.hasClass('awake')) {
          navbar.removeClass('awake');
          navbar.addClass('sleep');
        }
        if (sd.length>0) {
          sd.removeClass('sleep');
        }
      }
    });
  };
  scrollWindow();

  // controls the stats counter animation
  var counter=function() {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var browserOffset = '175%';
    if (screenWidth > 1200) { browserOffset = '165%'; }
    if (screenWidth < 1200) { browserOffset = '175%'; }
    if (screenWidth < 900) { browserOffset = '185%'; }
    if (screenWidth < 500) { browserOffset = '200%'; }
    // console.log(screenWidth);
    // console.log(browserOffset);
    $('#stats').waypoint(function(direction) {
      if (direction==='down' &&! $(this.element).hasClass('dx-animated')) {
        var comma_separator_number_step=$.animateNumber.numberStepFactories.separator(',')
        $('.number').each(function() {
          var $this=$(this),num=$this.data('number');
          $this.animateNumber( {
            number:num,numberStep:comma_separator_number_step
          },2000);
        });
      }
    },{offset:browserOffset});
  }
  counter();

  // animates content as it's scrolled to
  var contentWayPoint=function() {
    var i=0;
    var ht=$(window).height();
    $('.dx-animate').waypoint(function(direction) {
      if (direction==='down' &&! $(this.element).hasClass('dx-animated')) {
        i++;
        $(this.element).addClass('item-animate');
        setTimeout(function() {
          $('body .dx-animate.item-animate').each(function(k) {
            var el=$(this);
            setTimeout(function() {
              var effect=el.data('animate-effect');
              if (effect==='fadeIn') {
                el.addClass('fadeIn dx-animated');
              } else if (effect==='fadeInLeft') {
                el.addClass('fadeInLeft dx-animated');
              } else if (effect==='fadeInRight') {
                el.addClass('fadeInRight dx-animated');
              } else {
                el.addClass('fadeInUp dx-animated');
              }
              el.removeClass('item-animate');
            },k*50,'easeInOutExpo');
          });
        },100);
      }
    // this offset function accounts for progressive waypoint delta from css scale:0.9
    },{offset: function() {
        var unscaledHeight = $(this.element).offset().top;
        var adjustedHeight = unscaledHeight*0.1;
        var adjustedOffset = (window.innerHeight)*0.9 + adjustedHeight;
        return adjustedOffset;
      }
    });
    // },{offset: '95%'});
  };
  contentWayPoint();

  // smooth scrolls to linked anchor on same page, doesn't apply to nav
  var OnePageNav=function() {
    $(".smoothscroll[href^='#'], #nav-links ul li a[href^='#']").on('click',function(e) {
      e.preventDefault();
      var hash=this.hash,navToggler=$('.navbar-toggler');
      $('html, body').animate( {
        scrollTop:$(hash).offset().top},700,'easeInOutExpo',function() {
          window.location.hash=hash;
        });
      if (navToggler.is(':visible')) {
        navToggler.click();
      }
    });
    $('body').on('activate.bs.scrollspy',function() {
    })
  };
  OnePageNav();
})(jQuery);

// enables tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

{% if jekyll.environment != "dev" %}
  document.addEventListener("DOMContentLoaded", function() {
    // adds target=_blank to https and pdf links so they open in a new tab
    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
      // open external links and pdfs in new tab
      if (/(https?)|(\.pdf)|(\.zip)/.test(links[i].getAttribute('href'))) {
        links[i].target = '_blank';
      }
      // if current site and not prf then open in same tab
      if (/^(?=.*(blockdx.com))(?!.*(\.pdf))(?!.*(\.zip)).*/.test(links[i].getAttribute('href'))) {
        links[i].target = '_self';
      }
    }
  });
{% endif %}