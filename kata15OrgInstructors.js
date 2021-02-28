const organizeInstructors = function(instructors) {
  let output = {}; 
  for(let i = 0; i < instructors.length; i++) { 
    const instructor = instructors[i]
    if(!output[instructor.course]) { 
      output[instructor.course] = []
    }                                                   
    output[instructor.course].push(instructor.name);
   }
return output;
}
  
  /*
  node kata12orginstructors.js
  */

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));

/*
{
  iOS: ["Samuel"],
  Web: ["Victoria", "Karim", "Donald"]
}
{
  Blockchain: ["Brendan"],
  Web: ["David", "Carlos"],
  iOS: ["Martha"]
}
*/