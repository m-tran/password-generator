// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = prompt("How many characters will you password be? Enter a number between 8 and 128.");
  if (passwordLength < 8 || passwordLength > 128){
    prompt("The number you entered is incorrect. Please enter a number between 8 and 128.");
  } else {
    alert("Your password will be " + passwordLength + " characters.");
  }
  var characterTypes = prompt("Enter at least one character type: lowercase, uppercase, numeric, and/or special characters. If selecting more than one character type, please separate each type with a comma.");
} if (characterTypes == null) {
  prompt("Enter at least one character type: lowercase, uppercase, numeric, and/or special characters. If selecting more than one character type, please separate each type with a comma.");
} else {
  alert("Your password will include the following character types: " + characterTypes);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
