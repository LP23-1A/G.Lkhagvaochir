import { pool } from "../db.js";

export const getUsers = async (req, res) => {
  try {
    const queryText = ` SELECT * FROM users`;
    const response = await pool.query(queryText);

    res.send(response.rows);
  } catch (error) {
    console.error(error);
  }
};

export const getOneUser = async (req, res) => {
  const { id, name, email } = req.body;
  try {
    const queryText = `SELECT * FROM users WHERE id='${id}' OR (name='${name}' AND id != '${id}') OR (email='${email}' AND id != '${id}')`;
    const response = await pool.query(queryText);
    res.send(response.rows);
  } catch (error) {
    console.error(error);
  }
};

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password, "req.body");
  try {
    const queryText = `INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *`;
    const response = await pool.query(queryText, [name, email, password]);
    res.send(response.rows[0]);
  } catch (error) {
    console.error(error);
    res.send("error query");
  }
};

export const deleteUser = async (req, res) => {
  const { name, email, id } = req.body;
  try {
    const queryText = `DELETE FROM users WHERE (name ='${name}' AND email = '${email}') OR id = '${id}'`;
    await pool.query(queryText);
    res.send("Deleted");
  } catch (error) {
    res.send("error").end();
    console.error(error);
  }
};

export const updateUser = async (req, res) => {
  const { name, email, id } = req.body;

  try {
    const queryText = `UPDATE users SET name = '${name}', email='${email}' WHERE id = '${id}'`;
    await pool.query(queryText);
    res.send("Update");
  } catch (error) {
    res.send("error").end();
    console.error(error);
  }
};
