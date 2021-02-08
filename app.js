/*
 * Title: Number converter
 * Description: binary to decimal, octal to hexadecimal and many more...
 * Author: Samin Yasar
 * Date: 04/February/2021
 * Variable name type: variableName
 */

// select all necessary elements

const formEl = document.getElementById("formEl");
const inputNumberEl = document.getElementById("inputNumber");
const fromBaseEl = document.getElementById("fromBase");
const toBaseEl = document.getElementById("toBase");
const btnConvertEl = document.getElementById("btnConvert");
const btnResetEl = document.getElementById("btnReset");
const btnCopyEl = document.getElementById("btnCopy");
const outputNumberEl = document.getElementById("outputNumber");

const operation = {
  // store the select options value as full form
  binary: "2",
  octal: "8",
  decimal: "10",
  hexadecimal: "16",
};

// define all functionality

btnConvertEl.addEventListener("click", convertNumber);

btnResetEl.addEventListener("click", resetNumber);

btnCopyEl.addEventListener("click", copyNumber);

function baseCombineName(x, y) {
  let from = x;
  let to = y;
  let operationName = `${from}to${to}`; // decimaltobinary
  return operationName;
}

function decimalToBinary(n) {
  // function to convert decimal number to binary
  let decimalNumber = n;
  let binaryNumber = parseFloat(decimalNumber.toString(2));
  return binaryNumber;
}

function binaryToDecimal(n) {
  // function to convert binary number to decimal
  let binaryNumber = n;
  let decimalNumber = parseInt(binaryNumber, 2);
  return decimalNumber;
}

function decimalToOctal(n) {
  // function to convert decimal to octal
  let decimalNumber = n;
  let octalNumber = parseFloat(decimalNumber.toString(8));
  return octalNumber;
}

function octalToDecimal(n) {
  // function to convert octal to decimal
  let octalNumber = n;
  let decimalNumber = parseInt(octalNumber, 8);
  return decimalNumber;
}

function binaryToOctal(n) {
  // function to convert binary to octal
  let binaryNumber = n;
  let decimalNumber = parseInt(binaryNumber, 2);
  let octalNumber = parseFloat(decimalNumber.toString(8));
  return octalNumber;
}

function octalToBinary(n) {
  // function to convert octal to binary
  let octalNumber = n;
  let decimalNumber = parseInt(octalNumber, 8);
  let binaryNumber = parseFloat(decimalNumber.toString(2));
  return binaryNumber;
}

function decimalToHexadecimal(n) {
  // function to convert decimal to hexadecimal
  let decimalNumber = n;
  let hexadecimalNumber = parseFloat(decimalNumber.toString(16));
  return hexadecimalNumber;
}

function hexadecimalToDecimal(n) {
  // function to convert hexadecimal to decimal
  let hexadecimalNumber = n;
  let decimalNumber = parseInt(hexadecimalNumber, 16);
  return decimalNumber;
}

function convertNumber() {
  // function to convert the inputed number as from base to to base
  let inputValue = parseFloat(inputNumberEl.value);
  let fromBase = fromBaseEl.value;
  let toBase = toBaseEl.value;
  if (operation[fromBase] === undefined || operation[toBase] === undefined) {
    alert("Please select base to continue.");
  } else {
    let operationName = baseCombineName(fromBase, toBase); // decimaltobinary
    let result = 0; // final result
    switch (operationName) {
      case "decimaltobinary":
        result = decimalToBinary(inputValue);
        break;
      case "binarytodecimal":
        result = binaryToDecimal(inputValue);
        break;
      case "decimaltooctal":
        result = decimalToOctal(inputValue);
        break;
      case "octaltodecimal":
        result = octalToDecimal(inputValue);
        break;
      case "binarytooctal":
        result = binaryToOctal(inputValue);
        break;
      case "octaltobinary":
        result = octalToBinary(inputValue);
        break;
      case "decimaltohexadecimal":
        result = decimalToHexadecimal(inputValue);
        break;
      case "hexadecimaltodecimal":
        result = hexadecimalToDecimal(inputValue);
        break;
      default:
        alert("Sorry this request is not valid.");
        resetNumber();
        return;
    }
    outputNumberEl.value = result;
  }
}

function resetNumber() {
  // reset all by clicking reset button
  inputNumberEl.value = "";
  outputNumberEl.value = "";
  fromBaseEl.value = "";
  toBaseEl.value = "";
}

function copyNumber() {
  // copy the result on user clipboard
  outputNumberEl.select();
  document.execCommand("copy");
  outputNumberEl.value = "";
  alert("Number copied on your clipboard!");
}

/*
--------------------------------
End
Thank You :)
--------------------------------
*/
