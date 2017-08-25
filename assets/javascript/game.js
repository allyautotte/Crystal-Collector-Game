

var crys1 = Math.floor(Math.random() * (12 - 1) + 1);
var crys2 = Math.floor(Math.random() * (12 - 1) + 1);
var crys3 = Math.floor(Math.random() * (12 - 1) + 1);
var crys4 = Math.floor(Math.random() * (12 - 1) + 1);


var win = 0;
var loss = 0;
var finalScore;
				

//Functions

	function reset()
	{
		//reset
		 randNum = Math.floor(Math.random() * (120 - 19) + 19);
		 console.log('randomNumber =  ' + randNum);
		 crys1 = Math.floor(Math.random() * (12 - 1) + 1);
		 crys2 = Math.floor(Math.random() * (12 - 1) + 1);
		 crys3 = Math.floor(Math.random() * (12 - 1) + 1);
		 crys4 = Math.floor(Math.random() * (12 - 1) + 1)
		 finalScore = 0;

		 //HTML
		 $('.ranNumBox').html(randNum);
		 $('.scoreDisplayChild').html(finalScore);
		 start();
	}

	function start()
	{
		 //reset
		 randNum = Math.floor(Math.random() * (120 - 19) + 19);
		 console.log('randomNumber =  ' + randNum);
		 crys1 = Math.floor(Math.random() * (12 - 1) + 1);
		 crys2 = Math.floor(Math.random() * (12 - 1) + 1);
		 crys3 = Math.floor(Math.random() * (12 - 1) + 1);
		 crys4 = Math.floor(Math.random() * (12 - 1) + 1)
		 finalScore = 0;

		 //HTML
		 $('.ranNumBox').html(randNum);
		 $('.scoreDisplayChild').html(finalScore);



		$('.crystal1').attr("value", crys1);
		var test = $('.crystal1').attr("value");
	

		$('.crystal2').attr("value", crys2);
		var test = $('.crystal2').attr("value");
	

		$('.crystal3').attr("value", crys3);
		var test = $('.crystal3').attr("value");
		

		$('.crystal4').attr("value", crys4);
		var test = $('.crystal4').attr("value");
	
		//Click saves to final score
		$('.box').off().on('click', function()
		{
			var test1 = $(this).attr('value');
			//Click adds to final score 
			finalScore = parseInt(finalScore) + parseInt(test1);
			console.log('finalScore***  ' + finalScore);
			$('.scoreDisplayChild').html(finalScore);

			if(randNum === finalScore)
			{
				alert('You win!');
				win++;
				$('.win').html(win);
				$('.scoreDisplayChild').html(0);
				reset();
				
			}
			else if (finalScore > randNum)
			{
				alert('You collected TOO many crystals! Try again?');
				loss++;
				$('.loss').html(loss);
				$('.scoreDisplayChild').html(0);
				reset();
			}

		}); 


}


start();