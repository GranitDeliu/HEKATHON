$(document).ready(function(){
	$('#contain').mouseenter(function(){
		$('#show').css('display', 'block');
	});

	$('#contain').mouseleave(function(){
		$('#show').css('display', 'none');
	});
});

$(document).ready(function(){
	$('#click').click(function(){
		$('#home').css('display', 'block');
		$('#home1').css('display', 'none');
		$('#menu').css('display', 'block');
		$('#menu1').css('display', 'none');
		$('#contacts').css('display', 'block');
		$('#contacts1').css('display', 'none');
		$('#food').css('display', 'block');
		$('#food2').css('display', 'none');
		$('#food3').css('display', 'block');
		$('#food4').css('display', 'none');
		$('#food5').css('display', 'block');
		$('#food6').css('display', 'none');
		$('#food7').css('display', 'block');
		$('#food8').css('display', 'none');
		$('.list').css('display', 'block');
		$('.list1').css('display', 'none');
	});
});


$(document).ready(function(){
	$('#click1').click(function(){
		$('#home').css('display', 'none');
		$('#home1').css('display', 'block');
		$('#menu').css('display', 'none');
		$('#menu1').css('display', 'block');
		$('#contacts').css('display', 'none');
		$('#contacts1').css('display', 'block');
		$('#food').css('display', 'none');
		$('#food2').css('display', 'block');
		$('#food3').css('display', 'none');
		$('#food4').css('display', 'block');
		$('#food5').css('display', 'none');
		$('#food6').css('display', 'block');
		$('#food7').css('display', 'none');
		$('#food8').css('display', 'block');
		$('.list').css('display', 'none');
		$('.list1').css('display', 'block');
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

