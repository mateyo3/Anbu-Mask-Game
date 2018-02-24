var winCount = 0;
	lossCount = 0;
	playerTotal = 0;
	hostNumber = 0;
	maskOneValue = null;
	maskTwoValue = null;
	maskThreeValue =null;
	maskFourValue = null;
	host = "Mateo";

//host name array
var hostArray = ["Minato", "Kakashi", "Naruto", "Sasuke", "Sakura"];

//results image
// $("assets/images/naruto2.png").hide();
// $("assets/images/naruto2.png").show();


$(document).ready(function() {

	//Load game
	loadGame();


	function loadGame(){
		//computer randomly picks host
		var host = hostArray[Math.floor(Math.random() * hostArray.length)];
			console.log("The host is " + host);
			//display host name in HTML .hostName
			$("#host-name").html(host);
			
		// document.querySelector(".hostName").innerHTML = host;
		// set host name === host image
		// if host name is Minato, then image is minato.png
		if (host === hostArray[0]) {
			$(".hostImage").attr("src", "assets/images/minato.png")
			//diplay host image in HTML .hostImage
			$(".host-name").text(hostArray[0]);
		}
		//if host name is Kakashi, then image is kakashi1.png
		if (host === hostArray[1]) {
			$(".hostImage").attr("src", "assets/images/kakashi1.png")
			//diplay host image in HTML .hostImage
			$(".host-name").text(hostArray[1]);
		}
		//if host name is Naruto, then image is naruto1.png
		if (host === hostArray[2]) {
			$(".hostImage").attr("src", "assets/images/naruto1.png")
			//diplay host image in HTML .hostImage
			$(".host-name").text(hostArray[2]);
		}
		//if host name is Sasuke, then image is sasuke1.png
		if (host === hostArray[3]) {
		$(".hostImage").attr("src", "assets/images/sasuke1.png")
		//diplay host image in HTML .hostImage
		$(".host-name").text(hostArray[3]);
		}
		//if host name is Sakura, then image is sakura1.png
		if (host === hostArray[4]) {
		$(".hostImage").attr("src", "assets/images/sakura1.png")
		//diplay host image in HTML .hostImage
		$(".host-name").text(hostArray[4]);
		}


		//randomly generate hostNumber between 50-125
		var hostNumber = Math.floor(Math.random() *125) + 50;
		//display hostNumber in HTML.hostNumber
		$(".hostNumber").text(hostNumber);
			console.log(host + "'s Target Number: " + hostNumber);


		//randomly assign value to masks, 2 through 12
		maskOneValue = Math.floor(Math.random() *12) + 2;
			console.log("maskOne value: " + maskOneValue);

		maskTwoValue = Math.floor(Math.random() *12) + 2;
			console.log("maskTwo value: " + maskTwoValue);

		maskThreeValue = Math.floor(Math.random() *12) + 2;
			console.log("maskThree value: " + maskThreeValue);

		maskFourValue = Math.floor(Math.random() *12) + 2;
			console.log("maskFour value: " + maskFourValue);



		//onclick function to mask1
		$("#mask1").on("click", function() {
	  		console.log("*****\n maskOne clicked\n*****");
			
			//onclick adds value to yourNumber
			maskOneValue = parseInt(maskOneValue);
	    		console.log(maskOneValue + " added to player's total");
	    	playerTotal += maskOneValue;
	    		console.log("new player total: " + playerTotal);
	    	$(".userTotal").text(playerTotal);

			//if yourNumber > hostNumber, then lossCount ++
	    	if (playerTotal > hostNumber) {   		
	    		lossCount++;
	    			alert("You lose!");
	    			console.log("You lose!");
	    			playerTotal = 0;
	    			$(".userTotal").text(playerTotal);
	    			
	    		$(".lossCount").text(lossCount);
	    			console.log("Losses: " + lossCount);
	    	
	    		//shuffle host
	    		loadGame();
	    		
	    	}

			//if yourNumber === hostNumber, then winCount ++
			else if (playerTotal === hostNumber){
	    		console.log("You Win!")
	    	winCount++;
	    		alert("You win!");
	    		console.log("Wins: " + winCount);
	    		playerTotal = 0;

	    	$(".winCount").text(winCount);

	    	//reset game
	    	loadGame();

	    	}
		});


		//onclick function to mask2
		$("#mask2").on("click", function() {
	  		console.log("*****\n maskTwo clicked\n*****");
			
			//onclick adds value to yourNumber
			maskTwoValue = parseInt(maskTwoValue);
	    		console.log(maskTwoValue + " added to player's total");
	    	playerTotal += maskTwoValue;
	    		console.log("new player total: " + playerTotal);
	    	$(".userTotal").text(playerTotal);

			//if yourNumber > hostNumber, then lossCount ++
	    	if (playerTotal > hostNumber) {   		
	    		lossCount++;
	    			alert("You lose!");
	    			console.log("You lose!");
	    			playerTotal = 0;
	    			$(".userTotal").text(playerTotal);
	    			
	    		$(".lossCount").text(lossCount);
	    			console.log("Losses: " + lossCount);
	    	
	    		//shuffle host
	    		loadGame();
	    		
	    	}

			//if yourNumber === hostNumber, then winCount ++
			else if (playerTotal === hostNumber){
	    		console.log("You Win!")
	    	winCount++;
	    		alert("You win!");
	    		console.log("Wins: " + winCount);
	    		playerTotal = 0;

	    	$(".winCount").text(winCount);

	    	//reset game
	    	loadGame();

	    	}
		});



		//onclick function to mask3
		$("#mask3").on("click", function() {
	  		console.log("*****\n maskThree clicked\n*****");
			
			//onclick adds value to yourNumber
			maskThreeValue = parseInt(maskThreeValue);
	    		console.log(maskThreeValue + " added to player's total");
	    	playerTotal += maskThreeValue;
	    		console.log("new player total: " + playerTotal);
	    	$(".userTotal").text(playerTotal);

			//if yourNumber > hostNumber, then lossCount ++
	    	if (playerTotal > hostNumber) {   		
	    		lossCount++;
	    			alert("You lose!");
	    			console.log("You lose!");
	    			playerTotal = 0;
	    			$(".userTotal").text(playerTotal);
	    			
	    		$(".lossCount").text(lossCount);
	    			console.log("Losses: " + lossCount);
	    	
	    		//shuffle host
	    		loadGame();
	    		
	    	}

			//if yourNumber === hostNumber, then winCount ++
			else if (playerTotal === hostNumber){
	    		console.log("You Win!")
	    	winCount++;
	    		alert("You win!");
	    		console.log("Wins: " + winCount);
	    		playerTotal = 0;

	    	$(".winCount").text(winCount);

	    	//reset game
	    	loadGame();

	    	}
		});


		//onclick function to mask4
		$("#mask4").on("click", function() {
	  		console.log("*****\n maskFour clicked\n*****");
			
			//onclick adds value to yourNumber
			maskFourValue = parseInt(maskFourValue);
	    		console.log(maskFourValue + " added to player's total");
	    	playerTotal += maskFourValue;
	    		console.log("new player total: " + playerTotal);
	    	$(".userTotal").text(playerTotal);

			//if yourNumber > hostNumber, then lossCount ++
	    	if (playerTotal > hostNumber) {   		
	    		lossCount++;
	    			alert("You lose!");
	    			console.log("You lose!");
	    			playerTotal = 0;
	    			$(".userTotal").text(playerTotal);
	    			
	    		$(".lossCount").text(lossCount);
	    			console.log("Losses: " + lossCount);
	    	
	    		//shuffle host
	    		loadGame();
	    		
	    	}

			//if yourNumber === hostNumber, then winCount ++
			else if (playerTotal === hostNumber){
	    		console.log("You Win!")
	    	winCount++;
	    		alert("You win!");
	    		console.log("Wins: " + winCount);
	    		playerTotal = 0;

	    	$(".winCount").text(winCount);

	    	//reset game
	    	loadGame();

	    	}
		});
	}


});
