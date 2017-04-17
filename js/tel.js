// JavaScript Document

function getVal() {
return document.getElementById('bottel');
}
function getVal1() {
return document.getElementById('bottel1');
}
function getVal2() {
return document.getElementById('bottel2');
}
function getVal3() {
return document.getElementById('bottel3');
}


var digits="-0123456789";
var digits1="-0123456789";
var digits2="-0123456789";
var digits3="-0123456789";
function validPhone() {
for(i=0; i<getVal().value.length; i++)
{ if (digits.indexOf(getVal().value.charAt(i))<0) {
	$('div.numbers').fadeIn(500);
	$("body").append("<div id='overlay'></div>");
	$('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
}
}
/*if (getVal().value.length == 3 || getVal().value.length == 6) {
getVal().value = getVal().value + '-';
} */
}

function validPhone1() {
for(i=0; i<getVal1().value.length; i++)
{ if (digits1.indexOf(getVal1().value.charAt(i))<0) {
	$('div.numbers1').fadeIn(500);
	$("body").append("<div id='overlay'></div>");
	$('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
}
}
/*if (getVal().value.length == 3 || getVal().value.length == 6) {
getVal().value = getVal().value + '-';
} */
}

function validPhone2() {
for(i=0; i<getVal2().value.length; i++)
{ if (digits2.indexOf(getVal2().value.charAt(i))<0) {
	$('div.numbers2').fadeIn(500);
	$("body").append("<div id='overlay'></div>");
	$('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
}
}
/*if (getVal().value.length == 3 || getVal().value.length == 6) {
getVal().value = getVal().value + '-';
} */
}

function validPhone3() {
for(i=0; i<getVal3().value.length; i++)
{ if (digits3.indexOf(getVal3().value.charAt(i))<0) {
	$('div.numbers3').fadeIn(500);
	$("body").append("<div id='overlay'></div>");
	$('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
}
}
/*if (getVal().value.length == 3 || getVal().value.length == 6) {
getVal().value = getVal().value + '-';
} */
}