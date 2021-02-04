$(function() {
	setTimeout(function(){
		$('.start-title').fadeIn(1600);
	},500); 
	setTimeout(function(){
		$('.start').fadeOut(1500);
	},2500); 
});

jQuery('a[href^="#"]').click(function() {
  let speed = 800;
  let id = jQuery(this).attr("href");
  let target = ("#" == id ? "html" : id);
  let position = jQuery(target).offset().top;

  jQuery("html, body").animate(
    {
      scrollTop: position + $('#js-header').outerHeight()
    },
    speed
    );
    return false;
});


$(function(){
	$(window).scroll(function (){
		$('.fadeIn').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 200){
				$(this).addClass('scrollin');
			}
		});
	});
});


var slideConts = document.querySelectorAll('.slideConts'); 
var slideContsRect = []; 
var slideContsTop = []; 
var windowY = window.pageYOffset; 
var windowH = window.innerHeight; 
var remainder = 100; 
for (var i = 0; i < slideConts.length; i++) {
  slideContsRect.push(slideConts[i].getBoundingClientRect());
}
for (var i = 0; i < slideContsRect.length; i++) {
  slideContsTop.push(slideContsRect[i].top + windowY);
}
window.addEventListener('resize', function () {
  windowH = window.innerHeight;
});
window.addEventListener('scroll', function () {
  windowY = window.pageYOffset;
  
  for (var i = 0; i < slideConts.length; i++) {
    if(windowY > slideContsTop[i] - windowH + remainder) {
			slideConts[i].classList.add('show');
		}
  }
});

$('point-title').click(function() {
  
  $('point-list').fadeIn(3000);
  
});

$(function(){
  $(window).on('load scroll',function (){
    $('.animation').each(function(){
      var target = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var height = $(window).height();
      if (scroll > target - height){
        $(this).addClass('active');
      }
    });
  });
});

$(function(){
  $(window).on('load scroll',function (){
    $('.animation1').each(function(){
      var target = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var height = $(window).height();
      if (scroll > target - height){
        $(this).addClass('active');
      }
    });
  });
});

$(function(){
  $(window).on('load scroll',function (){
    $('.animation2').each(function(){
      var target = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var height = $(window).height();
      if (scroll > target - height){
        $(this).addClass('active');
      }
    });
  });
});

$(function(){
	var setElm = $('.loopSlider'),
	slideSpeed = 2000;

	setElm.each(function(){
			var self = $(this),
			selfWidth = self.innerWidth(),
			findUl = self.find('.slide'),
			findLi = findUl.find('.li'),
			listWidth = findLi.outerWidth(),
			listCount = findLi.length,
			loopWidth = listWidth * listCount;

			findUl.wrapAll('<div class="loopSliderWrap" />');
			var selfWrap = self.find('.loopSliderWrap');

			if(loopWidth > selfWidth){
					findUl.css({width:loopWidth}).clone().appendTo(selfWrap);

					selfWrap.css({width:loopWidth*2});

					function loopMove(){
							selfWrap.animate({left:'-' + (loopWidth) + 'px'},slideSpeed*listCount,'linear',function(){
									selfWrap.css({left:'0'});
									loopMove();
							});
					};
					loopMove();

					setElm.hover(function() {
							selfWrap.pause();
					}, function() {
							selfWrap.resume();
					});
			}
	});
});


