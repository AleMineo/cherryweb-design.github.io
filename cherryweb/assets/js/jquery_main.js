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



// external js: isotope.pkgd.js

$(document).ready(function() {
  var isMobile =  /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

  var $portfolioContainer = $('#portfolio .isotope').isotope({
    itemSelector: '.element',
    layoutMode: 'fitRows',
    getSortData: {
      category: '[data-category]'
    }
  })

  var $hobbiesContainer = $('#hobbies .isotope').isotope({
    itemSelector: '.element',
    layoutMode: 'fitRows'
  })

  var initShow = isMobile ? 2 : 6; //number of items loaded on init & onclick load more button
  var counter = initShow; //counter for load more button

  loadMore(counter, $portfolioContainer)
  loadMore(counter, $hobbiesContainer)

  function loadMore(toShow, $container) {
    const iso = $container.data('isotope')
    $container.find(".hidden").removeClass("hidden");

    var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function(item) {
      return item.element;
    });
    $(hiddenElems).addClass('hidden');
    $container.isotope('layout');

    //when no more to load, hide show more button
    if (hiddenElems.length == 0) {
      $container.parent().children(".load-more").hide()
    } else {
      $container.parent().children(".load-more").show()
    };

  }

  $portfolioContainer.after('<a class="button btn btn-primary ease-scroll hover-effect load-more"> Load More</a>');
  $hobbiesContainer.after('<a class="button btn btn-primary ease-scroll hover-effect load-more"> Load More</a>');

  //when load more button clicked
  $(".load-more").click(function() {
    if ($('#filters').data('clicked')) {
      //when filter button clicked, set initial value for counter
      counter = initShow;
      $('#filters').data('clicked', false);
    } else {
      counter = counter;
    };

    counter = counter + initShow;
  
    loadMore(counter, $(this).parent().children('.isotope'));
  });

  //when filter button clicked
  $("#filters").click(function() {
    $(this).data('clicked', true);

    loadMore(initShow, $(this).parent().parent().children('.isotope'));
  });

  // bind filter button click
  $('#filters a').on('click', function() {
    var filterValue = $(this).attr('data-filter');
    var $container = $(this).parent().parent().parent().parent().children('.isotope')

    $container.isotope({
      filter: filterValue
    });
  });


  // change is-checked class on buttons
  $('.button-group').each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'a', function() {
      $buttonGroup.find('.selected').removeClass('selected');
      $(this).addClass('selected');
    });
  });
});

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