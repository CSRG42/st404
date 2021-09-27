/*
 jQuery Show / Hide Div com base no parâmetro de URL */


!function(){for(var e,n=function(){},o=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],i=o.length,r=window.console=window.console||{};i--;)r[e=o[i]]||(r[e]=n)}();


/*!
 * scrollup
 */
!function(l,o,e){"use strict";l.fn.scrollUp=function(o){l.data(e.body,"scrollUp")||(l.data(e.body,"scrollUp",!0),l.fn.scrollUp.init(o))},l.fn.scrollUp.init=function(r){var s,t,c,i,n,a,d,p=l.fn.scrollUp.settings=l.extend({},l.fn.scrollUp.defaults,r),f=!1;switch(d=p.scrollTrigger?l(p.scrollTrigger):l("<a/>",{id:p.scrollName,href:"#top"}),p.scrollTitle&&d.attr("title",p.scrollTitle),d.appendTo("body"),p.scrollImg||p.scrollTrigger||d.html(p.scrollText),d.css({display:"none",position:"fixed",zIndex:p.zIndex}),p.activeOverlay&&l("<div/>",{id:p.scrollName+"-active"}).css({position:"absolute",top:p.scrollDistance+"px",width:"100%",borderTop:"1px dotted"+p.activeOverlay,zIndex:p.zIndex}).appendTo("body"),p.animation){case"fade":s="fadeIn",t="fadeOut",c=p.animationSpeed;break;case"slide":s="slideDown",t="slideUp",c=p.animationSpeed;break;default:s="show",t="hide",c=0}i="top"===p.scrollFrom?p.scrollDistance:l(e).height()-l(o).height()-p.scrollDistance,n=l(o).scroll(function(){l(o).scrollTop()>i?f||(d[s](c),f=!0):f&&(d[t](c),f=!1)}),p.scrollTarget?"number"==typeof p.scrollTarget?a=p.scrollTarget:"string"==typeof p.scrollTarget&&(a=Math.floor(l(p.scrollTarget).offset().top)):a=0,d.click(function(o){o.preventDefault(),l("html, body").animate({scrollTop:a},p.scrollSpeed,p.easingType)})},l.fn.scrollUp.defaults={scrollName:"scrollUp",scrollDistance:300,scrollFrom:"top",scrollSpeed:300,easingType:"linear",animation:"fade",animationSpeed:200,scrollTrigger:!1,scrollTarget:!1,scrollText:"Scroll to top",scrollTitle:!1,scrollImg:!1,activeOverlay:!1,zIndex:2147483647},l.fn.scrollUp.destroy=function(r){l.removeData(e.body,"scrollUp"),l("#"+l.fn.scrollUp.settings.scrollName).remove(),l("#"+l.fn.scrollUp.settings.scrollName+"-active").remove(),l.fn.jquery.split(".")[1]>=7?l(o).off("scroll",r):l(o).unbind("scroll",r)},l.scrollUp=l.fn.scrollUp}(jQuery,window,document);

"use strict";

