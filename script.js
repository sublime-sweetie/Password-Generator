var upperCaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z' ];
var specialChar =["!","#",	"$",	"%",	"&",	"'",	"(",	")",	"*",	"+",	",",	"‑",	".",	"/", ":",	"<",	"=",	">",	"?", "@"];
var numericValues = ["1", "2","3","4", "5", "6", "7", "8", "9", "0"];



function generatePasswordOptions(){
  
  var passwordLength = parseInt(
    prompt('How long should your password be? Between 8 and 132')
  );
  if (passwordLength>=8 && passwordLength<= 132){
    return passwordLength;
  }
// MAke a conditional that handles user input if they respond with something other than a number
if (passwordLength != Number){
alert("Must be a number")
return null;
}
//MAke a conditional for users who input less than 8 
if (passwordLength < 8) {
  alert('Password length must be at least 8 characters');
  return null;
//MAke a contional for users who input greater than 132
}if (passwordLength > 132) {
  alert('Password length must be less than 132 characters');
  return null;
}


  var includeUpper = confirm("Would you like to include uppercase letters?");
  var includeLower = confirm ("Would you like to include lowercase letters?");
  var includeNumber = confirm ("Would you like to include numeric characters?");
  var includeSpecialChar = confirm("Would you like to include special characters?");
  
//MAke a conditional statement that handles when users hit cancel on all confirms
if (includeUpper, includeLower,  includeSpecialChar, includeNumber === false){
alert('Password must include at least 2 types of characters');
  return null;
  
}

  var confirmedOptions = {
  passwordLength: passwordLength, 
  includeUpper: includeUpper,
  includeLower : includeLower,
  includeSpecialChar: includeSpecialChar,
  includeNumber: includeNumber,
  }
  return confirmedOptions
  
};

function generatePassword(){

var options= generatePasswordOptions()
  var possiblePassChars= [options];

  function selectRandChars(array){
    var randomNumber = Math.floor(math.random() * array.length);
   return array[randomNumber];
  }

  var password = [];

  var remainingChars = options.length - passwordLength;
  for(var i = 0; i < remainingChars; i++){
    selectRandChars(possiblePassChars);

    var randChar= selectRandChars(possiblePassChars);
    password.push(randChar);


    if(options.includeUpper){
     possiblePassChars = possiblePassChars.concat(includeUpper);
     password.push(selectRandChars(includeUpper));
    }
        
    if(options.includeLower){
      possiblePassChars = possiblePassChars.concat(includeLower);
      password.push(selectRandChars(includeLower));
      }
    
   if(options.includeSpecialChar){
      possiblePassChars = possiblePassChars.concat(includeSpecialChar);
      password.push(selectRandChars(includeSpecialChar));
      }
   
    if(options.includeNumber){
     possiblePassChars = possiblePassChars.concat(includeNumber);
     password.push(selectRandChars(includeNumber));
    }
   
  }
 return password
};

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








