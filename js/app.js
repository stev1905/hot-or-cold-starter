$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
  		
  	//function newgame(){
  	//	var randomnumber= Math.floor(Math.random() * 100 + 1);
  	//	return randomnumber;

  	//}
   var values = [];
  	$('#guessButton').on('click',function(i){
  			//alert('This feature works');
  			 values.push($('#userGuess').val()); // add value to array
  			 var list= values.pop();
             $('#guessList').append('<li> ' + list+ '</li>');
             $('#userGuess').val('');
             var value = parseInt($("#count").text(), 10) + 1;
    		 $("#count").text(value);    

  	});

  		//$('.new').click(function(){
  		//alert(newgame());
  	//});
  	
});


