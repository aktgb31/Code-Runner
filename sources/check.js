const { EOL } = require("os");

function check(testOutput, stdOutput) {
  const expectedLines = testOutput.trim().split("\n");
  const resultLines = stdOutput.trim().split(EOL);
  //console.log(expectedLines, resultLines);
  if (expectedLines.length !== resultLines.length) {
    console.log("Length Mismatched");
    return false;
  }
  const len = expectedLines.length;
  for (let i = 0; i < len; i++) {
    if (expectedLines[i].trim() !== resultLines[i].trim()) {
      console.log(
        " Failed here: Expected Output : ",
        expectedLines[i].trim(),
        " Current Output : ",
        resultLines[i].trim()
      );
      return false;
    }
  }
  return true;
}

exports.check = check;
