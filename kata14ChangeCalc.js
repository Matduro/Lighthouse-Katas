
// I'm having a hard time getting this solution to work. the while section works fine, 
// but then I'm unable to remove the keys with the values === to zero.
const calculateChange = function(total, cash) {
  let currency = {"twentyDollars": 0, "tenDollars": 0, "fiveDollars": 0, "twoDollars": 0, "oneDollar": 0, 
  "quarter": 0, "dime": 0, "nickel": 0, "penny": 0};
  // let urChangeSir = {};
  let change = cash - total;
  while (change >= 2000) {
    change -= 2000;
    currency.twentyDollars++
  }
  while (change >= 1000) {
    change -= 1000;
    currency.tenDollars++
  }
  while (change >= 500) {
    change -= 500;
    currency.fiveDollars++
  }
  while (change >= 200) {
    change -= 200;
    currency.twoDollars++
  }
  while (change >= 100) {
    change -= 100;
    currency.oneDollar++
  }
  while (change >= 25) {
    change -= 25;
    currency.quarter++
  }
  while (change >= 10) {
    change -= 10;
    currency.dime++
  }
  while (change >= 5) {
    change -= 5;
    currency.nickel++
  }
  while (change >= 1) {
    change -= 1;
    currency.penny++
  }
  // for (let x = 0; x < currency.length; x++)
  
  for (let [coins, value] in currency) {
    let keys = Object.currency[0];
    console.log(coins, value);
    if (value === 0) {
      console.log(coins)
      console.log(coins + "test 2");
      delete coins && value;
    }
  };
  return currency;
};

console.log(calculateChange(1787, 4000));
console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));


/*
expected output:

{ twoDollar: 1, dime: 1, penny: 3 }
{ tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
{ twoDollar: 2, quarter: 3, dime: 2, penny: 4 }

Twenty dollars
Ten dollars
Five dollars
Two dollars
One dollar
Quarter (25¢)
Dime (10¢)
Nickel (5¢)
Penny (1¢)
*/