
// util function to convert the input to string type
function convertToString(input) {
  if(input) { 
    if(typeof input === "string") {
      return input;
  }
  return String(input);
  }
  return '';
}


// convert string to words array ex: [ 'this', 'is', 'a', 'string' ]
function toWords(input) {							
  input = convertToString(input);
  var regex = /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g;
  // console.log("this is input: " + input);
  // console.log(input.match(regex));
  return input.match(regex);
}


// convert the input array to camel case
function toCamelCase(inputArray) {
let result = "";
for(let i = 0 , len = inputArray.length; i < len; i++) {
  let currentStr = inputArray[i];
  let tempStr = currentStr.toLowerCase();
  if(i != 0) {
    // convert first letter to upper case (the word is in lowercase) 
    tempStr = tempStr.substr(0, 1).toUpperCase() + tempStr.substr(1);
  }
  result += tempStr; 
}
return result;
}


// this function call all other functions

function camelCase(input) {						
  let words = toWords(input);
  return toCamelCase(words);
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

/*
const camelCase = function(input) {
  return input.replace(/\W+(.)/g, function(match, chr)
    {
      return chr.toUpperCase();
    });
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
*/

/*node kata7camelCase.js
expected output:
thisIsAString
loopyLighthouse
supercalifragalisticexpialidocious
*/