const { getProblem } = require("./sources/getProblem");
const { runTestCase } = require("./sources/runTestCase");
const { compile } = require("./sources/compile");
const { check } = require("./sources/check");

Promise.all([getProblem(), compile()])
  .then((data) => {
    let problem = data[0];
    console.log(`Running ${problem.name}.....`);

    let count = 0;
    let running = [];
    for (let i = 0; i < problem.cases.length; i++) {
      let temp = runTestCase(i, problem.cases[i].input).catch((err) => {
        return err;
      });
      running.push(temp);
    }
    Promise.all(running)
      .then((output) => {
        for (let i = 0; i < problem.cases.length; i++) {
          if (check(problem.cases[i].output, output[i]) == true) {
            console.log(`Testcase ${i + 1} : Accepted `);
            count = count + 1;
          } else {
            console.log(`Testcase ${i + 1} : Wrong Answer`);
          }
        }
        return new Promise((resolve, reject) => {
          resolve([count, problem.cases.length]);
        });
      })
      .then((count) => {
        let reaction = ":)";
        if (count[0] != count[1]) reaction = ";(";
        console.log(
          `${count[0]} out of ${count[1]} Test Cases Passed ${reaction}`
        );
      })
      .catch((err) => {
        console.log(err.message);
      });
  })
  .catch((err) => {
    console.log(err);
  });
