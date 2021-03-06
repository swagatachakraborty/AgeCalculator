const splitName = function (name) {
  let fullname = {
    first_name : name.split(" ")[0],
    last_name : name.split(" ")[1],
  };
  return fullname;
}

const calculateDaysInFeb = function(year) {
  let days = 28;
  let isLeapYear = (year % 400 == 0) || (year % 100 != 0 && year % 4 == 0);
  if(isLeapYear) {
    days ++;
  }
  return days;
}

const year = Date().split(" ")[3];
const date = Date().split(" ")[2];
const month = Date().split(" ")[1];
const monthsAndDays = {
  "Jan":{ days :31, sequence :1 },
  "Feb":{ days :+calculateDaysInFeb(year), sequence :2 },
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
const today = { date : +date, month : +monthsAndDays[month].sequence, year : +year};

const split = function (dateOfBirth) {
  birthDay = {
    date : +dateOfBirth.split("/")[0],
    month : +dateOfBirth.split("/")[1],
    year : +dateOfBirth.split("/")[2]
  };
  return birthDay;
}

const findTotalDaysOfMonth = function(month) {
  return Object.values(monthsAndDays)[month - 1].days;
}

const computeAge  = function(birthDay) {
  let year = today.year - birthDay.year - 1;
  let month = 11 + today.month - birthDay.month;
  let day;
  if(today.date >= birthDay.date) {
    month ++;
    day = today.date - birthDay.date;
  }
  if(today.date < birthDay.date) {
    day = findTotalDaysOfMonth(today.month - 1) - birthDay.date + today.date;
  }
  year = year + Number.parseInt(month / 12);
  month = month % 12;
  return {year : year, month : month, day : day};
}

exports.split = split;
exports.monthsAndDays = monthsAndDays;
exports.calculateDaysInFeb = calculateDaysInFeb;
exports.today = today;
exports.splitName = splitName;
exports.findTotalDaysOfMonth = findTotalDaysOfMonth;
exports.computeAge = computeAge;
