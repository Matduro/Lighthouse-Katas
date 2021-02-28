//Kata Exercise 10 Bake-off program
//program examines inventories of A and B, then conducts a search to find 1 of the 2 ingredients
//at A and then searches to find the other ingredient at B.  If each has an ingredient, the search
//outputs that recipe name.

//this helper searches one bakery's inventory and if it gets a match
//it will return a true condition and stop searching
function materialSearch (shop, foods) {
  for(let j = 0; j < foods.length; j++) {
      for(let i = 0; i < shop.length; i++) {
          if(shop[i] === foods[j]) {
              return true;
          }
      } 
  } return false;
}

function chooseRecipe (bakeryA, bakeryB, recipes) {
  //transform the ingredients object into an array then
  //pass that array along with the first bakery to the 
  //helper function, the function will search and pass back 
  //true or false condition for finding or not finding an 
  //ingredient.
  
  for(let j = 0; j < recipes.length; j++) {
      let items = [];
      for(let i = 0; i < recipes[j].ingredients.length; i++) {
          items += recipes[j].ingredients[i];
  }
  let foundNotFoundA = materialSearch(bakeryA, items);
  let foundNotFoundB = materialSearch(bakeryB, items);
  if(foundNotFoundA === true && foundNotFoundB === true) {
      return recipes[j].name;
  }
  }
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
      name: 'Coconut Sponge Cake',
      ingredients: ['coconut', 'cake base']
  },
  {
      name: 'Persian Cheesecake',
      ingredients: ['saffron', 'cream cheese']
  },
  {
      name: 'Custard Surprise',
      ingredients: ['custard', 'ground beef']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
      name: 'Potato Ganache',
      ingredients: ['potatoes', 'chocolate']
  },
  {
      name: 'Sweet Fish',
      ingredients: ['anchovies', 'honey']
  },
  {
      name: "Nima's Famous Dijon Raisins",
      ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));