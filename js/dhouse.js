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


});

