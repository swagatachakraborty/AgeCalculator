const createAllMonthDetails = function () {
  let monthsAndDays = [
    ["Jan",31],
    ["Feb",28],
    ["Mar",31],
    ["Apr",30],
    ["May",31],
    ["Jun",30],
    ["Jul",31],
    ["Aug",31],
    ["Sep",30],
    ["Oct",31],
    ["Nov",30],
    ["Dec",31]
  ];
  const MONTHS = [];
  for(let monthIndex = 0; monthIndex < 12; monthIndex++) {
    MONTHS[monthIndex] = {
      name : monthsAndDays[monthIndex][0],
      days : generateTotalDaysOf(monthsAndDays[monthIndex]),
      value : monthIndex + 1
    };
  }
  return MONTHS;
}

const split = function (dateOfBirth) {
  birthDay = {
    day : dateOfBirth.split("/")[0],
    month : dateOfBirth.split("/")[1],
    year : dateOfBirth.split("/")[2]
  };
  return birthDay;
}

const findTodaysDate = function () {
  today = {
    day : Date().split(" ")[2],
    month : Date().split(" ")[1],
    year : Date().split(" ")[3]
  };
  return today;
}

const isLeapYear = function(year) {
  return (year % 400 == 0) || (year % 100 != 0 && year % 4 == 0);
}

const generateTotalDaysOf = function (monthAndDays) {
  if(monthAndDays[0] == "Feb" && isLeapYear(findTodaysDate().year)){
    return monthAndDays[1] + 1;
  }
  return monthAndDays[1];
}

const areDifferent = function(value1,value2) {
  if(value1 == value2){
    return false;
  }
  return true;
}

const findMonthValue = function (month) {
  const MONTHS = createAllMonthDetails();
  let isMonthsDifferent = true;
  let monthIndex = 0;
  while(isMonthsDifferent) {
    isMonthsDifferent = areDifferent( MONTHS[monthIndex].name, month );
    monthIndex++;
  }
  return MONTHS[monthIndex].value;
}

const splitName = function (name) {
  let fullname = {
    fname : name.split(" ")[0],
    lname : name.split(" ")[1],
  };
  return fullname;
}

const computeAge = function (dateOfBirth) { 
  let birthDay = split(dateOfBirth);
  today = findTodaysDate();
  let age = {
    year : computeAgeDiff(birthDay,today,year),
    month : computeAgeDiff(birthDay,today,month), 
    day : computeAgeDiff(birthDay,today,month)
  };
  return age;
}

exports.split = split;
exports.findTodaysDate = findTodaysDate;
exports.isLeapYear = isLeapYear;
exports.createAllMonthDetails = createAllMonthDetails;
exports.generateTotalDaysOf = generateTotalDaysOf;
exports.findMonthValue = findMonthValue;
exports.splitName = splitName;
exports.areDifferent = areDifferent;
//exports.computeAgeDiff = computeAgeDiff;
//exports.computeAge = computeAge;
