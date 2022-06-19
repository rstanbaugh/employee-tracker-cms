# this is a comment
-- so is this
/* so is this*/

INSERT INTO departments (id, dept_name)
VALUES
  (1, 'Executive'),
  (2, 'Accounting'),
  (3, 'Operations'),
  (4, 'Sales'),
  (5, 'IT');

INSERT INTO roles (id, job_title, salary)
VALUES
  (1, 'Manager', 100000),
  (2, 'Engineer', 150000),
  (3, 'Accountant', 50000),
  (4, 'Associate', 50000);

INSERT INTO employees (id, first_name, last_name, dept_id, role_id, manager_id)
VALUES
  (1, 'James', 'Fraser', 1, 1, NULL),
  (2, 'Jack', 'London', 2, 1, 1),
  (3, 'Robert', 'Bruce', 3, 1, 1),
  (4, 'Peter', 'Greenaway', 4, 1, 1),
  (5, 'Derek', 'Jarman', 5, 1, 1),
  (6, 'Paolo', 'Pasolini', 2, 3, 2),
  (7, 'Heathcote', 'Williams', 2, 3, 2),
  (8, 'Sandy', 'Powell', 3, 2, 3),
  (9, 'Emil', 'Zola', 3, 4, 3),
  (10, 'Sissy', 'Coalpits', 3, 4, 3),
  (11, 'Antoinette', 'Capet',3, 4, 3),
  (12, 'Samuel', 'Delany', 3, 4, 3),
  (13, 'Tony', 'Duvert', 4, 3, 4),
  (14, 'Dennis', 'Cooper', 4, 4, 4),
  (15, 'Monica', 'Bellucci',  4, 4, 4),
  (16, 'Samuel', 'Johnson',  4, 4, 4),
  (17, 'John', 'Dryden', 4, 4, 4),
  (18, 'Alexander', 'Pope',  4, 4, 4),
  (19, 'Lionel', 'Johnson',  4, 4, 4),
  (20, 'Aubrey', 'Beardsley',  5, 2, 5),
  (21,'Tulse', 'Luper', 5, 2, 5),
  (22, 'William', 'Morris',  5, 2, 5),
  (23, 'George', 'Shaw',  5, 2, 5),
  (24, 'Arnold', 'Bennett',  5, 2, 5);
