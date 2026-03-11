// ============================
// Reveal animations on scroll
// ============================
function reveal() {
  const elements = document.querySelectorAll(".animation");
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 150) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}
window.addEventListener("scroll", reveal);

// ============================
// Document ready
// ============================
$(document).ready(function () {

  // ============================
  // Smooth scrolling for ease-scroll links
  // ============================
  $(".ease-scroll").click(function (e) {
    e.preventDefault();
    const targetOffset = $($(this).attr("href")).offset().top;
    $("html, body").animate({
      scrollTop: targetOffset
    }, 1000, "easeOutQuad");
  });

  // ============================
  // Isotope portfolio filtering
  // ============================
  const $isotopeGrid = $(".isotope").isotope({
    itemSelector: ".element",
    layoutMode: "fitRows",
    filter: ".web",
    getSortData: {
      category: "[data-category]"
    }
  });

  // Filter buttons (excluding archive)
  $("#filters").on("click", "a", function (event) {
    if ($(this).hasClass("no-filter")) return; // skip archive
    event.preventDefault();

    const filterValue = $(this).attr("data-filter");
    $isotopeGrid.isotope({ filter: filterValue });
  });

  // Selected button styling
  $(".button-group").each(function (_, group) {
    const $group = $(group);
    $group.on("click", "a", function () {
      $group.find(".selected").removeClass("selected");
      $(this).addClass("selected");
    });
  });

  // ============================
  // Load more functionality
  // ============================
  let itemsToShow = 6;
  const isotopeData = $isotopeGrid.data("isotope");

  function updateHiddenItems(count) {
    $isotopeGrid.find(".hidden").removeClass("hidden");

    const hiddenItems = isotopeData.filteredItems
      .slice(count)
      .map(item => item.element);

    $(hiddenItems).addClass("hidden");
    $isotopeGrid.isotope("layout");

    if (hiddenItems.length === 0) {
      $("#load-more").hide();
    } else {
      $("#load-more").show();
    }
  }

  updateHiddenItems(itemsToShow);

  $isotopeGrid.after('<a id="load-more" class="button btn btn-primary ease-scroll hover-effect load-more">Load More</a>');

  $("#load-more").click(function () {
    if ($("#filters").data("clicked")) {
      itemsToShow = 6;
      $("#filters").data("clicked", false);
    }
    updateHiddenItems(itemsToShow += 6);
  });

  $("#filters").click(function () {
    $(this).data("clicked", true);
    updateHiddenItems(6);
  });

  // ============================
  // Readmore plugin initialization
  // ============================
$(".dot").each(function(){
  const $this = $(this);

  // Reset previous state
  $this.removeAttr("style").removeClass("readmore-js-section").next(".readmore-js-toggle").remove();

  // Force calculation after a tiny delay to let the container render
  setTimeout(function(){
    $this.readmore({
      moreLink: '<a href="#">Read more</a>',
      collapsedHeight: 170,
      speed: 200,
      afterToggle: function(trigger, element, expanded){
        if(!expanded){
          $("html, body").animate({scrollTop: element.offset().top}, 200);
        }
      }
    });
  }, 10); // 10ms is enough
});

  $(".hobbiesGallery").readmore({
    moreLink: '<a href="#" class="button btn btn-primary ease-scroll hover-effect load-more"> Load More</a>',
    lessLink: '<a href="#" class="button btn btn-primary ease-scroll hover-effect load-more">Load less</a>',
    collapsedHeight: 300,
    afterToggle: function (trigger, element, expanded) {
      if (!expanded) {
        $("html, body").animate({ scrollTop: element.offset().top }, 100);
      }
    }
  });

  // ============================
  // Color stylesheet toggle
  // ============================
  $("#myButton").click(function () {
    const $colorLink = $("link[href*=color]");
    if ($colorLink.length) {
      $colorLink.remove();
    } else {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "assets/style/css/color.css";
      document.head.appendChild(link);
    }
  });

  // ============================
  // PrettyPhoto gallery initialization
  // ============================
$("figure.element").each(function () {
    const $fig = $(this);
    const folder = $fig.data("folder");
    const prefixes = $fig.data("prefixes"); // array of objects
    const rel = $fig.data("rel");
    const $firstLink = $fig.find("a.popup").first();

    prefixes.forEach(item => {
        const prefix = item.prefix;
        const total = item.total;
        for(let i = 1; i <= total; i++){
            const num = ("0"+i).slice(-2);
            const href = `${folder}/${prefix}${num}.webp`;

            $("<a/>",{
                href: href,
                "data-lightbox": rel,
                title: rel,
                class: "popup no-show"
            }).insertAfter($firstLink);
        }
    });
});


});