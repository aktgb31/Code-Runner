const { execFile } = require("child_process");
const { getProblem } = require("./sources/getProblem");
const { runTestCase } = require("./sources/runTestCase");
const { compile } = require("./sources/compile");
const { check } = require("./sources/check");

Promise.all([getProblem(), compile()])
  .then((data) => {
    let problem = data[0];
    console.log(`Running ${problem.name}.....`);
    let running = [];
    let count = 0;
    for (let i = 0; i < problem.cases.length; i++)
      running.push(runTestCase(problem.cases[i].input));

    for (let i = 0; i < problem.cases.length; i++) {
      running[i]
        .then((output) => {
          if (check(problem.cases[i].output, output) == true) {
            console.log(`Testcase ${i + 1} : Accepted `);
            count = count + 1;
          } else {
            console.log(`Testcase ${i + 1} : Wrong Answer`);
          }
        })
        .catch((err) => {
          console.log(`Testcase ${i + 1} : ${err.message}`);
        });
    }
  })
  .catch((err) => {
    console.log(err);
  });