(function ($) {
  "use strict"; //  Searching & Expand Menu Popup

  var searchToggle = $(".search-toggle"),
      closeA = $(".scale"),
      closeB = $(".searching button"),
      cBody = $("body"),
      closeScale = closeA.add(closeB);

  if (searchToggle.length > 0) {
    searchToggle.on("click", function () {
      cBody.toggleClass("open");
      return false;
    });
  }

  if (closeScale.length > 0) {
    closeScale.on("click", function () {
      cBody.removeClass("open");
      return false;
    });
  }

  $(".close").on("click", function () {
    $("body").removeClass("open");
  }); // Commons Variables

  var $window = $(window),
      $body = $("body"); // Sticky Menu

  $($window).on("scroll", function () {
    var scroll = $($window).scrollTop();

    if (scroll < 150) {
      $("#sticky").removeClass("is-isticky");
    } else {
      $("#sticky").addClass("is-isticky");
    }

    if (scroll < 150) {
      $("#sticky2").removeClass("is-isticky2");
    } else {
      $("#sticky2").addClass("is-isticky2");
    }

  }); // Off Canvas toggler Function

  var $offCanvasToggle = $(".offcanvas-toggle"),
      $offCanvas = $(".offcanvas"),
      $offCanvasOverlay = $(".offcanvas-overlay"),
      $mobileMenuToggle = $(".mobile-menu-toggle");
  $offCanvasToggle.on("click", function (e) {
    e.preventDefault();
    var $this = $(this),
        $target = $this.attr("href");
    $body.addClass("offcanvas-open");
    $($target).addClass("offcanvas-open");
    $offCanvasOverlay.fadeIn();

    if ($this.parent().hasClass("mobile-menu-toggle")) {
      $this.addClass("close");
    }
  });
  $(".offcanvas-close, .offcanvas-overlay").on("click", function (e) {
    e.preventDefault();
    $body.removeClass("offcanvas-open");
    $offCanvas.removeClass("offcanvas-open");
    $offCanvasOverlay.fadeOut();
    $mobileMenuToggle.find("a").removeClass("close");
  }); //  Off Canvas Menu

  function mobileOffCanvasMenu() {
    var $offCanvasNav = $(".offcanvas-menu, .overlay-menu"),
        $offCanvasNavSubMenu = $offCanvasNav.find(".offcanvas-submenu"); // Add Toggle Button With Off Canvas Sub Menu

    $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"></span>'); // Category Sub Menu Toggle

    $offCanvasNav.on("click", "li a, .menu-expand", function (e) {
      var $this = $(this);

      if ($this.attr("href") === "#" || $this.hasClass("menu-expand")) {
        e.preventDefault();

        if ($this.siblings("ul:visible").length) {
          $this.parent("li").removeClass("active");
          $this.siblings("ul").slideUp();
          $this.parent("li").find("li").removeClass("active");
          $this.parent("li").find("ul:visible").slideUp();
        } else {
          $this.parent("li").addClass("active");
          $this.closest("li").siblings("li").removeClass("active").find("li").removeClass("active");
          $this.closest("li").siblings("li").find("ul:visible").slideUp();
          $this.siblings("ul").slideDown();
        }
      }
    });
  }

  mobileOffCanvasMenu();
  var $offcanvasMenu2 = $("#offcanvas-menu2 li a");
  $offcanvasMenu2.on("click", function (e) {
    // e.preventDefault();
    $(this).closest("li").toggleClass("active");
    $(this).closest("li").siblings().removeClass("active");
    $(this).closest("li").siblings().children(".category-sub-menu").slideUp();
    $(this).closest("li").siblings().children(".category-sub-menu").children("li").toggleClass("active");
    $(this).closest("li").siblings().children(".category-sub-menu").children("li").removeClass("active");
    $(this).parent().children(".category-sub-menu").slideToggle();
  }); //  menu-content

  var $btnMenu = $(".menu-btn");
  var $vmenuContent = $(".vmenu-content");
  $btnMenu.on("click", function (event) {
    $vmenuContent.slideToggle(500);
  });
  $vmenuContent.each(function () {
    var $ul = $(this),
        $lis = $ul.find(".menu-item:gt(7)"),
        isExpanded = $ul.hasClass("expanded");
    $lis[isExpanded ? "show" : "hide"]();

    if ($lis.length > 0) {
      $ul.append($('<li class="expand">' + (isExpanded ? '<a href="javascript:void(0);"><span><i class="ion-android-remove"></i>Close Categories</span></a>' : '<a href="javascript:void(0);"><span><i class="ion-android-add"></i>More Categories</span></a>') + "</li>").on("click", function (event) {
        var isExpanded = $ul.hasClass("expanded");
        event.preventDefault();
        $(this).html(isExpanded ? '<a href="javascript:void(0);"><span><i class="ion-android-add"></i>More Categories</span></a>' : '<a href="javascript:void(0);"><span><i class="ion-android-remove"></i>Close Categories</span></a>');
        $ul.toggleClass("expanded");
        $lis.toggle(300);
      }));
    }
  })

  // SscrollUp

  $.scrollUp({
    scrollName: "scrollUp",
    // Element ID
    scrollDistance: 400,
    // Distance from top/bottom before showing element (px)
    scrollFrom: "top",
    // 'top' or 'bottom'
    scrollSpeed: 800,
    // Speed back to top (ms)
    easingType: "linear",
    // Scroll to top easing (see http://easings.net/)
    animation: "fade",
    // Fade, slide, none
    animationSpeed: 400,
    // Animation speed (ms)
    scrollTrigger: false,
    // Set a custom triggering element. Can be an HTML string or jQuery object
    scrollTarget: false,
    // Set a custom target element for scrolling to. Can be element or number
    scrollText: '<img src="https://csrg42.github.io/st404/assets/img/studio/sticon/arrow-up.png">',
    // Text for element, can contain HTML
    scrollTitle: false,
    // Set a custom <a> title if required.
    scrollImg: false,
    // Set true to use image
    activeOverlay: false,
    // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    zIndex: 214 // Z-Index for the overlay
  });
})(jQuery);