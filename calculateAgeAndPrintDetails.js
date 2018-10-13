const calculateAgelib = require(./calculateAgelib.js);
const main = function () {
  let name = process.argv[2];
  let dateOfBirth = process.argv[3];
  let address = process.argv[4];
  let bioData = {
    name : calculateAgelib.createNameObject(name),
    dateOfBirth : splitdateOfBirth(dateOfBirth),
    address : address,
    age : calculateAgelib.computeAge(dateOfBirth)
  };
  printDetails( bioData );
}

const printDetails = function( details ) {
  for(let key of Object.keys(details)) {
    console.log("",key," : ",details[key]);
  }
}

main();
