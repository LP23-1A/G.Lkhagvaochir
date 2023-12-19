import express from "express";
import bp from "body-parser";

const app = express();

const PORT = 8001;

const user = [
  {
    id: 1,
    name: "cas",
  },
  {
    id: 2,
    name: "orgil",
  },
];

app.use(bp.json());
app.get("/", (req, res) => {
  res.send({ success: true }).end();
});

app.post("/", (req, res) => {
  console.log("success");
  res.send({}).end();
});

app.listen(PORT, () => {
  console.log("Server running");
});
