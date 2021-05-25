const { execFile } = require("child_process");
const { outfile, timeout } = require("./config");

function runTestCase(index, input) {
  return new Promise((resolve, reject) => {
    let running = execFile(
      outfile,
      [],
      { timeout: timeout },
      (err, stdout, stderr) => {
        let stdError = stderr.toString();
        if (stdError) {
          reject(new Error(`Testcase ${index + 1} : ${stdError}`));
        } else if (err) {
          reject(new Error(`Testcase ${index + 1} : ${err.message}`));
        } else {
          resolve(stdout);
        }
      }
    );
    running.stdin.write(input);
    running.stdin.end();
  });
}

exports.runTestCase = runTestCase;
