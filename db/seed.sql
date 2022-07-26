-- CREATE Table employees_db

-- USE Table employees_db;
-- -- Departments Data
INSERT INTO department (name) VALUES 
("Finance"),
("Marketing"),
("Operations"),
("Engineering"),
("Human-resources");

-- Roles Data
INSERT INTO role (title, salary, department_id) VALUES 
("Accountant Manager", 100000, 1),
("Financial Associate", 62000, 1),
("Sales Manager", 90000, 2),
("Sales Associate", 50000, 2),
("Operations Manager", 80000, 3),
("Operations Associate", 50000, 3),
("Lead Engineer", 110000, 4),
("Engineer", 100000, 4),
("HR Manager", 80000, 5),
("HR Associate", 60000, 5);

-- Employee Data
INSERT INTO employees_db (first_name, last_name, role_id, manager_id, department_id) VALUES
("Justin", "Clarke", 7, NULL, 4),
("Destiny", "Henry", 5, NULL, 3),
("Ambar", "Mesa", 8, 1, 4),
("Mikyla", "Marimon", 1, NULL, 1),
("Tyana", "Mason", 3, NULL, 2),
("Dorian", "Walker", 6, 2, 3),
("Wariesi", "Flores", 2, 4, 1),
("Desmond", "Lewis", 4, 5, 2),
("Briana", "Lee", 9, NULL, 5),
("Khalil", "Murphy", 10, 9, 5),
