let assert = require("assert");
let calculateAgelib = require("./calculateAgelib.js");
let checkAssert = require("./testFrameWork.js").checkAssert;

//---------testing split()----------
let birthDay = calculateAgelib.split("10/11/1996")
checkAssert(calculateAgelib.split.name,"10/11/1996",birthDay,{date : 10, month : 11, year : 1996},"Error in split()");
birthDay = calculateAgelib.split("24/7/1996")
checkAssert(calculateAgelib.split.name,"24/7/1996",birthDay,{date : 24, month : 7, year : 1996},"Error in split()");
console.log("split() works fine");

//---------testing today----------
let today = calculateAgelib.today;
checkAssert("today",Date(),today,{date : 22, month : 10, year : 2018},"Error in today");
console.log("today works fine");

//---------testing calculateDaysInFeb()----------
let febDays = calculateAgelib.calculateDaysInFeb;
checkAssert(febDays.name,1700,febDays(1700),28,"Error in calculateDaysInFeb()");
checkAssert(febDays.name,1600,febDays(1600),29,"Error in calculateDaysInFeb()");
checkAssert(febDays.name,2016,febDays(2016),29,"Error in calculateDaysInFeb()");
checkAssert(febDays.name,2011,febDays(2011),28,"Error in calculateDaysInFeb()");
console.log("calculateDaysInFeb() works fine");


//---------testing splitName()----------
let name = calculateAgelib.splitName("Swagata Chakraborty");
checkAssert(calculateAgelib.splitName.name,"Swagata Chakraborty",name,{fname : "Swagata", lname : "Chakraborty"},"Error in splitName()");
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
checkAssert("monthsAndDays","----",actualOutput,expectedOutput,"Error in monthsAndDays");
console.log("monthsAndDays works fine");

//---------testing findTotalDaysOfMonth()----------
let totalDaysOfMonth = calculateAgelib.findTotalDaysOfMonth;
checkAssert(totalDaysOfMonth.name,10,totalDaysOfMonth(10),31,"Error in totalDaysOfMonth()"); 
checkAssert(totalDaysOfMonth.name,7,totalDaysOfMonth(7),31,"Error in totalDaysOfMonth()"); 
checkAssert(totalDaysOfMonth.name,11,totalDaysOfMonth(11),30,"Error in totalDaysOfMonth()"); 
checkAssert(totalDaysOfMonth.name,2,totalDaysOfMonth(2),28,"Error in totalDaysOfMonth()"); 
console.log("totalDaysOfMonthi() works fine");
