import pg from "pg";
import dotevn from "dotenv";

const { Pool } = pg;

dotevn.config();

export const pool = new Pool({
  ssl: true,
  connectionString: process.env.DB_URL,
});
