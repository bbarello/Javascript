var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
var password = " ";
var characterLength = " ";
var characterType = " ";
var specialCharacter ="@!$%&*";
i = 0;

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){

  characterLength = prompt("Please enter password length between 8 and 128 characters!");
  characterType = prompt("Please choose lowercase, uppercase, numeric, and/or special characters!");
  
  for (i = 1; i <= 8; i++){
    var char = Math.floor(Math.random()
            * str.length + 1);
     
        password += str.charAt(char)

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

