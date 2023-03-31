const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

passLength = 10;

var firstpass = document.getElementById("firstpass");
var secondpass = document.getElementById("secondpass");
var generateButton = document.getElementById("genpassword");

function getRandomCharacter() {
    var randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generateRandomPassword() {
    var randomPassword = '';
    for (var i = 0; i < passLength; i++) {
        randomPassword += getRandomCharacter();
    }
    return randomPassword
}

generateButton.addEventListener("click", function() {
    const generatedPasswordOne = generateRandomPassword()
    firstpass.textContent = generatedPasswordOne

    const generatedPasswordTwo = generateRandomPassword()
    secondpass.textContent = generatedPasswordTwo
})