// Dependencies
const express = require('express');
const mysql = require('mysql2');
const consoleTable = require("console.table");
// 

const inquirer = require('inquirer')

// ENV
require("dotenv").config();

// PORT
const PORT = process.env.PORT || 3001;
const app = express(); 


// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect To Database 
const db = mysql.createConnection(
    {
      host: "localhost",
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    console.log(`Connected to the employees_db database.`)
  );

    // prompts questions for user 
  function start() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "list",
          message: "What would you like to do?",
          default: "Use arrow keys",
          choices: [
            "View All Employees",
            "View All Employees By Department",
            "View All Employees By Manager",
            "Add Employee",
            "Remove Employee",
            "Update Employee Role",
            "Update Employee Manager",
          ],
        },
      ])
       .then((userChoice) => {
      switch (userChoice.list) {
        case "View All Employees":
          let sql = `SELECT employees.id, employees.first_name, employees.last_name,role.title, department.name, role.salary, CONCAT(manager.first_name , ' ' , manager.last_name) as "manager" FROM department JOIN role ON department.id = role.department_id JOIN employees ON role.id = employees.role_id LEFT JOIN employees manager ON employees.manager_id = manager.id ORDER BY employees.id ASC;`;
          db.query(sql, (err, result) => {
            if (err) {
              console.log(err);
            }
            console.log("\n");
            console.table(result);
            start();
          });
          break;
        case "View All Employees By Department":
          inquirer
            .prompt([
              {
                type: "list",
                name: "department",
                message:
                  "Which department would you like to see employees for?",
                default: "Use arrow keys",
                choices: ["Finance", "Marketing", "Operations", "Engineering", "Human-resources"],
              },
            ])
            .then((userChoice) => {
              let depId;
              switch (userChoice.department) {
                case "Finance":
                  depId = 1;
                  break;
                case "Marketing":
                  depId = 2;
                  break;
                case "Operations":
                  depId = 3;
                  break;
                case "Engineering":
                  depId = 4;
                  break;
                case "Human-resources":
                    depId = 5;
                    break;
        
              }
              let sql = `SELECT employees.id, employees.first_name, employees.last_name,role.title FROM role JOIN employees ON role.id = employees.role_id && role.department_id=?;`;
              db.query(sql, depId, (err, result) => {
                if (err) {
                  console.log(err);
                }
                console.log("\n");
                console.table(result);
                start();
              });
            });
          break;
        case "View All Employees By Manager":
          start();
          break;
        case "Add Employee":
          start();
          break;
        case "Remove Employee":
          start();
          break;
        case "Update Employee Role":
          start();
          break;
        default:
          start();
      }
    });
}

start();

