// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  //ask user password lenth
  var chooseLength = window.prompt("How many characters would you like your password to contain?");
  //if password length too short
  if (chooseLength < 8) {
    window.alert("Password must contain at least 8 characters.");
    return;
  }
  //if password lenth too long
  else if (chooseLength > 128) {
    window.alert("Password connot contain more than 128 characters.");
    return;
  }
  //if password length ok
  else {
    window.alert("Your password will contain " + chooseLength + " characters.");
  }


  //ask user to confirm special characters
  var chooseSpecial = window.prompt("Would you like your password to contain special characters? Y or N");
  //if user pressed cancel
  if (!chooseSpecial) {
    window.alert("You need to select Y or N. Please start again");
    writePassword();
  }
  //if user types N
  else if (
    (chooseSpecial === "no") ||
    (chooseSpecial === "NO") ||
    (chooseSpecial === "n") ||
    (chooseSpecial === "N")
  ) {
    window.alert("Your password will not contain special characters.");
    chooseSpecial = false;
  }
  //if user types yes
  else {
    window.alert("Your password will contain special characters.");
    chooseSpecial = true;
  }


  //ask user to confirm numeric characters
  var chooseNumeric = window.prompt("Would you like your password to contain numeric characters?");
  //if user pressed cancel
  if (!chooseNumeric) {
    window.alert("You need to select Y or N. Please start again");
    writePassword();
  }
  //if user types no or N
  else if (
    (chooseNumeric === "no") ||
    (chooseNumeric === "NO") ||
    (chooseNumeric === "n") ||
    (chooseNumeric === "N")
  ) {
    window.alert("Your password will not contain numeric characters.");
    chooseNumeric = false;
  }
  //if user types yes
  else {
    window.alert("Your password will contain numeric characters.");
    chooseNumeric = true;
  }

  //ask user to confirm lowercase characters
  var chooseLower = window.prompt("Would you like your password to contain lowercase characters?");
  //if user pressed cancel
  if (!chooseLower) {
    window.alert("You need to select Y or N. Please start again");
    writePassword();
  }
  //if user types no or N
  else if (
    (chooseLower === "no") ||
    (chooseLower === "NO") ||
    (chooseLower === "n") ||
    (chooseLower === "N")
   ) {
    window.alert("Your password will not contain lowercase characters.");
    chooseLower = false;
  }
  //if user types yes
  else {
    window.alert("Your password will contain lowercase characters.");
    chooseLower = true;
  }
  
  //ask user to confirm uppercase characters
  var chooseUpper = window.prompt("Would you like your password to contain uppercase characters?");
  //if user pressed cancel
  if (!chooseUpper) {
    window.alert("You need to select Y or N. Please start again");
    writePassword();
  }
  //if user types no or N
  else if (
    (chooseUpper === "no") ||
    (chooseUpper === "NO") ||
    (chooseUpper === "n") ||
    (chooseUpper === "N")
) {
    window.alert("Your password will not contain uppercase characters.");
    chooseUpper = false;
}
  //if user types yes 
  else {
  window.alert("Your password will contain uppercase characters.");
  chooseUpper = true;
}

 //if user types no for all character types
 if (
  (chooseSpecial === false) &&
  (chooseNumeric === false) &&
  (chooseLower === false) &&
  (chooseUpper === false)
) {
  window.alert("Your password must contain at least 1 character type. Please try again.");
  writePassword();
}  
//define character arrays 
var spChar = ["~", "?", "@", "#", "$", "%", "&", "*", "(", ")", "+", "!"];
var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//construct a function to determine character set for password generation
var charSet1 = [];
if (chooseSpecial === true) {
  charSet1 = spChar;
  }
else if (chooseSpecial === false) {
  charSet1 = []
  }
var charSet2 = [];
if (chooseNumeric === true) {
  charSet2 = numChar;
 }
 else if (chooseNumeric === false) {
  charSet2 = []
  }
  var charSet3 = [];
  if (chooseLower === true) {
    charSet3 = lowChar;
    }
  else if (chooseLower === false) {
    charSet3 = []
    }
  var charSet4 = [];
    if (chooseUpper === true) {
      charSet4 = uppChar;
      }
    else if (chooseUpper === false) {
      charSet4 = []
      }

//function to generate selected number of random characters from the chosen character set
  function generatePassword() {
    var result = "";
    var pwLength = chooseLength;
    var characterSet = [];
    characterSet = charSet1.concat(charSet2, charSet3, charSet4);
    for (var i = 0; i < pwLength; i++)
      result += characterSet[(Math.floor(Math.random() * characterSet.length))];
    return result;
}
//places generated password into web form
var password = generatePassword();  
var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
