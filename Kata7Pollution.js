const checkAir = function (samples, threshold) {
  let pollutionLevel = 0;
  
  for (let airQuality of samples) { // use for...of for arrays and for...in objects
    if (airQuality === "dirty") pollutionLevel++;
  }

  let pollutionPercentage = (pollutionLevel/samples.length);
  // console.log(pollutionLevel);
  // console.log(pollutionPercentage);
  if (pollutionPercentage >= threshold) {
    return "polluted";
  } else {
    return "clean";
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))

/*
expected output:
Polluted
Polluted
Clean
*/