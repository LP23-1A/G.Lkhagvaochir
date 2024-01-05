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
  const { name, email } = req.body;
  console.log(name, email, "req.body");
  try {
    const queryText =
      "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *";
    const res = await pool.query(queryText, [name, email]);
    response.send(res.rows[0]);
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
    res.send("ok");
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
