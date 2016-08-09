$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
  		
    var values = [];
    randomnumber= Math.floor(Math.random() * 100 + 1);

 	function NewGame(){
 		$('#feedback').empty();
 		$('#userGuess').val('');
  		$('#feedback').append('Make your Guess!');
  		$("#count").text('0');
  		$('#guessList').children().detach();
  		//var randomnumber= Math.floor(Math.random() * 100 + 1);
  		return randomnumber;
  		
	}

	function HotnColdMeter(){
		userGuess=parseInt($('#userGuess').val());
		var reallyhot_ceiling=randomnumber+5; 
		var reallyhot_floor=randomnumber-5; 
		var hot_ceiling=randomnumber+10;
		var hot_floor=randomnumber-10;
		var warm_ceiling=randomnumber+20;
		var warm_floor=randomnumber-20;
		var cold_ceiling=randomnumber+40;
		var cold_floor=randomnumber-40;
		var vcold_ceiling=randomnumber+70;
		var vcold_floor=randomnumber-70;
		var xcold_ceiling=randomnumber+90;
		var xcold_floor=randomnumber-90;

		if(userGuess===randomnumber){
		 	$('#feedback').empty();
		 	$('#feedback').append('You guessed Correctly!!!<br>Great Job!!');
		}
		else if((userGuess<=reallyhot_ceiling)&&(userGuess>=reallyhot_floor)){
		 	//alert('you\'re very Hot!!!!');
		 	$('#feedback').empty();
		 	$('#feedback').append('you\'re very Hot!!!!');
		}
		else if((userGuess<=hot_ceiling)&&(userGuess>=hot_floor)){
		 	//alert('you\'re getting Hot!!');
		 	$('#feedback').empty();
		 	$('#feedback').append('you\'re getting Hot!!');
		}
		else if((userGuess<=warm_ceiling)&&(userGuess>=warm_floor)){
		 	//alert('you\'re getting Warm!');
		 	$('#feedback').empty();
		 	$('#feedback').append('you\'re getting Warm!');
		}
		else if((userGuess<=cold_ceiling)&&(userGuess>=cold_floor)){
		 	//alert('you\'re Cold..');
		 	$('#feedback').empty();
		 	$('#feedback').append('you\'re Cold..');
		}
		else if((userGuess<=vcold_ceiling)&&(userGuess>=vcold_floor)){
		 	//alert('you\'re very Cold...');
		 	$('#feedback').empty();
		 	$('#feedback').append('you\'re very Cold...');
		}
		else if((userGuess<=xcold_ceiling)&&(userGuess>=xcold_floor)){
		 	//alert('Not even close bruh!!');
		 	$('#feedback').empty();
		 	$('#feedback').append('Not even close bruh!!');
		}
		 values.push($('#userGuess').val()); // add value to array
  	     var list= values.pop();
         $('#guessList').append('<li> ' + list+ '</li>');
		 var value = parseInt($("#count").text(), 10) + 1;
    	 $("#count").text(value); 
		 $('#userGuess').val('');
	}
	$('.new').click(function(){
		randomnumber= Math.floor(Math.random() * 100 + 1);
  		//alert(randomnumber);
  		return NewGame();
  	});

    $('#guessButton').on('click',function(){
    	var validate = $('#userGuess').val()  
    	if(validate===""){							
    		$('#userGuess').val('');
    		alert('This field cannot be empty!');
    		return false;
    	}
    	if((validate>100)||(validate<0)){  
    		$('#userGuess').val('');
    		alert('Please guess a value between 1-100');
    		return false;
    	}
    	if(isNaN(validate)){  
    		$('#userGuess').val('');
    		alert('This is not a Number!!');
    		return false;
    	}
    	return HotnColdMeter();
  	});
});


