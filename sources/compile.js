const { compiler, flags } = require("./config");
const { execFile } = require("child_process");

function compile() {
  return new Promise((resolve, reject) => {
    console.log("Compiling.......");
    execFile(compiler, flags, (err, stdout, stderr) => {
      let stdError = stderr.toString();
      if (stdError) reject(new Error(`${stdError}\nCompilation Failed ;(`));
      else if (err) reject(new Error(`${err}\nCompilation Failed ;(`));
      else {
        console.log("Compilation Successfull :)");
        resolve(true);
      }
    });
  });
}

exports.compile = compile;
