// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperOptions = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var specialOptions = ['!', '@', '#', '$', '%', '^', '&', '*', '?', '~']


function generatePassword() {
  var pickLength = window.prompt("Enter number between 8 and 128.")
  var includeLower = window.prompt("Include lowercase character? Y/N")
  var includeUpper = window.prompt("Include uppercase character? Y/N")
  var includeNumber = window.prompt("Include number? Y/N")
  var includeSpecial = window.prompt("Include special character? Y/N")

  var choicesPool = []

  if (includeLower == 'Y') {
    choicesPool.push(...lowerOptions)
  }
  if (includeUpper == 'Y') {
    choicesPool.push(...upperOptions)
  }
  if (includeNumber == 'Y') {
    choicesPool.push(...numOptions)
  }
  if (includeSpecial == 'Y') {
    choicesPool.push(...specialOptions)
  }
  console.log(choicesPool)

  var createdPassword = ""

  for (let i = 0; i < pickLength; i++) {
    numPick = Math.floor(Math.random() * choicesPool.length);
    console.log(`this is numPick  ${numPick}`)
    indexFind = choicesPool.at(numPick)
    console.log(`this is indexFind ${indexFind}`)
    createdPassword += indexFind
    console.log(`this is createdPassword so far ${createdPassword}`)
  }

  return createdPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
