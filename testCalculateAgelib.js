let assert = require("assert");
let calculateAgelib = require("./calculateAgelib.js");

//---------testing split()----------
let birthDay = calculateAgelib.split("10/11/1996")
assert.deepEqual(birthDay,{day : 10, month : 11, year : 1996},"Error in split()");
console.log("split() works fine");

//---------testing calculateDaysInFeb()----------
assert.deepEqual(calculateAgelib.calculateDaysInFeb(1700),28,"Error in calculateDaysInFeb()");
assert.deepEqual(calculateAgelib.calculateDaysInFeb(1600),29,"Error in calculateDaysInFeb()");
assert.deepEqual(calculateAgelib.calculateDaysInFeb(2016),29,"Error in calculateDaysInFeb()");
assert.deepEqual(calculateAgelib.calculateDaysInFeb(2011),28,"Error in calculateDaysInFeb()");
console.log("calculateDaysInFeb() works fine");


//---------testing splitName()----------
let name = calculateAgelib.splitName("Swagata Chakraborty");
assert.deepEqual(name,{fname : "Swagata", lname : "Chakraborty"},"Error in splitName()");
console.log("splitName() works fine");

let outputFromFunction = calculateAgelib.monthsAndDays;
let correntOutput = { 'Jan': { days: 31, sequence: 1 },
   'Feb': {days: 28, sequence: 2 },
   'Mar': {days: 31, sequence: 3 },
   'Apr': {days: 30, sequence: 4 },
   'May': {days: 31, sequence: 5 },
   'Jun': {days: 30, sequence: 6 },
   'Jul': {days: 31, sequence: 7 },
   'Aug': {days: 31, sequence: 8 },
   'Sep': {days: 30, sequence: 9 },
   'Oct': {days: 31, sequence: 10 },
   'Nov': {days: 30, sequence: 11 },
   'Dec': {days: 31, sequence: 12 } };
assert.deepEqual(outputFromFunction,correntOutput,"Error in monthsAndDays");
console.log("monthsAndDays works fine");

