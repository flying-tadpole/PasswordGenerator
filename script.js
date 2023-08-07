// Assignment Code
var generateBtn = document.querySelector("#generate");

// sets of characters that can be used in password creation
var lowerOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperOptions = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var specialOptions = ['!', '@', '#', '$', '%', '^', '&', '*', '?', '~']

// function that asks for and creates password
function generatePassword() {
  // user prompts for length and characters
  // accepts either uppercase or lowercase answers
  var pickLength = window.prompt("Enter number between 8 and 128.")
  var includeLower = window.prompt("Include lowercase character? Y/N")
  var includeUpper = window.prompt("Include uppercase character? Y/N")
  var includeNumber = window.prompt("Include number? Y/N")
  var includeSpecial = window.prompt("Include special character? Y/N")

  // creates pool of characters to pick from 
  // includes console logs for troubleshooting
  // each array is appended as needed if picked by user
  var choicesPool = []

  if (includeLower == 'Y' || 'y') {
    choicesPool.push(...lowerOptions)
  }
  if (includeUpper == 'Y' || 'y') {
    choicesPool.push(...upperOptions)
  }
  if (includeNumber == 'Y' || 'y') {
    choicesPool.push(...numOptions)
  }
  if (includeSpecial == 'Y' || 'y') {
    choicesPool.push(...specialOptions)
  }
  console.log(choicesPool)

  // sets variable for password prior to random generation
  var createdPassword = ""

  // loop that picks random number from total length of choices array, looks up number at index, and adds index item to password being created
  for (let i = 0; i < pickLength; i++) {
    numPick = Math.floor(Math.random() * choicesPool.length);
    console.log(`this is numPick  ${numPick}`)
    indexFind = choicesPool.at(numPick)
    console.log(`this is indexFind ${indexFind}`)
    createdPassword += indexFind
    console.log(`this is createdPassword so far ${createdPassword}`)
  }

  // returns created password as output for page to use
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
