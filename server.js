const inquirer = require('inquirer');
const express = require('express');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');
const { response } = require('express');
const chalk = require('chalk');
const cTable = require('console.table');



const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use apiRoutes
app.use('/api', apiRoutes);

// Default response for any other request (Not Found)
app.use((req, res) => { 
  res.status(404).end();
});




// ++++++++++++++++++++++++++++++++     PROMPT  ++++++++++++++++++++++++++++++++

// Prompt User to choose
const promptUser = () => {
  inquirer.prompt([{
    name: 'choices',
    type: 'list',
    message: 'Please select an option:',
    choices: [
      'View All Employees',
      'View All Roles',
      'View All Departments',
      'View All Employees By Department',
      'View Department Budgets',
      'Update Employee Role',
      'Update Employee Manager',
      'Add Employee',
      'Add Role',
      'Add Department',
      'Remove Employee',
      'Remove Role',
      'Remove Department',
      'Exit'
    ]}
  ])
  .then((resp) => {
    switch(resp.choices){
      case 'View All Employees':
        viewAllEmployees();
        break;

      case'View All Departments':
        viewAllDepartments();
        break;
      case 'View All Employees By Department':
          viewEmployeesByDepartment();
          break;
      case 'Add Employee':
          addEmployee();
          break;
      case 'Remove Employee':
          removeEmployee();
      case 'Update Employee Role':
          updateEmployeeRole();
          break;
      case 'Update Employee Manager':
          updateEmployeeManager();
          break;
      case 'View All Roles':
          viewAllRoles();
          break;
      case 'Add Role':
          addRole();
          break;
      case 'Remove Role':
          removeRole();
      case 'Add Department':
          addDepartment();
          break;
      case 'View Department Budgets':
          viewDepartmentBudget();
          break;
      case 'Remove Department':
          removeDepartment();
          break;
      case 'Exit':
          connection.end();
      }
  });
};



// ++++++++++++++++++++++++++++++++     DISPLAY  FUNCTIONS  ++++++++++++++++++++++++++++++++



const viewAllEmployees = () => {
  let sql = `Select e.id AS ID, 
              e.first_name AS First, 
              e.last_name AS Last, 
              title AS Title, 
              salary AS Salary, 
              dept_name AS Department, 
              m.last_name AS Manager
              FROM employee AS e
              JOIN role ON e.role_id = role.id
              JOIN department ON role.dept_id = department.id
              LEFT JOIN employee AS m ON e.manager_id = m.id`;
  db.query(sql, (err, res) => {
    if (err) throw err;
    console.log(' ');
    console.log(chalk.blue.bold(`====================================================================================`));
    console.log(`                              ` + chalk.cyanBright.bold(`Employees:`));
    console.log(chalk.blue.bold(`====================================================================================`));
    console.table(res);
    console.log(chalk.blue.bold(`====================================================================================`));
    promptUser();
  });
};
  

const viewAllDepartments = () => {
  let sql = `SELECT id AS ID, dept_name as Department FROM department`;

  db.query(sql, (err, res) => {
    if (err) throw err;
    console.log(' ');
    console.log(chalk.blue.bold(`====================================================================================`));
    console.log(`                              ` + chalk.cyanBright.bold(`Departments:`));
    console.log(chalk.blue.bold(`====================================================================================`));
    console.table(res);
    console.log(chalk.blue.bold(`====================================================================================`));
    promptUser();
  });
};

const viewEmployeesByDepartment = () => {
  let sql = `Select dept_name AS Department,
              e.id AS 'emp_id',
              e.first_name AS First, 
              e.last_name AS Last, 
              title AS Title, 
              salary AS Salary,  
              m.last_name AS manager
              FROM employee AS e
              JOIN role ON e.role_id = role.id
              JOIN department ON role.dept_id = department.id
              LEFT JOIN employee AS m ON e.manager_id = m.id
              ORDER BY Department, e.last_name`;


  db.query(sql, (err, res) => {
    if (err) throw err;
    console.log(' ');
    console.log(chalk.blue.bold(`====================================================================================`));
    console.log(`                              ` + chalk.cyanBright.bold(`Employees by Departments:`));
    console.log(chalk.blue.bold(`====================================================================================`));
    console.table(res);
    console.log(chalk.blue.bold(`====================================================================================`));
    promptUser();
  });
};

