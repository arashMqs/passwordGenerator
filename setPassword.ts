// interface
import { setPasswordInputs } from "./interfaces/interfaces";

const uppercase = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
];
const lowercase = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ["!", "@", "#", "$", "%", "^", "*", "&", "_", "-"];

// main funtion
export default function PasswordGenerator(
  PasswordConfig: setPasswordInputs
) {
  // generators
  function characterGenerator() {
    // check if lowercase and uppercase selected
    if (PasswordConfig.lowercase && PasswordConfig.uppercase) {
      if (Math.random() > 0.5) {
        return uppercase[Math.floor(Math.random() * 26)];
      } else {
        return lowercase[Math.floor(Math.random() * 26)];
      }
    } else if (PasswordConfig.lowercase) {
      return lowercase[Math.floor(Math.random() * 26)];
    } else if (PasswordConfig.uppercase) {
      return uppercase[Math.floor(Math.random() * 26)];
    }
  }
  function numberGenerator() {
    return numbers[Math.floor(Math.random() * 10)];
  }
  function symbolGenerator() {
    return symbols[Math.floor(Math.random() * 10)];
  }

  // body function
  let password = "";
  for (let i = 1; i <= PasswordConfig.passwordlength; i++) {
      let generatedChar;
      const randomer = Math.random();
    if (PasswordConfig.numeral && PasswordConfig.symbols) {
      if (
        (PasswordConfig.lowercase && PasswordConfig.uppercase) ||
        PasswordConfig.lowercase ||
        PasswordConfig.uppercase
      ) {
        if (randomer < 0.33) {
          generatedChar = numberGenerator();
        } else if (randomer < 0.66) {
          generatedChar = symbolGenerator();
        } else {
          generatedChar = characterGenerator();
        }
      } else {
        if (randomer < 0.5) {
          generatedChar = symbolGenerator();
        } else {
          generatedChar = numberGenerator();
        }
      }
    } else if (PasswordConfig.numeral) {
      // check if lowercase and upper case selected then we have 3 options.
      // so we should devide the random number to 0.33
      if (PasswordConfig.lowercase && PasswordConfig.uppercase) {
        if (randomer < 0.33) {
          generatedChar = numberGenerator();
        } else {
          generatedChar = characterGenerator();
        }
      } else if (PasswordConfig.lowercase || PasswordConfig.uppercase) {
        if (randomer < 0.5) {
          generatedChar = numberGenerator();
        } else {
          generatedChar = characterGenerator();
        }
      } else {
        generatedChar = numberGenerator();
      }
    } else if (PasswordConfig.symbols) {
      // check if lowercase and upper case selected then we have 3 options.
      // so we should devide the random number to 0.33
      if (PasswordConfig.lowercase && PasswordConfig.uppercase) {
        if (randomer < 0.33) {
          generatedChar = symbolGenerator();
        } else {
          generatedChar = characterGenerator();
        }
      } else if (PasswordConfig.lowercase || PasswordConfig.uppercase) {
        if (randomer < 0.5) {
          generatedChar = symbolGenerator();
        }
        else {
          generatedChar = characterGenerator();
        }
      } else {
        generatedChar = symbolGenerator();
      }
    } else {
      generatedChar = characterGenerator();
    }
    password += generatedChar;
  }
  return password;
}