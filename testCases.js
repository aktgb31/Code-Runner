const app = require("express")();
const bodyParser = require("body-parser");

const port = 10043;

app.use(bodyParser.json());

problem = {};

app.post("/", (req, res) => {
  const data = req.body;

  problem = { name: data.name, cases: data.tests };
  console.log(problem);
  res.sendStatus(200);
});

app.get("/", (req, res) => {
  res.send(problem);
});

app.listen(port, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(`Listening on port ${port}`);
});
