import express from "express";
import dotenv from "dotenv";
import bp from "body-parser";
import { pool } from "./db.js";
import { user } from "../backend/src/router/user.js";
import cors from "cors";

dotenv.config();
const PORT = process.env.PORT || 8000;
const app = express();

app.use(bp.json());
app.use(cors({ origin: "*" }));

app.use("/users", user);

app.listen(PORT, (req, res) => {
  console.log(`App running on port ${PORT}.`);
});

app.post("/createTable", async (_, res) => {
  try {
    const tableQueryText = `
    CREATE TABLE IF NOT EXISTS users (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      name VARCHAR(50) NOT NULL,
      email VARCHAR(50) NOT NULL,
      password VARCHAR(50) NOT NULL,
      avatar_img BYTEA,
      createAt TIMESTAMP,
      updateAt TIMESTAMP,
      currency_type TEXT DEFAULT 'MNT'
    )`;
    await pool.query(tableQueryText);
    res.send("ok");
  } catch (error) {
    console.error(error);
    res.send("Error creating table");
  }
});
