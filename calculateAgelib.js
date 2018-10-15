const checkLeapYear = function(year) {
  let days = 28;
  let isLeapYear = (year % 400 == 0) || (year % 100 != 0 && year % 4 == 0);
  if(isLeapYear) {
    days ++;
  }
  return days;
}

const year = Date().split(" ")[3];
const day = Date().split(" ")[2];
const month = Date().split(" ")[1];
const monthsAndDays = {
  "Jan":{ days :31, sequence :1 },
  "Feb":{ days :checkLeapYear(year), sequence :2 },
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
const today = { day : day, month : monthsAndDays[month].sequence, year : year};

const split = function (dateOfBirth) {
  birthDay = {
    day : dateOfBirth.split("/")[0],
    month : findMonthValue(dateOfBirth.split("/")[1]),
    year : dateOfBirth.split("/")[2]
  };
  return birthDay;
}

const areDifferent = function(value1,value2) {
  if(value1 == value2){
    return false;
  }
  return true;
}

const findMonthValue = function (month) {
  let months = createAllMonthDetails();
  let isMonthsDifferent = true;
  let monthIndex = -1;
  while(isMonthsDifferent) {
    monthIndex++;
    console.log("months[",monthIndex,"]=",months[monthIndex]);
    isMonthsDifferent = areDifferent( months[monthIndex].name, month );
  }
  return months[monthIndex].value;
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
exports.monthsAndDays = monthsAndDays;
exports.checkLeapYear = checkLeapYear;
exports.today = today;
exports.generateTotalDaysOf = generateTotalDaysOf;
exports.findMonthValue = findMonthValue;
exports.splitName = splitName;
exports.areDifferent = areDifferent;
//exports.computeAgeDiff = computeAgeDiff;
//exports.computeAge = computeAge;

