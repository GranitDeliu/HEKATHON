$(document).ready(function(){
	$('.btn').click(function(){
		$('img').animate({
			left: '-400'
		}, 2000);
	});
});

$(document).ready(function(){
	$('.btn').click(function(){
		$('img').animate({
			left: '926' 
		}, 0);
	});
});

$(document).ready(function(){
	$('#click').click(function(){
		$('#content').css('display', 'block');
		$('#content1').css('display', 'none');
		$('#home').css('display', 'block');
		$('#home1').css('display', 'none');
		$('#menu').css('display', 'block');
		$('#menu1').css('display', 'none');
		$('#contacts').css('display', 'block');
		$('#contacts1').css('display', 'none');
		$('#btn1').css('display', 'block');
		$('#btn2').css('display', 'none');
	});
});


$(document).ready(function(){
	$('#click1').click(function(){
		$('#content').css('display', 'none');
		$('#content1').css('display', 'block');
		$('#home').css('display', 'none');
		$('#home1').css('display', 'block');
		$('#menu').css('display', 'none');
		$('#menu1').css('display', 'block');
		$('#contacts').css('display', 'none');
		$('#contacts1').css('display', 'block');
		$('#btn1').css('display', 'none');
		$('#btn2').css('display', 'block');
	});
});


$(document).ready(function(){
	$('#number').mouseenter(function(){
		$('#numbers').show(500);
	});
	
	$('#number').mouseleave(function(){
		$('#numbers').hide(500);
	});
});

$(document).ready(function(){
	$('#number1').mouseenter(function(){
		$('#numbers1').show(500);
	});
	
	$('#number1').mouseleave(function(){
		$('#numbers1').hide(500);
	});
});