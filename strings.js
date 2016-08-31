//In your HTML, create an text input and a button.
//The text input should only accept letters. No numbers.
/*Implement the logic in the reversal function that reverses the order of the characters in the string, 
and outputs the result in the DOM, below the text input.

Implement the logic in the alphabits function that return the characters in alphabetical order, 
and outputs the result in the DOM, below the text input.

Implement the logic in the palindrome function that determine whether the string is a palindrome. 

If it is, display the text "Your string is a palidrome" in the DOM, below the text input.

When the user presses the enter key in the text input, 
or clicks the button, set the value of the testString variable (see below) to the value of the input.

The output of each of the functions should immediately appear as well.*/

var x = document.getElementById('textInput');
var y = document.getElementById('submitBtn');
var z = document.getElementById('results');


// function reverseString(str) {
//     return str;
// }
// reverseString("textInput");
var userInput = document.getElementById("userInput");
var button = document.getElementById("convert_button");
var output = document.getElementById("output");

document.getElementById("submitBtn");
var text = document.getElementById('overlayBtn');
text.onclick = function(){
this.innerHTML = (this.innerHTML === "Menu") ? "Close" : "Menu";
return false;
};
   





button.addEventListener("click",inputValidation);
userInput.addEventListener("keyup",checkEnter);

function checkEnter(event) {
  event.preventDefault();
  if (event.keyCode == 13) {
    inputValidation();
  }
};

function inputValidation() {
	var testString = userInput.value;
	if (isNaN(testString)) {
		reversal(testString);
		alphabits(testString);
	} else {
		alert("Please limit your entries to letters only.")
	}
}


// function reversal(str) {
// 	var strReversal = str.split("").reverse().join("");
// 	reversalOutput.innerHTML = strReversal;
// 	console.log(strReversal);
// 	return strReversal
// }





// function reverse(s) {
//   return s.split('').reverse().join('');
// }

//function alphabits() {

// }

// function palindrome() {

// }

// var testString = "";
// reversal(testString);
// alphabits(testString);
// palindrome(testString);