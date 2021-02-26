const numberOfVowels = function(data) {
  const vowels = 'aeiou';
  let totalVowels = 0;
  for(let i = 0; i < data.length; i++){
    if(vowels.indexOf(data[i]) >= 0) totalVowels++;
  }
  return totalVowels;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

