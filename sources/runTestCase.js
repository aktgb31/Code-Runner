const { execFile } = require("child_process");
const { outfile, timeout } = require("./config");

function runTestCase(input) {
  return new Promise((resolve, reject) => {
    let running = execFile(
      outfile,
      [],
      { timeout: timeout },
      (err, stdout, stderr) => {
        let stdError = stderr.toString();
        if (stdError) {
          reject(new Error(stdError));
        } else if (err) {
          reject(err);
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
