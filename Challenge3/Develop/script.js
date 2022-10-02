var upperCaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z' ];
var specialChar =["!","#",	"$",	"%",	"&",	"'",	"(",	")",	"*",	"+",	",",	"‑",	".",	"/", ":",	"<",	"=",	">",	"?", "@"];
var numericValues = ["1", "2","3","4", "5", "6", "7", "8", "9", "0"];



function generatePassword(){
  
  var passwordLength = prompt("How long should your password be? Between 8 and 132");
  var includeUpper = confirm("Would you like to include uppercase letters?");
  var includeLower = confirm ("Would you like to include lowercase letters?");
  var includeNumber = confirm ("Would you like to include numeric characters?");
  var includeSpecialChar = confirm("Would you like to include special characters?");
  
  var options = {
  passwordLength: passwordLength,
  includeUpper: includeUpper,
  includeLower : includeLower,
  includeSpecialChar: includeSpecialChar,
  includeNumber: includeNumber,
  }

  var possiblePassChars= [passLength, upperCaseLetters, lowerCaseLetters, numericValues, specialChar];
 
  function verifyLength(){
    if (passwordLength <= 8)
    prompt("choose a number between 8 and 132");
    if (passwordLength >=132)
    prompt("choose a number between 8 and 132");
    else {};

  }
  function selectRandChars(array){
    var randomNumber = Math.floor(math.random() * array.length);
   return array[randomNumber];
  }
  
  var password = [];
    if(options.includeLower){
    possiblePassChars = possiblePassChars.concat(includeLower);
    password.push(selectRandChars(includeLower));
    }

    if(options.includeUpper){
     possiblePassChars = possiblePassChars.concat(includeUpper);
     password.push(selectRandChars(includeUpper));
    }

    if(options.includeNumber){
     possiblePassChars = possiblePassChars.concat(includeNumber);
     password.push(selectRandChars(includeNumber));
    }

    if(options.includeSpecialChar){
     possiblePassChars = possiblePassChars.concat(includeSpecialChar);
     password.push(selectRandChars(includeSpecialChar));
    }
    
    if(options.passwordLength){
     possiblePassChars = possiblePassChars.concat(passwordLength);
     password.push(selectRandChars(includeNumber));
    }
 
  var remainingChars = options.length - passwordLength;
  for(var i = 0; i < remainingChars; i++){
    selectRandChars(possiblePassChars);
    var randChar= selectRandChars(possiblePassChars);
    password.push(randChar);

  }
  return password
}


// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

writePassword()








