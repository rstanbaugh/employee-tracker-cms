Select employee.id AS 'emp_id', first_name, last_name, title, salary, dept_name, manager_id
FROM employee
JOIN role ON employee.role_id = role.id
JOIN department ON role.dept_id = department.id;
