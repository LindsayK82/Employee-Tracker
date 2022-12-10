const express = require('express');
const mysql = require('mysql2');
const cTable = require('console.table');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'lindsayk',
    database: 'employees_db'
  },
  console.log(`Connected to the employees_db database.`)
);

// Rertrieve all employees
app.get('/api/employees', (req, res) => {
    const sql = 'SELECT id, first_name, last_name, title, department, salary, manager';

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message});
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

// Add an employee
app.post('/api/new-employees', ({ body }, res) => {
    const sql = `INSERT INTO employees (employee_name)
      VALUES (?)`;
    const params = [body.employee_name];
    
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: body
      });
    });
  });
  







app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  