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
  // if user selects length outside parameters, returns error message
  var pickLength = window.prompt("Enter number between 8 and 128.")
  if (pickLength > 7 && pickLength < 129) {
    var includeLower = window.prompt("Include lowercase character? Y/N")
    var includeUpper = window.prompt("Include uppercase character? Y/N")
    var includeNumber = window.prompt("Include number? Y/N")
    var includeSpecial = window.prompt("Include special character? Y/N")
  } else {
    return window.alert("You must pick a length between 8 and 128.")
  }
  
  // creates pool of characters to pick from 
  // includes console logs for troubleshooting
  // each array is appended as needed if picked by user
  var choicesPool = []

  if (includeLower === 'Y' || includeLower === 'y') {
    choicesPool.push(...lowerOptions)
  }
  if (includeUpper === 'Y' || includeUpper === 'y') {
    choicesPool.push(...upperOptions)
  }
  if (includeNumber === 'Y' || includeNumber === 'y') {
    choicesPool.push(...numOptions)
  }
  if (includeSpecial === 'Y' || includeSpecial === 'y') {
    choicesPool.push(...specialOptions)
  }
  console.log(choicesPool)

  // sets variable for password prior to random generation
  var createdPassword = ""

  // checks to make sure character sets have been selected, if no character sets selected, gives error
  // loop that picks random number from total length of choices array, looks up number at index, and adds index item to password being created
  if (choicesPool.length !== 0 && pickLength > 7) {
    for (let i = 0; i < pickLength; i++) {
      numPick = Math.floor(Math.random() * choicesPool.length);
      console.log(`this is numPick  ${numPick}`)
      indexFind = choicesPool.at(numPick)
      console.log(`this is indexFind ${indexFind}`)
      createdPassword += indexFind
      console.log(`this is createdPassword so far ${createdPassword}`)
    }
  } else {
      return window.alert("You must select at least one type of character to include.")
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
