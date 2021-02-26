function conditionalSum(array, condition) {
  return array.reduce(
      condition === 'even' 
          ? (accumulator, currentValue) => accumulator + (!(currentValue % 2) && currentValue)
          : (accumulator, currentValue) => accumulator + (currentValue % 2 && currentValue),
      0
 );
}
/* 
The purpose of accumulator, as the name suggests, 
accumulates the numbers of the array as we 
go through each single value in the array which are called currentValue.

(!(currentValue % 2) evaluates to true if modulus renders the currentValue to 0, 
which would otherwise evaluate to false. Therefore currentValue % 2 is used to pass 
the 'odd' numbers as it evaluates to true if there is a remainder.
in the case were the above is evaluated to true, then the currentValue following the && is accumulated.

*/
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));     
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));       
console.log(conditionalSum([13, 88, 12, 44, 99], "even")); 
console.log(conditionalSum([], "odd"));                   

/*
6
9
144
0
*/