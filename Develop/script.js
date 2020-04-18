// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  //prompts
  var passwordLength = prompt("How many characters will you password be? Enter a number between 8 and 128.");
  if (passwordLength < 8 || passwordLength > 128) {
    prompt("We don't see that number here. Please enter a number between 8 and 128.");
  } else {
    alert("We got it! Your password will be " + passwordLength + " characters.");
  }
  var characterTypes = prompt("Enter at least one of the following character types: lowercase, uppercase, numeric, and/or special characters.");
  if (characterTypes === "") {
  prompt("Looks empty! Enter at least one of the following character types: lowercase, uppercase, numeric, and/or special characters.");
  } else {
  alert("Gotcha. Your password will include the following character types: " + characterTypes + ".");
  }

  // character types
  var lowercase

  function passwordMix() {

  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
