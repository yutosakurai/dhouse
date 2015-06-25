// トップページのスライドショー

$(function(){
	var fadeTime = 1000;
	var switchTime = 2500;

	$(window).load(function(){
		$('#slideshow img').css({opacity:'0'});
		$('#mydream').stop().animate({opacity:'1'},fadeTime);
		setTimeout(function(){imgChange01();},switchTime);
	});
	function imgChange01() {
		$('#mydream').stop().animate({opacity:'0'},fadeTime);
		$('#myhouse').stop().animate({opacity:'1'},fadeTime);
		setTimeout(function(){imgChange02();},switchTime);
	};
	function imgChange02() {
		$('#myhouse').stop().animate({opacity:'0'},fadeTime);
		$('#dhouse').stop().animate({opacity:'1'},fadeTime);
	};
});

$(function() {
  var h = $(window).height();
 
  $('.wrap').css('display','none');
  $('#slideshow').height(h).css('display','block');
});

$(function(){
  setTimeout('stopload()',6500);
});
 
function stopload(){
  $('.wrap').css('display','block');
  $('#slideshow').delay(900).fadeOut(900);
}


$(function() {
 
 
// トップ画のアニメーションスピードをコントロール
 
var fadeinSP = 600; //フェードインスピード
var fadeoutSP = 600; //フェードアウトスピード
 
 
// トップ画の通常非表示設定
 
$('#pcex').hide();
$('#photoex').hide();
$('#watchex').hide();
$('#lightex').hide();
$('#treeex').hide();
$('#aboutexplain').hide();
$('#flow1explain').hide();
$('#flow2explain').hide();
$('#featuresexplain').hide();

// 「about d.house」hover時に説明フェードイン
 
$('#about').hover(
function () {
$('#aboutexplain').stop(true, true).fadeIn(fadeinSP);
}, function () {
$('#aboutexplain').stop(true, true).fadeOut(fadeoutSP);
}
);


// 「flow1」hover時に説明フェードイン
 
$('#flow1').hover(
function () {
$('#flow1explain').stop(true, true).fadeIn(fadeinSP);
}, function () {
$('#flow1explain').stop(true, true).fadeOut(fadeoutSP);
}
);


// 「flow2」hover時に説明フェードイン
 
$('#flow2').hover(
function () {
$('#flow2explain').stop(true, true).fadeIn(fadeinSP);
}, function () {
$('#flow2explain').stop(true, true).fadeOut(fadeoutSP);
}
);


// 「features」hover時に説明フェードイン
 
$('#features').hover(
function () {
$('#featuresexplain').stop(true, true).fadeIn(fadeinSP);
}, function () {
$('#featuresexplain').stop(true, true).fadeOut(fadeoutSP);
}
);
 
// 「pc」hover時にサブ画フェードイン
 
$('#pc').hover(
function () {
$('#pcex').stop(true, true).fadeIn(fadeinSP);
}, function () {
$('#pcex').stop(true, true).fadeOut(fadeoutSP);
}
);
 
 
// 「photo」hover時にサブ画フェードイン
 
$('#photo').hover(
function () {
$('#photoex').stop(true, true).fadeIn(fadeinSP);
}, function () {
$('#photoex').stop(true, true).fadeOut(fadeoutSP);
}
);
 
 
// 「watch」hover時にサブ画フェードイン
 
$('#watch').hover(
function () {
$('#watchex').stop(true, true).fadeIn(fadeinSP);
}, function () {
$('#watchex').stop(true, true).fadeOut(fadeoutSP);
}
);


// 「light」hover時にサブ画フェードイン
 
$('#light1, #light2, #light3').hover(
function () {
$('#lightex').stop(true, true).fadeIn(fadeinSP);
}, function () {
$('#lightex').stop(true, true).fadeOut(fadeoutSP);
}
);


// 「tree」hover時にサブ画フェードイン
 
$('#tree').hover(
function () {
$('#treeex').stop(true, true).fadeIn(fadeinSP);
}, function () {
$('#treeex').stop(true, true).fadeOut(fadeoutSP);
}
);


});


// pagetopスクロース

$(document).ready(function() {

var pagetop = $('.pagetopbtn');

$(window).scroll(function () {
if ($(this).scrollTop() > 100) {
pagetop.fadeIn();
} else {
pagetop.fadeOut();
}
});

pagetop.click(function () {
$('body, html').animate({ scrollTop: 0 }, 500);
return false;
});
});

