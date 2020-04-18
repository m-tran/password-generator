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
  var charType = prompt("Enter at least one of the following character types: lowercase, uppercase, numeric, special.");
  if (charType === "") {
  prompt("Looks empty! Enter at least one of the following character types: lowercase, uppercase, numeric, special.");
  } else {
  alert("Gotcha. Your password will include the following character types: " + charType + ".");
  }

  // character types
  var lower = "abcdefghijklmnopqrstuvwxyz"; 
  var lowerCase = lower.split("");
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXY";
  var upperCase = upper.split("");
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var charCase = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  var charSet = [];
  
  var arrType = charType.split(",");
  
  for (let i=0; i < arrType.length; i++) {
    if (arrType[i] === "lowercase") {
      charSet.push(lowerCase);
    } else if (arrType[i] === "uppercase") {
      charSet.push(upperCase);
    } else if (arrType[i] === "numeric") {
      charSet.push(numbers);
    } else {
      charSet.push(charCase);
    }
  }

  function passwordMix(num, arr) {
    var possibilityIndex = 0;
    password = "";
    var targetArray = [];

    for (let i=0; i < num; i++) {
      targetArray = arr[possibilityIndex];
      possibilityIndex++; 

      password += targetArray[Math.floor(Math.random() * targetArray.length)];

      if (possibilityIndex === arr.length) {
        possibilityIndex = 0;
      }
    }

    var passwordArray = password.split("");
    var arrayLength = passwordArray.length;
    var scrambledPassword = "";
    var rand = 0;

    for (let i=0; i<arrayLength; i++) {
      rand = Math.floor(Math.random() * arrayLength);
      scrambledPassword += passwordArray.splice(rand, 1);
    }

    return scrambledPassword;

  }

  password = passwordMix(passwordLength, charSet);

  return password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
