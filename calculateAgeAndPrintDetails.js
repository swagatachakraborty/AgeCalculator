let {computeAge,split,splitName} = require("./calculateAgelib.js");

const main = function () {
  let name = process.argv[2];
  let dateOfBirth = process.argv[3];
  let address = process.argv[4];
  name = splitName(name);
  dateOfBirth = split(dateOfBirth);
  let age = computeAge(dateOfBirth);
  let bioData = {
    name :name,
    dateOfBirth : dateOfBirth,
    address : address,
    age : age
  };
  printDetails( bioData );
}

const printDetails = function( details ) {
  for(let key of Object.keys(details)) {
    console.log("",key," : ",details[key]);
  }
}

main();
