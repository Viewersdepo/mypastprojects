var likesCats =confirm("Do you like cats?");
if (likesCats){
	console.log("You are a cool cat!");
}
else {
	console.log("Yeah, that's fine. You're still cool!");
}


alert("Javascript is awesome!");

var words=[
"javascript", "monkey", "amazing", "pancake", "feeble"]

var answerArray =[];
for (var i = 0; i < word.length; i++) {
	answerArray[i]="_";
}

var remainingLetters= word.length;
alert(answerArray.join(""));

//Player guess
var guess=prompt("Guess a letter, or click Cancel to stop playing.");
if (guess===null) {
	break;
}
else if(guess.length !==1){
	alert("Please enter a single letter.");
}
/*else{
for (var j = 0; j < word.length; j++) {
	if (word[j] ===guess){
		answerArray[j]=guess;
		remainingLetters--;
	}
}
}*/

alert(answerArray.join(""));
alert("Good job! The answer was" +word);