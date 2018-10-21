const assert = require("assert");

const checkAssert = function(func, inputs, actualOutput, expectedOutput, errorMessage) {
  generateTestReports(func, inputs, actualOutput, expectedOutput);
  assert.deepEqual(expectedOutput,actualOutput,errorMessage);
}

const generateTestReports = function(func, inputs, actualOutput, expectedOutput) {
  console.log(func,"\t\t",inputs,"\t\t",actualOutput,"\t\t",expectedOutput);
}

exports.checkAssert = checkAssert;