const viewAllRoles = () => {
  let sql = `SELECT role.id AS 'Role ID', 
              title AS Title,
              FORMAT(salary, 'C0') AS Salary,
              dept_name AS Department
              FROM role
              JOIN department on dept_id = department.id
              ORDER BY dept_name`;

  db.query(sql, (err, res) => {
    if (err) throw err;
    console.log(' ');
    console.log(chalk.blue.bold(`====================================================================================`));
    console.log(`                              ` + chalk.cyanBright.bold(`Roles:`));
    console.log(chalk.blue.bold(`====================================================================================`));
    console.table(res);
    console.log(chalk.blue.bold(`====================================================================================`));
    promptUser();
  });
};

const viewDepartmentBudget = () => {
  let sql = `SELECT dept_name as Department, 
              COUNT(employee.id) AS Employees, 
              FORMAT(SUM(salary), 'c0') as 'Dept Budget'
              FROM employee
              JOIN role ON employee.role_id = role.id
              JOIN department ON role.dept_id = department.id
              GROUP BY dept_name`;

  db.query(sql, (err, res) => {
    if (err) throw err;
    console.log(' ');
    console.log(chalk.blue.bold(`====================================================================================`));
    console.log(`                              ` + chalk.cyanBright.bold(`Departmental Budgets:`));
    console.log(chalk.blue.bold(`====================================================================================`));
    console.table(res);
    console.log(chalk.blue.bold(`====================================================================================`));
    promptUser();
  });
};



// ++++++++++++++++++++++++++++++++     DELETE  FUNCTIONS  ++++++++++++++++++++++++++++++++
// remove a department
const removeDepartment = () => {
  let sql =   `SELECT id, dept_name FROM department`;

  db.query(sql, (err, response) => {
    if (err) throw error;
    let departmentNamesArray = [];
    response.forEach((department) => {departmentNamesArray.push(department.dept_name);});

    inquirer
    .prompt([
      {
        name: 'chosenDept',
        type: 'list',
        message: 'Which department would you like to remove?',
        choices: departmentNamesArray
      }
    ])
    .then((answer) => {
      let departmentId;

      response.forEach((department) => {
        if (answer.chosenDept === department.dept_name) {
          departmentId = department.id;
        }
      });

        let sql =     `DELETE FROM department WHERE department.id = ?`;
        db.query(sql, [departmentId], (error) => {
          if (error) throw error;
          console.log(chalk.redBright.bold(`====================================================================================`));
          console.log(chalk.redBright(`Department Successfully Removed`));
          console.log(chalk.redBright.bold(`====================================================================================`));
          viewAllDepartments();
        });
      });
  });
};


const removeEmployee = () => {
  console.log('function: addEmployee');
};


// Delete a Role
const removeRole = () => {
  let sql = `SELECT role.id, role.title FROM role`;

  db.query(sql, (err, response) => {
    if (err) throw err;
    let roleNamesArray = [];
    response.forEach((role) => {roleNamesArray.push(role.title);});

    inquirer
      .prompt([
        {
          name: 'chosenRole',
          type: 'list',
          message: 'Which role would you like to remove?',
          choices: roleNamesArray
        }
      ])
      .then((answer) => {
        let roleId;

        response.forEach((role) => {
          if (answer.chosenRole === role.title) {
            roleId = role.id;
          }
        });

        let sql =   `DELETE FROM role WHERE role.id = ?`;
        db.query(sql, [roleId], (err) => {
          if (err) throw err;
          console.log(chalk.redBright.bold(`====================================================================================`));
          console.log(chalk.cyanBright(`Role Successfully Removed`));
          console.log(chalk.redBright.bold(`====================================================================================`));
          viewAllRoles();
        });
      });
  });
};



// ++++++++++++++++++++++++++++++++     UPDATE  FUNCTIONS  ++++++++++++++++++++++++++++++++

const updateEmployeeRole = () => {
  console.log('function: updateEmployeeRole');
};

const updateEmployeeManager = () => {
  console.log('function: updateEmployeeManager');
};




// ++++++++++++++++++++++++++++++++     ADD  FUNCTIONS  ++++++++++++++++++++++++++++++++

const addEmployee = () => {
  console.log('function: viewAllEmployees');
};

const addRole = () => {
  console.log('function: addRole');
};

const addDepartment = () => {
  console.log('function: addDepartment');
};





// Start server after DB connection
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    promptUser();   
  });
});