$(function() {	'use strict';		//_Start all jQuery Items ...

	//_.navLinks smoth scroll
	//======================
	$(".header .navLinks a").click(function() {
		$('html,body').animate({
			scrollTop: $('#' + $(this).data('value')).offset().top
		}, 1000);
	});

	//_"header" heght = window height.
	$("#header").height($(window).height());
	//_resize window height = header heght.
	$(window).resize(function(){ $("#header").height($(window).height()); });

	//_hidding the menu items 'childern'.
	$("#theMenu").children().fadeOut();

	//_addjusted nav classess & prevent liks defaul.
	var navLinks 	= $(".header .navLinks ul li"),
		navliksA	= $(".header .navLinks ul li a");

	//_add/remov class activeb & run navSlidUp after click.
	navLinks.click(function() {
		$(this).addClass("active").siblings().removeClass("active");
		//_run navSlid Up function in phone screen onley.
		navSlidUp();
	});

	//_prevent the sideBar links from refresh the page.
	navliksA.click(function(e){ e.preventDefault(); });

	//_slid down function.
	//====================
	function navSlidDown() { 'use strict';
		//_the menu height & width = 100%
		$("#theMenu").animate({ 'opacity':1, 'height' : '100%', 'width' : '100%'}, 500,
			//_after sliding complete :_all items on the menu will aper.
			function() { $(this).children().fadeIn(1000); });
	}//____End

	//_slid up function.
	//==================
	function navSlidUp() { 'use strict';
		//_all items on the menu will disApear.
		$("#theMenu").children().fadeOut( 200, function() {
			//_after disAper complete :_the menu height & width = 0%
			$("#theMenu").animate({ 'opacity':0, 'height' : 0 , 'width' : 0},800); });
	} //____End

	//_run navSlid Down function on slidMeun.
	$("#slidMeun").click(function() { navSlidDown(); });
	//_run navSlid Up function on slidMeun.
	$("#closMenu").click(function() { navSlidUp(); });

	//_topNav addjustment.
	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();

		//_if the widow top speasc > headder hieght.
		if (scrollTop >= 100 ){ $("#topNav").addClass("fixedNav"); }
		//_if the widow top speasc < headder hieght.
		else { $("#topNav").removeClass("fixedNav"); }
	}); //_Class of "fixedNav" will be styled on "sass/sections/header.scss".

	//_addjustment testimonial slider.
	//====================================
	var leftButt 	= $(".header .mintitle .buttons .fa-angle-left"),
		rightButt 	= $(".header .mintitle .buttons .fa-angle-right");

	//_function to check the test box first / last.
	function checkTest() { 'use strict';
		//_if the mimbers is first one = fadeOut "nextButton" else = fadeIn "nextButton".
		$(".header .mintitle .titleBox:first").hasClass("active")?
			leftButt.fadeOut() : leftButt.fadeIn()
		//_if the mimbers is last one = fadeOut "prevtButton" else = fadeIn "prevtButton".
		$(".header .mintitle .titleBox:last").hasClass("active")?
			rightButt.fadeOut() : rightButt.fadeIn()
	}; //_end checkTest.

	checkTest(); //_run and srart checking.

	//_on clikc the button.
	$(".header .mintitle .buttons i").click(function() {
		if ($(this).hasClass("fa-angle-right")){ //_on Clikc next button =
			//_fadeOut this and fadeIn the next titleBox
			$(".mintitle .titleboxes .active").fadeOut(300, function() {
				$(this).removeClass("active").next(".titleBox").addClass("active").fadeIn();
				checkTest(); //_and run checkTest function.
			});}

		else {	//_on Clikc prev button =
			//_fadeOut this and fadeIn the prev titleBox
			$(".mintitle .titleboxes .active").fadeOut(300, function() {
				$(this).removeClass("active").prev(".titleBox").addClass("active").fadeIn();
				checkTest(); //_and run checkTest function.
			});}
	}); //____End

	//_about list sliding.
	//====================
	$(".about .leftSide ul li").click(function(){ //_On Click =
		//_the ansur will slide Down & toggle Class plus/minus.
		$(this).children(".ansur").slideToggle(500, function(){
			$(this).siblings("i").toggleClass("fa-plus fa-minus");
		});
		//_and Other ansurs slide Up chind the icon to plus.
		$(this).siblings().children(".ansur").slideUp(500, function(){
			$(this).siblings("i").removeClass("fa-minus").addClass("fa-plus");
		});
	})//___End

	//_Citys Gallery addjustment.
	//============================
	var //_my varybals.
		bigOverLay 		= $("#baigOverDis"),
		wihtBox			= $(".cityes .cityBoxes .bigDis .wihtBox"),
		wihtBoxName		= $(".cityes .cityBoxes .bigDis .wihtBox #cityName"),
		wihtBoxDis		= $(".cityes .cityBoxes .bigDis .wihtBox #cityDis");

	//_functions shouls applay befor the action happen.
	$("#baigOverDis").children().animate({ 'opacity':0, 'height' : '0%', 'width' : '0%'});

	//_function to fade In .
	function fadInTheBigOver() { 'use strict';
		bigOverLay.fadeIn(300, function() {
			$(this).children().animate(
				{ 'opacity':1, 'height' : '80%', 'width' : '90%'},300);
		});
	};

	//_function to fade Out.
	function fadOutTheBigOver() { 'use strict';
		bigOverLay.children().animate(
			//_the animatetion at firest. and fedOut
			{ 'opacity':0, 'height' : '0%', 'width' : '0%'}, 300, function(){
			$(this).parent().fadeOut(300);
		});
	}

	var wihtBoxImg		= document.getElementById("cityImg"),
	 	wihtBoxName		= document.getElementById("cityName"),
	 	wihtBoxDis		= document.getElementById("cityDis"),
	 	wihtBoxLink		= document.getElementById("cityLink");
	//_
	var smImg		= document.getElementById("sm_Name"),
	 	smDis		= document.getElementById("sm_Dis"),
	 	smLink		= document.getElementById("sm_Link");


	$(".cityes .cityBoxes .citImg img").click(function() { //_when the imge clicked
		//_the big imge will cheng by set the small imge attrbute.
		wihtBoxImg.setAttribute('src', this.getAttribute("src"));

		//wihtBoxName.innerHTML =

		//wihtBoxDis.innerHTML = $(this).children("#sm_Dis").textContent;

		//wihtBoxLink.setAttribute('href', $(this).children("a").getAttribute("href"));

		fadInTheBigOver(); //_run the fedIn function.
	})

	//_fadeOut all tha fixed box.
	$("#closBox").click(function() {  fadOutTheBigOver();	})


	//_run ehe owl slider.
	//====================
	var owl	= $('.owl-carousel');
		owl.owlCarousel({
			margin:10, //_margin betwen the items.
			//_media Query.
			responsive: {
				0:		{ items:1, dots :false, margin:5 },
				600:	{ items:2 },
				930:	{ items:3 },
				1250:	{ items:4 }
			}
		})//_end owlCarousel.

	//_addjusted buttonsr.
	//====================
	// With speed option in the [000] on mile-secuond.
	$("#next").click(function() { // Go to the next item.
		owl.trigger('next.owl.carousel', [700]);});

	$("#prev").click(function() { // Back to the previous item.
		owl.trigger('prev.owl.carousel', [700]);})

	//_run & addjustment niceScroll.
	//==============================
	$("html").niceScroll({
		cursorcolor: "#8f8ad8", //_ the min Color
		cursorwidth: 7,	//_the width
		cursorborderradius: 0,	//_Border radius.
		cursorborder: "1px sloid #ff7b7b" //_border Color.
	});



});//_____End all jQuery items.
