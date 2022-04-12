// class Plant {
//   constructor() {
//     this.water = 0;
//     this.soil = 0;
//     this.light = 0;
//   }
// }

// let palmTree = new Plant();
// palmTree.water = 0;
// palmTree.soil = 0;
// palmTree.light = 0;

// const changeState = (state, property, value) => {
//   return {
//     ...state,
//     [property]: (state[property] || 0) + value
//   }
// };

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    })
  }
}


let palmTree = {};
let cactus = {};
let pineTree = {};

const feed = changeState("soil")(5);
const hydrate = changeState("water");
const giveLight = changeState("light");

feed(5)(pineTree)
hydrate(7)(pineTree)
giveLight(10)(pineTree)
// feed(1)(cactus)


// changeState(plant, "soil")

let happyMeal = {}
changeState(happyMeal, "nuggets", 6)

c
