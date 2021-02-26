const urlEncode = function(text) {
  let newString = text.trim();
  let finalString = "";
    for (let i in newString) {
      if (newString[i] == " ") {
            finalString += "%20";
      } else {
        finalString += newString[i];
      }
     }
    return finalString;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

/* 
Use some sort of looping. Do Not use String.prototype.replace 
==> const newStr = str.replace(regexp|substr, newSubstr|function)
*/

// node Kata5%enconding.js