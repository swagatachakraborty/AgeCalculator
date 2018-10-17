let assert = require("assert");
let calculateAgelib = require("./calculateAgelib.js");

const checkAssert = function (actualOutput, expectedOutput, errorMessage) { 
  assert.deepEqual(actualOutput, expectedOutput,errorMessage);
}

//---------testing split()----------
let birthDay = calculateAgelib.split("10/11/1996")
checkAssert(birthDay,{date : 10, month : 11, year : 1996},"Error in split()");
console.log("split() works fine");

//---------testing today----------
let today = calculateAgelib.today;
checkAssert(today,{date : 17, month : 10, year : 2018},"Error in today");
console.log("today works fine");

//---------testing calculateDaysInFeb()----------
checkAssert(calculateAgelib.calculateDaysInFeb(1700),28,"Error in calculateDaysInFeb()");
checkAssert(calculateAgelib.calculateDaysInFeb(1600),29,"Error in calculateDaysInFeb()");
checkAssert(calculateAgelib.calculateDaysInFeb(2016),29,"Error in calculateDaysInFeb()");
checkAssert(calculateAgelib.calculateDaysInFeb(2011),28,"Error in calculateDaysInFeb()");
console.log("calculateDaysInFeb() works fine");


//---------testing splitName()----------
let name = calculateAgelib.splitName("Swagata Chakraborty");
checkAssert(name,{fname : "Swagata", lname : "Chakraborty"},"Error in splitName()");
console.log("splitName() works fine");

//---------testing monthsAndDays----------
let actualOutput = calculateAgelib.monthsAndDays;
const expectedOutput = {
  "Jan":{ days :31, sequence :1 },
  "Feb":{ days :28, sequence :2 },
  "Mar":{ days :31, sequence :3 },
  "Apr":{ days :30, sequence :4 },
  "May":{ days :31, sequence :5 },
  "Jun":{ days :30, sequence :6 },
  "Jul":{ days :31, sequence :7 },
  "Aug":{ days :31, sequence :8 },
  "Sep":{ days :30, sequence :9 },
  "Oct":{ days :31, sequence :10 },
  "Nov":{ days :30, sequence :11 },
  "Dec":{ days :31, sequence :12 }
};
checkAssert(actualOutput,expectedOutput,"Error in monthsAndDays");
console.log("monthsAndDays works fine");

//---------testing findTotalDaysOfMonth()----------
let findTotalDaysOfMonth = calculateAgelib.findTotalDaysOfMonth;
checkAssert(findTotalDaysOfMonth(10),31,"Error in findTotalDaysOfMonth()"); 
checkAssert(findTotalDaysOfMonth(7),31,"Error in findTotalDaysOfMonth()"); 
checkAssert(findTotalDaysOfMonth(11),30,"Error in findTotalDaysOfMonth()"); 
checkAssert(findTotalDaysOfMonth(2),28,"Error in findTotalDaysOfMonth()"); 
console.log("findTotalDaysOfMonthi() works fine");
