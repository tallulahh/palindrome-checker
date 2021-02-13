//Global variables
var button = document.querySelector("button");
var result = document.querySelector(".result");

//Button/Keypress "enter" Event Listeners
button.addEventListener("click", function(){
  var input = document.querySelector("input").value;
  if (input == ''){
      result.innerHTML = "Please enter a word";
    } else {
      checkForPalindrome(input);
    }
});

document.addEventListener("keydown", function(e){
  var input = document.querySelector("input").value;
  if (e.keyCode === 13) {
    if (input == ''){
      result.innerHTML = "Please enter a word";
    } else {
      checkForPalindrome(input);
    }
  }
});

function checkForPalindrome(palindrome){

  //Change all characters into lower case
  let lowerCase = palindrome.toLowerCase();
  //Replace all punctuation with empty value
  let noPunc = lowerCase.replace(/[\W_]/g,'');
  //Turn string into array
  let inputArr = noPunc.split("");
  //Create another array of reversed input array
  let reversedArr = inputArr.reverse();
  //Turn array back into string
  let reversedStr = reversedArr.join("");
  //Check if both array values match
  if ( noPunc === reversedStr){
    result.innerHTML = "This is a palindrome!";
  } else {
    result.innerHTML = "This is a not palindrome!";
  }
}
