var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric ="012345789012345789012345789"
var specialCharacter ="!@#$%^&*(){}[]=<>/,";

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){

  var password = "";


   //  character length user prompt
   var characterLength = Number(prompt("Please enter password length between 8 and 128 characters!"));
   
   // while loop character length validator alert and retry
   while(characterLength <= 7 || characterLength >= 129) {
    alert("Password length must be between 8-128 characters. Please try again!");
    var characterLength = (prompt("How many characters would you like your password to contain?"));
    } 
  
  // character type user prompt
  var characterType = prompt("Please choose lowercase, uppercase, numeric, and/or special characters!");
  
  // while loop character type validator alert and retry
  while(characterType !== "uppercase" && characterType !== "lowercase" && characterType !== "numeric" && characterType !== "special characters") {
    alert("Please choose lowercase, uppercase, numeric, and/or special characters!");
    var characterType = (prompt("Please choose lowercase, uppercase, numeric, and/or special characters!"));
    } 

  // for loop to generate password based on selected criteria
  for (var i = 0; i < characterLength; i++){
    var char = Math.floor(Math.random()
            * characterType.length + 1  );
  
  // if statements for character type
      if(characterType == "lowercase"){
       password += str.charAt(char).toLowerCase()
      }
      if(characterType == "uppercase"){
        password += str.charAt(char)
      }
      if(characterType == "numeric"){
        password += numeric.charAt(char)
      }
      if(characterType == "special characters"){
        password += specialCharacter.charAt(char)
      }
  

      //  console.log(password);
}
return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  
  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

