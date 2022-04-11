import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import *** from './js/*** */.js';


//getting just quarters
const quarters = (money, counter = 0) => {
  if (money < 25) {
    return counter;
  } else {
    counter++;
    return quarters(money - 25, counter);
  }
}

quarters(99);



//all coins
const getChange = (money, changeArray = {}) => {
  if (typeof (changeArray.quarters) != "number") {
    changeArray.quarters = 0;
    changeArray.dimes = 0;
    changeArray.nickels = 0;
    changeArray.pennies = 0;
  }
  if (money > 25) {
    changeArray.quarters += 1;
    return getChange(money - 25, changeArray);
  }
  else if (money > 10) {
    changeArray.dimes += 1;
    return getChange(money - 10, changeArray);
  }
  else if (money > 5) {
    changeArray.nickels += 1;
    return getChange(money - 5, changeArray);
  }
  else if (money > 0) {
    changeArray.pennies += 1;
    return getChange(money - 1, changeArray);
  }
  else { return changeArray }
}

getChange(99);
