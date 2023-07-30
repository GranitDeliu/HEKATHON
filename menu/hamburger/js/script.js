//all
window.total_price = 0;
window.total_displayed = 0;
window.prices = [1.5,2,2.5,3,2,2];
window.quantities = [0,0,0,0,0,0];	

$(document).ready(function(){
	$('.btn1').click(function(){
		AddProductCalTotal(0);
		$('.container1').css('display', 'block');
	});

	$('.remove1').click(function(){
		window.quantities[0] = 0;
		$('.container1').css('display', 'none');
		updateTotal();
	});


	$('.btn2').click(function(){
		AddProductCalTotal(1);
		$('.container2').css('display', 'block');
	});

	$('.remove2').click(function(){
		window.quantities[1] = 0;		
		$('.container2').css('display', 'none');
		updateTotal();
	});

	$('.btn3').click(function(){
		AddProductCalTotal(2);
		$('.container3').css('display', 'block');
	});

	$('.remove3').click(function(){
		window.quantities[2] = 0;
		$('.container3').css('display', 'none');
		updateTotal();
	});

	$('.btn4').click(function(){
		AddProductCalTotal(3);
		$('.container4').css('display', 'block');
	});

	$('.remove4').click(function(){
		window.quantities[3] = 0;
		$('.container4').css('display', 'none');
		updateTotal();
	});

	$('.btn5').click(function(){
		AddProductCalTotal(4);
		$('.container5').css('display', 'block');
	});

	$('.remove5').click(function(){
		window.quantities[4] = 0;
		$('.container5').css('display', 'none');
		updateTotal();
	});

	$('.btn6').click(function(){
		AddProductCalTotal(5);
		$('.container6').css('display', 'block');
	});

	$('.remove6').click(function(){
		window.quantities[5] = 0;
		$('.container6').css('display', 'none');
		updateTotal();
	});		
});

//total

$(document).ready(function(){
	$('.seethetotal').click(function(){
		window.total_displayed = 1;
		$('.total').css('display', 'block');
		$('.value').val = window.total_price;//veq test per diqka
		document.getElementById("value").innerHTML =  window.total_price;
	});
});

function updateTotal(){
	window.total_price = 0;
	for (let x = 0; x < 6; x++){
		window.total_price += window.quantities[x] * window.prices[x];
	}
	if (window.total_displayed == 1){
		document.getElementById("value").innerHTML =  window.total_price;
	}
}

function AddProductCalTotal(val,tester = 0){
	if (tester != 0){
		window.quantities[val] = tester;
	}else{
		window.quantities[val]++;
	}
	window.total_price = 0;
	for (let x = 0; x < 6; x++){
		window.total_price += window.quantities[x] * window.prices[x];
	}
	if (window.total_displayed == 1){
		document.getElementById("value").innerHTML =  window.total_price;
	}
}

$(document).ready(function(){
	$('.seethetotal').click(function(){
	$(this).css('display', 'none');	
	$('.proceed').css('display', 'block');
	});
});

$(document).ready(function(){
	$('.proceed').click(function(){
		window.location = "./address/address.html"
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
		$('#burger').css('display', 'block');
		$('#burger1').css('display', 'none');
		$('#burger2').css('display', 'block');
		$('#burger3').css('display', 'none');
		$('#burger4').css('display', 'block');
		$('#burger5').css('display', 'none');
		$('#burger6').css('display', 'block');
		$('#burger7').css('display', 'none');
		$('#burger8').css('display', 'block');
		$('#burger9').css('display', 'none');
		$('#burger10').css('display', 'block');
		$('#burger11').css('display', 'none');
		$('#contain').css('display','block');
		$('#contain1').css('display','none');
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
		$('#burger').css('display', 'none');
		$('#burger1').css('display', 'block');
		$('#burger2').css('display', 'none');
		$('#burger3').css('display', 'block');
		$('#burger4').css('display', 'none');
		$('#burger5').css('display', 'block');
		$('#burger6').css('display', 'none');
		$('#burger7').css('display', 'block');
		$('#burger8').css('display', 'none');
		$('#burger9').css('display', 'block');
		$('#burger10').css('display', 'none');
		$('#burger11').css('display', 'block');
		$('#contain').css('display','none');
		$('#contain1').css('display','block');
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