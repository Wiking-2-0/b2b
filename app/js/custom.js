var menu_selector = ".main-navigation"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню.
 
function onScroll(){
    var scroll_top = $(document).scrollTop();
    $(menu_selector + " a").each(function(){
        var hash = $(this).attr("href");
        var target = $(hash);
        if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
            $(menu_selector + " a.active").removeClass("active");
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
}

$(document).ready(function(){
// burger
$(".burger_button").click(function() {
	$(this).toggleClass("on");
	$(".main-navigation").toggleClass('menu-show');
});
//tabs
(function($) {
  $(function() {

    $('.services-tabs-caption').on('click', 'li:not(.active)', function() {
      $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('.services-tabs').find('.services-tabs-content').removeClass('active').eq($(this).index()).addClass('active');
    });

  });
})(jQuery);
//popup
$('.services-item-btn, .efficiency-btn, .project-btn, .header-phone-feedback, .header-info-title a').click(function(e) {
	e.preventDefault();
	$('.popup').show();
	$('.overlay').show();
})
$('.popup-close, .overlay').click(function() {
	$('.overlay, .popup').hide();
})
//popup review
$('.review-example-item').click(function(e) {
	$('.review-example-popup').show();
})
$('.review-example-popup .popup-close').click(function() {
	$('.review-example-popup').hide();
});
//popup business-offer
$('.business-offer-info-item').click(function(e) {
	$(this).next('.business-offer-popup').show();
	$('.overlay').show();
})
$('.business-offer-popup .popup-close, .overlay').click(function() {
	$('.business-offer-popup, .overlay').hide();
});
//send popup
$(".popup-form").submit(function() {
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()
      }).done(function() {
        $(this).find("input").val("");
        alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
        $(".popup-form").trigger("reset");
         $(".popup").css('opacity','0').delay(200);  // delay() позволяет сделать паузу между изменениями свойств
         $(".popup").css('display', 'none'); 
         $(".popup").dequeue();
      });
      return false;
  });
//slider project
$('.project .owl-carousel').owlCarousel({
	items:1,
	loop:true,
	singleItem:true,
	nav:true,
	dots: false
});
//slider review
$('.review .owl-carousel').owlCarousel({
// items:3,
loop:true,
singleItem:true,
center: true,
nav:true,
dots: false,
autoWidth: 255,
margin: 80,
mouseDrag: false,
responsive:{ 
	0:{
		items:1,
		margin:30
	},
	600:{
		items:2
	},
	1000:{
		items:3
	}
}
});
//anchor
$(document).on("scroll", onScroll);
 
    $("a[href^=#]").click(function(e){
        e.preventDefault();
 
        $(document).off("scroll");
        $(menu_selector + " a.active").removeClass("active");
        $(this).addClass("active");
        var hash = $(this).attr("href");
        var target = $(hash);
 
        $("html, body").animate({
            scrollTop: target.offset().top
        }, 500);
 
    });

	/*$(".main-navigation").on("click","a", function (event) {
        event.preventDefault();
        $(".main-navigation a.active").removeClass("active");
        $(this).addClass("active");
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 900);
    });*/

});



