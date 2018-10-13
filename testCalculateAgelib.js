let assert = require("assert");
let calculateAgelib = require("./calculateAgelib.js");

//---------testing split()----------
let birthDay = calculateAgelib.split("10/11/1996")
assert.deepEqual(birthDay,{day : 10, month : 11, year : 1996},"Error in split()");

//---------testing findTodaysDate()----------
let today = calculateAgelib.findTodaysDate();
console.log(today);
//assert.deepEqual(today,{day : 12, month : 10, year : 2018},"Error in findTodaysDate()");

//---------testing isLeapYear()----------
assert.deepEqual(calculateAgelib.isLeapYear(1700),false,"Error in isLeapYear()");
assert.deepEqual(calculateAgelib.isLeapYear(1600),true,"Error in isLeapYear()");
assert.deepEqual(calculateAgelib.isLeapYear(2016),true,"Error in isLeapYear()");
assert.deepEqual(calculateAgelib.isLeapYear(2011),false,"Error in isLeapYear()");

//---------testing splitName()----------
let name = calculateAgelib.splitName("Swagata Chakraborty");
assert.deepEqual(name,{fname : "Swagata", lname : "Chakraborty"},"Error in splitName()");

//---------testing generateTotalDaysOf()----------
let totalDays = calculateAgelib.generateTotalDaysOf(["Jan",31]);
assert.deepEqual(totalDays,31,"Error in generateTotalDaysOf()");
totalDays = calculateAgelib.generateTotalDaysOf(["Feb",28]);
assert.deepEqual(totalDays,28,"Error in generateTotalDaysOf()");
totalDays = calculateAgelib.generateTotalDaysOf(["Jul",30]);
assert.deepEqual(totalDays,30,"Error in generateTotalDaysOf()");

//---------testing createAllMonthDetails()----------
let outputFromFunction = calculateAgelib.createAllMonthDetails();
let correntOutput = [ { name: 'Jan', days: 31, value: 1 },
  { name: 'Feb', days: 28, value: 2 },
  { name: 'Mar', days: 31, value: 3 },
  { name: 'Apr', days: 30, value: 4 },
  { name: 'May', days: 31, value: 5 },
  { name: 'Jun', days: 30, value: 6 },
  { name: 'Jul', days: 31, value: 7 },
  { name: 'Aug', days: 31, value: 8 },
  { name: 'Sep', days: 30, value: 9 },
  { name: 'Oct', days: 31, value: 10 },
  { name: 'Nov', days: 30, value: 11 },
  { name: 'Dec', days: 31, value: 12 } ];
assert.deepEqual(outputFromFunction,correntOutput,"Error in createAllMonthDetails()");


//---------testing areDifferent()----------
assert.deepEqual(calculateAgelib.areDifferent(12,3),true,"Error in areDifferernt()");
assert.deepEqual(calculateAgelib.areDifferent("swagata",3),true,"Error in areDifferernt()");
assert.deepEqual(calculateAgelib.areDifferent(12,12),false,"Error in areDifferernt()");
assert.deepEqual(calculateAgelib.areDifferent("swagata","swagata"),false,"Error in areDifferernt()");
assert.deepEqual(calculateAgelib.areDifferent(12,"abcd"),true,"Error in areDifferernt()");

