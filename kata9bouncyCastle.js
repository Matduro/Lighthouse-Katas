// Use the value below whenever you need the value of Pi
const PI = 3.14159 ;

const sphereVolume = function (radius) {
  let rCubed = radius * radius * radius;
  return sphereVol = (4/3) * PI * (rCubed);
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  let rSquared = radius * radius;
  return coneVol = (1/3) * PI * rSquared * height;
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  return prismVol = height * width * depth;
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let totalVol = 0;
  for (const solid of solids) {
    if (solid.type === 'sphere') {
      totalVol += sphereVolume(solid.radius);;
    } else if (solid.type === 'cone') {
      totalVol += coneVolume(solid.radius, solid.height);
    }
  }
  return totalVol;
}
/*
my riginal solution:

const totalVolume = function (solids) {
  let totalVol = 0;
  for (let x = 0; x < solids.length; x++) {
    if (solids[x].type === 'sphere') {
      totalVol += sphereVolume(solids[x].radius);;
    } else if (solids[x].type === 'cone') {
      totalVol += coneVolume(solids[x].radius, solids[x].height);
    }
  }
  return totalVol;
}
*/

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
