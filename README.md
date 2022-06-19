


AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: 
  1. view all departments, 
  2. view all roles, 
  3. view all employees, 
  4. add a department, 
  5. add a role, 
  6. add an employee, and 
  7. update an employee role

1. WHEN I choose to view all departments
THEN I am presented with a formatted table showing 
- x department names and 
- x department ids

2. WHEN I choose to view all roles
THEN I am presented with the 
- x job title, 
- x role id, the 
- x department that role belongs to, and the 
- x salary for that role

3. WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including
- x employee ids, 
- x first names, 
- x last names, 
- x job titles, 
- x departments, 
- x salaries, and 
- x managers that the employees report to

4. WHEN I choose to add a department
THEN I am prompted to enter the 
- name of the department and that department is added to the database

5. WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

6. WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

7. WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database