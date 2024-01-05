import express from "express";
import bp from "body-parser";
import mongoose from "mongoose";
import Url from "./schema/Url.js";

const app = express();

const PORT = 8000;
const MONGODB_URL =
  "mongodb+srv://lhagwaochir96:123qweasd@cluster0.6dhf6bc.mongodb.net/?retryWrites=true&w=majority";

app.use(bp.json());

app.get("/", async (request, response) => {
  const res = await Url.find();
  response.send({ success: true, response }).end();
});

app.post("/", async (request, response) => {
  const newUrl = await Url.create(request.body);

  response.send({ success: true, urls: newUrl }).end();
});

// let users = [
//   {
//     id: 1,
//     name: "Cas",
//   },
//   {
//     id: 2,
//     name: "Naki",
//   },
//   {
//     id: 3,
//     name: "oggy",
//   },
// ];
// app.get("/", (request, response) => {
//   response.send({ success: true, users: users }).end();
// });
// app.get("/:id", (request, response) => {
//   const id = request.params.id;
//   const filteredData = users.filter((user) => user.id === parseInt(id));
//   response.send({ success: true, users: filteredData }).end();
// });
// app.post("/", (request, response) => {
//   const data = request.body;
//   users.push(data);
//   response.send({ success: true, users: users }).end();
// });
// app.put("/:id", (request, response) => {
//   const id = request.params.id;
//   users.map((user) => {
//     if (user.id === parseInt(id)) {
//       console.log(id);
//       user.name = request.body.name;
//     }
//   });
//   response.send({ success: true, users: users }).end();
// });
// app.delete("/:id", (request, response) => {
//   const id = request.params.id;
//   const deleteUserId = users.findIndex((user) => user.id === parseInt(id));
//   if (deleteUserId !== -1) {
//     users.splice(deleteUserId, 1);
//   }
//   response.send({ success: true, users: users }).end();
// });
app.listen(PORT, async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("connect");
  } catch (error) {
    console.log("error");
  }

  console.log("Server running");
});
