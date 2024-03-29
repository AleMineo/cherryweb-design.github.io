function reveal() {
    for (var e = document.querySelectorAll(".animation"), t = 0; t < e.length; t++) {
        var o, a = window.innerHeight;
        e[t].getBoundingClientRect().top < a - 150 ? e[t].classList.add("active") : e[t].classList.remove("active")
    }
}
$(document).ready(function () {
    $(".ease-scroll").click(function (e) {
        e.preventDefault();
        var t = $($(this).attr("href")).offset().top;
        $("html, body").animate({
            scrollTop: t
        }, 1e3, "easeOutQuad")
    })
});

$(document).ready(function () {
    var e = $(".isotope").isotope({
        itemSelector: ".element",
        layoutMode: "fitRows",
        filter: ".web",
        getSortData: {
            category: "[data-category]"
        }
    });
    $("#filters").on("click", "a", function () {
        var t = $(this).attr("data-filter");
        e.isotope({
            filter: t
        })
    }), $(".button-group").each(function (e, t) {
        var o = $(t);
        o.on("click", "a", function () {
            o.find(".selected").removeClass("selected"), $(this).addClass("selected")
        })
    });

    var t = 6,
        o = e.data("isotope");

    function a(t) {
        e.find(".hidden").removeClass("hidden");
        var a = o.filteredItems.slice(t, o.filteredItems.length).map(function (e) {
            return e.element
        });
        $(a).addClass("hidden"), e.isotope("layout"), 0 == a.length ? jQuery("#load-more").hide() : jQuery("#load-more").show()
    }
    a(6), e.after('<a id="load-more" class="button btn btn-primary ease-scroll hover-effect load-more">Load More</a>'), $("#load-more").click(function () {
        $("#filters").data("clicked") && (t = 6, $("#filters").data("clicked", !1)), a(t += 6)
    }), $("#filters").click(function () {
        $(this).data("clicked", !0), a(6)
    })
}), window.addEventListener("scroll", reveal), $(".dot").readmore({
    moreLink: '<a href="#">Read more</a>',
    collapsedHeight: 170,
    afterToggle: function (e, t, o) {
        o || $("html, body").animate({
            scrollTop: t.offset().top
        }, {
            duration: 100
        })
    }
}), $(".hobbiesGallery").readmore({
    moreLink: '<a href="#" class="button btn btn-primary ease-scroll hover-effect load-more"> Load More</a>',
    lessLink: '<a href="#" class="button btn btn-primary ease-scroll hover-effect load-more">Load less</a>',
    collapsedHeight: 300,
    afterToggle: function (e, t, o) {
        o || $("html, body").animate({
            scrollTop: t.offset().top
        }, {
            duration: 100
        })
    }
}), $(document).ready(function () {
    $("#myButton").click(function () {
        if ($("link[href*=color]").length) $("link[href*=color]").remove();
        else {
            var e = document.createElement("link");
            e.rel = "stylesheet", e.href = "assets/style/css/color.css", document.getElementsByTagName("head")[0].appendChild(e)
        }
    })
});