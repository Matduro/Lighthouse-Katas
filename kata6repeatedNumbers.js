const repeatNumbers = function(data) {
  let answer = [];
  for (let x = 0; x < data.length; x++) {
    let value = data[x][0];
    let repeat = data[x][1];
    let newArray = [];
    for (repeat; repeat > 0; repeat--) {
      newArray += value;
      /* if (repeat === 1 && x < data.length - 1) {
        newArray += ", ";
      } */
    }
    answer.push(" " + newArray);
  }
  return answer.toString();
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

/*
expected answers:
1111111111
11, 222
10101010, 343434343434, 9292

Alternative 1:
const repeatNumbers = function(data) {
  var string = '';
  for ( let x = 0; x < data.length; x++) {
    let value = data[x][0];
    let repeat = data[x][1];
    for(repeat; repeat > 0; repeat--){
      string += value;
      if(repeat === 1 && x < data.length - 1) {
        string += ', ';
      }
    }
    var array = [];
    array.push(string);
  }
  return array.toString();
}




console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));


expected answers:
1111111111
11, 222
10101010, 343434343434, 9292

alternative 2:
function repeatnumber(array) {
    return (Array.isArray(array[0]) ? array : [array])
        .map(([value, length]) => Array.from({ length }, _ => value).join(''))
        .join(', ');
}

console.log(repeatnumber([42, 7]));
console.log(repeatnumber([[10, 2], [11,1]]));
console.log(repeatnumber([[1, 2], [2, 3]]));
console.log(repeatnumber([[1, 4], [3, 6], [9, 2]]));
*/
