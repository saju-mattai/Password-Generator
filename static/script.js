// GET ALL THE VARIABLES WE ARE GONNA NEED
const password = document.getElementById("password");
const copy = document.getElementById("copy");
const generate = document.getElementById("generate");
const numbers = document.getElementById("numbers");
const uppercase = document.getElementById("uppercase");
const symbols = document.getElementById("symbols");
const spaces = document.getElementById("spaces");
// Listen for the click event on the `copy` and copy the password to your clipboard
copy.addEventListener("click", () => {
  let TempText = document.createElement("input");
  TempText.value = password.innerText;
  document.body.appendChild(TempText);
  TempText.select();
  document.execCommand("copy");
  document.body.removeChild(TempText);
});
// Actual Password Generator Code
// Listen for click event on `generate` button
generate.addEventListener("click", () => {
  // Creating an empty array
  let result = [];

  // list of normal characters
  let characters = "abcdefghijklmnopqrstuvwxyz";

  // If numbers is checked, Add digits to the characters
  if (numbers.checked) {
    characters += "0123456789";
  }
  // If uppercase is checked, Add uppercase letters to the characters
  if (uppercase.checked) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  // If symbols is checked, Add symbols to the characters
  if (symbols.checked) {
    characters += "$%^&)><?'\"@";
  }
  // If spaces is checked, Add space to the characters
  if (spaces.checked) {
    characters += " ";
  }
  // Get the length of `characters` string
  let charactersLength = characters.length;

  // For loop to randomly select a random character from characters and add it to the result. You can change the length, (Default: 12)
  for (let i = 0; i < 12; i++) {
    result.push(
      characters.charAt(Math.floor(Math.random() * charactersLength))
    );
  }

  // Changing the password
  password.innerText = result.join("");
});
