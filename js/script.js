$( document ).ready(function() {

    // Hero Section FUll Height
    $(function(){
    	var windowH = $(window).height();
    	var wrapperH = $('.hero').height();
    	if(windowH > wrapperH) {                            
    		$('.hero').css({'height':($(window).height())+'px'});
    	}                                                                               
    	$(window).resize(function(){
    		var windowH = $(window).height();
    		var wrapperH = $('.hero').height();
    		var differenceH = windowH - wrapperH;
    		var newH = wrapperH + differenceH;
    		var truecontentH = $('#truecontent').height();
    		if(windowH > truecontentH) {
    			$('.hero').css('height', (newH)+'px');
    		}

    	})          
    });

	$(function(){
    	var numero = document.getElementById('numero');
  		var min = 1;
  		var max = 30;
  		var duracao = 1500; // 5 segundos

  		for (var i = min; i <= max; i++) {
    		setTimeout(function(nr) {
      		numero.innerHTML = nr;
    		}, i * duracao / max, i);
  		}
	});

	$(function(){
    	var numero = document.getElementById('numero-anos');
  		var min = 1;
  		var max = 10;
  		var duracao = 1500; // 5 segundos

  		for (var i = min; i <= max; i++) {
    		setTimeout(function(nr) {
      		numero.innerHTML = nr;
    		}, i * duracao / max, i);
  		}
	});

	$(function(){
    	var numero = document.getElementById('numero-metros');
  		var min = 1;
  		var max = 2000;
  		var duracao = 1500; // 5 segundos

  		for (var i = min; i <= max; i++) {
    		setTimeout(function(nr) {
      		numero.innerHTML = nr;
    		}, i * duracao / max, i);
  		}
	});
});