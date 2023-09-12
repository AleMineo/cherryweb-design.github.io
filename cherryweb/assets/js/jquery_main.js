// JavaScript Document
//animation scrolling
$(document).ready(function () {
  $(".ease-scroll").click(function (event) {
    event.preventDefault();
    var offset = $($(this).attr('href')).offset().top;
    $('html, body').animate({
      scrollTop: offset
    }, 1000, 'easeOutQuad');
  });
});

var stickyNavTop = $('#nav').offset().top;

var stickyNav = function () {
  var scrollTop = $(window).scrollTop();

  if (scrollTop > stickyNavTop) {
    $('#nav').addClass('sticky');
  } else {
    $('#nav').removeClass('sticky');
  }
};

stickyNav();

$(window).scroll(function () {
  stickyNav();
});

//portfolio isotope
$(function () {

  var $container = $('#container');

  $container.isotope({
    itemSelector: '.element'
  });


  var $optionSets = $('#options .option-set'),
    $optionLinks = $optionSets.find('a');

  $optionLinks.click(function () {
    var $this = $(this);
    // don't proceed if already selected
    if ($this.hasClass('selected')) {
      return false;
    }
    var $optionSet = $this.parents('.option-set');
    $optionSet.find('.selected').removeClass('selected');
    $this.addClass('selected');

    // make option object dynamically, i.e. { filter: '.my-filter-class' }
    var options = {},
      key = $optionSet.attr('data-option-key'),
      value = $this.attr('data-option-value');
    // parse 'false' as false boolean
    value = value === 'false' ? false : value;
    options[key] = value;
    if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
      // changes in layout modes need extra logic
      changeLayoutMode($this, options)
    } else {
      // otherwise, apply new options
      $container.isotope(options);
    }

    return false;
  });


});
//fine portfolio isotope

//animation for page elements
function reveal() {
  var reveals = document.querySelectorAll(".animation");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

$('.dot').readmore({
  moreLink: '<a href="#">Usage, examples, and options</a>',
  collapsedHeight: 170,
  afterToggle: function (trigger, element, expanded) {
    if (!expanded) { // The "Close" link was clicked
      $('html, body').animate({
        scrollTop: element.offset().top
      }, {
        duration: 100
      });
    }
  }
});

$('.dot').readmore({
  speed: 500
});



$(document).ready(function () {
  $("#myButton").click(function () {
    if ($("link[href*=color]").length) {
      $("link[href*=color]").remove();
    } else {
      var ls = document.createElement('link');
      ls.rel = "stylesheet";
      ls.href = "assets/style/css/color.css";
      document.getElementsByTagName('head')[0].appendChild(ls);
    }
  });

});