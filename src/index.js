import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import *** from './js/*** */.js';


// //getting just quarters
// const quarters = (money, counter = 0) => {
//   if (money < 25) {
//     return counter;
//   } else {
//     counter++;
//     return quarters(money - 25, counter);
//   }
// }

// quarters(99);



// //all coins
// const getChange = (money, changeArray = {}) => {
//   if (money === 0) {
//     return changeArray;
//   }
//   if (typeof (changeArray.quarters) != "number") {
//     changeArray.dollars = 0;
//     changeArray.quarters = 0;
//     changeArray.dimes = 0;
//     changeArray.nickels = 0;
//     changeArray.pennies = 0;
//   }
//   if (money > 1) {
//     changeArray.dollars++;
//     return getChange(money - 1, changeArray);
//   }
//   if (money > .25) {
//     changeArray.quarters++;
//     return getChange(money - .25, changeArray);
//   }
//   else if (money > .10) {
//     changeArray.dimes++;
//     return getChange(money - .10, changeArray);
//   }
//   else if (money > .05) {
//     changeArray.nickels++;
//     return getChange(money - .05, changeArray);
//   }
//   else if (money > .01) {
//     changeArray.pennies++;
//     return getChange(money - .01, changeArray);
//   }
//   else { return changeArray }
// }

// getChange(5.99);


function closure(num, name, date) {

  for (let x = 0; x < num; x++) {

    if (x === num) {
      let count = 0;
      return `hey ${name}, your number is ${x} and you did this on ${date}`;
    }
    console.log(count);
  }


}

let test2 = closure(4, "test", "jan 1")
test2;



function closure2(num) {
  return function (name) {
    return function (date) {
      //did a bunch of stuff here
      //any variables defined in this, are only accessible within this function
      let temp = 0;
      return `hey ${name}, your number is ${num} and you did this on ${date}`;
    }
  }
}

const bobGreeting = closure2(5)("Bob")("Jan 1")
const johnGetting = closure2(88)("John")("July 18")
test // = `hey ${name}, your number is ${num} and you did this on ${date}`;
testAgain  // = `hey ${name}, your number is ${num} and you did this on ${date}`;


function moneyCountClosure(money) {
  return function () {
    const quarters = Math.floor(money / 25); // = 3.96 -> 3
    money = money % 25;
    return function () {
      const dimes = Math.floor(money / 10);
      money = money % 10;
      return function () {
        const nickles = Math.floor(money / 5);
        money = money % 5;
        return function () {
          const pennies = Math.floor(money);
          money = money;
          return `The amount you entered would consist of ${quarters} quarters, ${dimes} dimes, ${nickles} nickles, and ${pennies} pennies.`
        }
      }
    }
  }
}

function moneyCountClosure(money) {
  return function () {
    const quarters = Math.floor(money / 25); // = 3.96 -> 3
    money = money % 25;
    return function () {
      const dimes = Math.floor(money / 10);
      money = money % 10;
      return function () {
        const nickles = Math.floor(money / 5);
        money = money % 5;
        return function () {
          const pennies = Math.floor(money);
          money = money;
          return `The amount you entered would consist of ${quarters} quarters, ${dimes} dimes, ${nickles} nickles, and ${pennies} pennies.`
        }
      }
    }
  }
}


// moneyCountClosure(99)()()()()


const quarters = moneyCountClosure(99)
let dimes = quarters()
let nickels = dimes()
let pennies = nickels()
let final = pennies()
final



function moneyCountNormal(money) {
  let quarters = 0;
  let dimes = 0;
  let nickels = 0;
  let pennies = 0;
  for (let q = 0; money > 25; q++) {
    money -= 25;
    quarters++;
  }
  for (let d = 0; money > 10; d++) {
    money -= 10;
    dimes++;
  }

}


moneyCountClosure(99);
