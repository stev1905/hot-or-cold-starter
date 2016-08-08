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
    var randomnumber= Math.floor(Math.random() * 100 + 1);

  	function SaveGuess(){
  			//alert('This feature works');
  			 values.push($('#userGuess').val()); // add value to array
  			 var list= values.pop();
             $('#guessList').append('<li> ' + list+ '</li>');
             $('#userGuess').val('');
             var value = parseInt($("#count").text(), 10) + 1;
    		 $("#count").text(value); 
}  
 	function NewGame(){
  		$("#count").text('0');
  		$('#guessList').children().detach();
  		var randomnumber= Math.floor(Math.random() * 100 + 1);
  		return randomnumber;
	}
	function HotnColdMeter(){
		userGuess = parseInt($('#userGuess').val());
		var a= userGuess+5;
		var b= userGuess-5;
		if ((userGuess<=a)&&(userGuess>=b)){
			alert('you are close');
		}
		else{
			alert('not close');
		}
	}
	$('.new').click(function(){
  		//alert('this button works too!!');
  		return NewGame();
  	});

    $('#guessButton').on('click',function(){
    	alert(randomnumber);
    	//return SaveGuess();
    	return HotnColdMeter();

  	});
});


