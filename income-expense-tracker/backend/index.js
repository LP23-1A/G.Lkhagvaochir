import express from "express";
import dotenv from "dotenv";
import bp from "body-parser";
import { pool } from "./db.js";
import { user } from "./router/user.js";

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

app.use(bp.json());

app.use("/users", user);

app.listen(PORT, (req, res) => {
  console.log(`App running on port ${PORT}.`);
});

app.post("/createTable", async (_, res) => {
  try {
    const tableQueryText = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(50) NOT NULL,
      email VARCHAR(50) NOT NULL,
      avatar_img BYTEA,
      createAt TIMESTAMP,
      updateAt TIMESSTAMP,
      currency_type TEXT DEFAULT 'MNT'
    )`;
    await pool.query(tableQueryText);
    res.send("ok");
  } catch (error) {
    console.error(error);
    res.send("Error creating table");
  }
});
