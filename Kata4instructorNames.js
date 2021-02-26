const instructorWithLongestName = function(instructors) {
  let nameLength = instructors[0].name.length; // assigns the first instructor as default. .name to access the name
  let name = instructors[0].name;
  let course = instructors[0].course;
  for(let i = 1; i < instructors.length; i++) { // start i at 1 because 0 is assigned above
    if(instructors[i].name.length > nameLength) {
      nameLength = instructors[i].name.length;
      name = instructors[i].name;
      course = instructors[i].course;
    }
  }
  return { 'name': name, 'course': course};
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
