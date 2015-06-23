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
$('#londonexplain').hide();

 
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


// 「london画」hover時に説明フェードイン
 
$('#london').hover(
function () {
$('#londonexplain').stop(true, true).fadeIn(fadeinSP);
}, function () {
$('#londonexplain').stop(true, true).fadeOut(fadeoutSP);
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

// サブページのスライドショー

$(function(){
var $setElm = $('#keyblock1'),
fadeSpeed = 1500,
switchDelay = 5000;
 
$setElm.each(function(){
var targetObj = $(this);
var findUl = targetObj.find('ul');
var findLi = targetObj.find('li');
var findLiFirst = targetObj.find('li:first');
 
findLi.css({display:'block',opacity:'0',zIndex:'1'});
findLiFirst.css({zIndex:'2'}).stop().animate({opacity:'1'},fadeSpeed);
 
setInterval(function(){
findUl.find('li:first-child').animate({opacity:'0'},fadeSpeed).next('li').css({zIndex:'100'}).animate({opacity:'1'},fadeSpeed).end().appendTo(findUl).css({zIndex:'99'});
},switchDelay);
});
});