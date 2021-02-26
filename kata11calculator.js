const calculateChange = function(total, cash) {
  let change = {};
  let coinTypes = ["twentyDollars", "tenDollars", "fiveDollars", "twoDollars", "oneDollar", 
  "quarter", "dime", "nickel", "penny"];
  let coinValues = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];
  let returnValue = cash - total;
  let coinAmount;
  for (x = 0; x < coinValues.length; x++) {
    coinAmount = Math.floor(returnValue/coinValues[x]);
    if (coinAmount > 0) {
    change[coinTypes[x]] = coinAmount;
    returnValue = returnValue%coinValues[x];
  }
  }
  return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

/*
{ twoDollar: 1, dime: 1, penny: 3 }
{ tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
{ twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
 */