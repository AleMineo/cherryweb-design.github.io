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

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element',
  layoutMode: 'fitRows',
  getSortData: {
    category: '[data-category]'
  },
  filter:'.web'
});

// bind filter button click
$('#filters').on( 'click', 'a', function() {
  var filterValue = $( this ).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'a', function() {
    $buttonGroup.find('.selected').removeClass('selected');
    $( this ).addClass('selected');
  });
});
//fine portfolio isotope

$(document).ready(function() {

  // init Isotope
  var $container = $('.isotope').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    getSortData: {
      category: '[data-category]'
    }
  });

  // bind filter button click
  $('#filters').on('click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $container.isotope({
      filter: filterValue
    });
  });

  //****************************
  // Isotope Load more button
  //****************************
  var initShow = 6; //number of items loaded on init & onclick load more button
  var counter = initShow; //counter for load more button
  var iso = $container.data('isotope'); // get Isotope instance

  loadMore(initShow); //execute function onload

  function loadMore(toShow) {
    $container.find(".hidden").removeClass("hidden");

    var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function(item) {
      return item.element;
    });
    
    $(hiddenElems).addClass('hidden');
    $container.isotope('layout');

    //when no more to load, hide show more button
    if (hiddenElems.length == 0) {
      jQuery("#load-more").hide();
    } else {
      jQuery("#load-more").show();
    };

  }

  //append load more button
  $container.after('<a id="load-more" class="button btn btn-primary ease-scroll hover-effect"> Load More</a>');

  //when load more button clicked
  $("#load-more").click(function() {
    if ($('#filters').data('clicked')) {
      //when filter button clicked, set initial value for counter
      counter = initShow;
      $('#filters').data('clicked', false);
    } else {
      counter = counter;
    };

    counter = counter + initShow;

    loadMore(counter);
  });

  //when filter button clicked
  $("#filters").click(function() {
    $(this).data('clicked', true);
    loadMore(initShow);
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

var initShow = 3; //number of items loaded on init & onclick load more button
  var counter = initShow; //counter for load more button
  var iso = $container.data('isotope'); // get Isotope instance

  loadMore(initShow); //execute function onload

  function loadMore(toShow) {
    $container.find(".hidden").removeClass("hidden");

    var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function(item) {
      return item.element;
    });
    $(hiddenElems).addClass('hidden');
    $container.isotope('layout');

    //when no more to load, hide show more button
    if (hiddenElems.length == 0) {
      jQuery("#load-more").hide();
    } else {
      jQuery("#load-more").show();
    };

  }

  //append load more button
  $container.after('<button id="load-more"> Load More</button>');

  //when load more button clicked
  $("#load-more").click(function() {
    if ($('#filters').data('clicked')) {
      //when filter button clicked, set initial value for counter
      counter = initShow;
      $('#filters').data('clicked', false);
    } else {
      counter = counter;
    };

    counter = counter + initShow;

    loadMore(counter);
  });

  //when filter button clicked
  $("#filters").click(function() {
    $(this).data('clicked', true);

    loadMore(initShow);
  });

  
  