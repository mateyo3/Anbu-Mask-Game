var winCount = 0;
	lossCount = 0;
	playerTotal = 0;
	hostNumber = null;

//host name array
var hostArray = ["Minato", "Kakashi", "Naruto", "Sasuke", "Sakura"];

// var hostImage = [
// 	"assets/image/minato.png",
// 	"assets/image/kakashi1.png",
// 	"assets/image/naruto1.png",
// 	"assets/image/sasuke1.png",
// 	"assets/image/sakura1.png",
// ]

$(document).ready(function() {

//computer randomly picks host
	var host = hostArray[Math.floor(Math.random() * hostArray.length)];
		console.log(host)
//display host name in HTML .hostName
		$("#host-name").html(host);
		
	// document.querySelector(".hostName").innerHTML = host;
// set host name === host image
// if host name is Minato, then image is minato.png
	if (host === hostArray[0]) {
		$(".hostImage").attr("src", "assets/images/minato.png")
		//display host image in HTML .hostImage
		$(".host-name").text(hostArray[0])
	}
	//if host name is Kakashi, then image is kakashi1.png
	if (host === hostArray[1]) {
		$(".hostImage").attr("src", "assets/images/kakashi1.png")
		//diplay host image in HTML .hostImage
		$(".host-name").text(hostArray[1])
	}
	//if host name is Naruto, then image is naruto1.png
	if (host === hostArray[2]) {
		$(".hostImage").attr("src", "assets/images/naruto1.png")
		//diplay host image in HTML .hostImage
		$(".host-name").text(hostArray[2])
	}
	//if host name is Sasuke, then image is sasuke1.png
	if (host === hostArray[3]) {
	$(".hostImage").attr("src", "assets/images/sasuke1.png")
	//diplay host image in HTML .hostImage
	$(".host-name").text(hostArray[3])
	}
	//if host name is Sakura, then image is sakura1.png
	if (host === hostArray[4]) {
	$(".hostImage").attr("src", "assets/images/sakura1.png")
	//diplay host image in HTML .hostImage
	$(".host-name").text(hostArray[4])
	}



	//randomly generate hostNumber between 50-125
	var hostNumber = Math.floor(Math.random() *125) + 50;
	//display hostNumber in HTML.hostNumber
	$(".hostNumber").text(hostNumber);
		console.log(host + "'s Number: " + hostNumber);


	//randomly assign value to masks, 1 through 12
	var maskOneValue = Math.floor(Math.random() *12) + 2;
		console.log("mask1 value: " + maskOneValue);

	var maskTwoValue = Math.floor(Math.random() *12) + 2;
		console.log("mask2 value: " + maskTwoValue);

	var maskThreeValue = Math.floor(Math.random() *12) + 2;
		console.log("mask3 value: " + maskThreeValue);

	var maskFourValue = Math.floor(Math.random() *12) + 2;
		console.log("mask4 value: " + maskFourValue);

	//onclick function to mask1
	$("#mask1, #mask2, #mask3, #mask4").on("click", function() {
  		console.log("mask clicked");
		
		//convert value to integer
		maskOneValue = parseInt(maskOneValue);
    	maskTwoValue = parseInt(maskTwoValue);
    	maskThreeValue = parseInt(maskThreeValue);
    	maskFourValue = parseInt(maskFourValue);
    	
    	//onclick adds value to yourNumber
    	playerTotal += maskOneValue || maskTwoValue || maskThreeValue || maskFourValue;
    		console.log("new player total: " + playerTotal);
    	$(".userTotal").text(playerTotal);
	});

    	if (playerTotal === hostNumber){
    		console.log("You Win!")
    	winCount++;
    		console.log(winCount);
    	$(".winCount").text(winCount);
    	}

    	if (playerTotal >= hostNumber) {
    		console.log("You lose!")
    	lossCount++;
    		console.log(lossCount);
    	$(".lossCount").text(lossCount);
    	}



//if yourNumber === hostNumber, then winCount ++
// //reset game
// 	    if (playerTotal === hostNumber){
//     		console.log("You Win!")
//     	winCount++;
//     		console.log(winCount);
//     	$(".winCount").text(winCount);
//     	// reset();
//     	}

//     	else if (playerTotal >= hostNumber) {
//     		console.log("You lose!")
//     	lossCount++;
//     		console.log(lossCount);
//     	$(".lossCount").text(lossCount);
//     	// reset();
//     	}

//if yourNumber > hostNumber, then lossCount ++
//reset game


//display yourNumber total in HTML

	//reset
	// function reset() {
	// //computer randomly picks host
	// var host = hostArray[Math.floor(Math.random() * hostArray.length)];
	// 	console.log(host)
	// //display host name in HTML .hostName
	// 	$("#host-name").html(host);
	// //randomly generate hostNumber between 50-125
	// var hostNumber = Math.floor(Math.random() *125) + 50;
	// //display hostNumber in HTML.hostNumber
	// $(".hostNumber").text(hostNumber);
	// console.log(hostNumber);
	// //randomly assign value to masks, 1 through 12
	// var maskOneValue = Math.floor(Math.random() *12) + 2;
	// 	console.log("mask1 value: " + maskOneValue);

	// var maskTwoValue = Math.floor(Math.random() *12) + 2;
	// 	console.log("mask2 value: " + maskTwoValue);

	// var maskThreeValue = Math.floor(Math.random() *12) + 2;
	// 	console.log("mask3 value: " + maskThreeValue);

	// var maskFourValue = Math.floor(Math.random() *12) + 2;
	// 	console.log("mask4 value: " + maskFourValue);
	// }



});
