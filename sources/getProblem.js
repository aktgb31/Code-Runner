const http = require("http");

function getProblem() {
  return new Promise((resolve, reject) => {
    http
      .get("http://localhost:10043/", (resp) => {
        let data = "";
        resp.on("data", (chunk) => {
          data += chunk;
        });

        resp.on("end", () => {
          resolve(JSON.parse(data));
        });
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}

exports.getProblem = getProblem;
