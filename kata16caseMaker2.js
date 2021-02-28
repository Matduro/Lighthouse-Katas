
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

function theCase(words, caseA) {
  console.log(words + " : " + caseA);
  /*
  switch (caseA) {
    case "camel":
    toCamelCase(words)
    break;
  }
  */
}

const makeCase = function(input, caseA) {
  let words = toWords(input);
  return toCamelCase(words);
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));

/*
Expected Output
thisIsAString
ThisIsAString
this_is_a_string
this-is-a-string
This Is A String
thIs Is A strIng
THiS iS a STRiNG
THIS_IS_A_STRING
*/