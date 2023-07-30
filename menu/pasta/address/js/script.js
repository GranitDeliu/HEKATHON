function orderCompleted(){
	if (document.getElementById('address').value == ""){
		return;
	}
	if (document.getElementById('email').value == ""){
		return;
	}
	if (document.getElementById('firstName').value == ""){
		return;
	}
	if (document.getElementById('lastName').value == ""){
		return;
	}
	if (document.getElementById('country').value == ""){
		return;
	}
	swal("Succes!", "Your order has been placed!", "success");
}

function Data(e) { //"e" - is an event object, that is being populated on form's submit
    if (input.value != document.getElementById('password').value) {
        alert('Password Must be Matching.');
        e.stopPropagation(); //These two rows KILL the event, so it will not be submited
        e.preventDefault();
    }
}

$(document).ready(function(){
	$('#click').click(function(){
		$('#home').css('display', 'block');
		$('#home1').css('display', 'none');
		$('#menu').css('display', 'block');
		$('#menu1').css('display', 'none');
		$('#contacts').css('display', 'block');
		$('#contacts1').css('display', 'none');
		$('#form').css('display', 'block');
		$('#form1').css('display', 'none');
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
		$('#form').css('display', 'none');
		$('#form1').css('display', 'block');
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