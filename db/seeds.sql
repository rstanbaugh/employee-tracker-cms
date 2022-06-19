# this is a comment
-- so is this
/* so is this*/

INSERT INTO department (id, dept_name)
VALUES
  (1, 'Executive'),
  (2, 'Accounting'),
  (3, 'Operations'),
  (4, 'Sales'),
  (5, 'IT');

INSERT INTO role (id, title, salary, dept_id)
VALUES
  (1, 'Manager', '250000', 1),
  (2, 'Manager', '100000', 2),
  (3, 'Manager', '125000', 3),
  (4, 'Manager', '200000', 4),
  (5, 'Manager', '200000', 5),
  (6, 'Accountant', '50000', 2),
  (7, 'Associate', '100000', 3),
  (8, 'Associate', '150000', 4),
  (9, 'Engineer', '150000', 4),
  (10, 'Engineer', '150000', 5);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
  (1, 'James', 'Fraser', 1, NULL),
  (2, 'Jack', 'London', 1, 1),
  (3, 'Robert', 'Bruce', 1, 1),
  (4, 'Peter', 'Greenway', 1, 1),
  (5, 'Derek', 'Jarman', 1, 1),
  (6, 'Paolo', 'Pasolini', 3, 2),
  (7, 'heathcote', 'Williams', 3, 2),
  (8, 'Dsandy', 'Powell', 2, 3),
  (9, 'Emil', 'Zola', 4, 3),
  (10, 'Sissy', 'Coalpitts', 4, 3),
  (11, 'Antionette', 'Capet', 4, 3),
  (12, 'Samuel', 'Delany', 4, 3),
  (13, 'Tony', 'Duvert', 4, 4),
  (14, 'Dennis', 'Cooper', 4, 4),
  (15, 'Monica', 'Bellucci', 4, 4),
  (16, 'Samuel', 'Johnson', 4, 4),
  (17, 'John', 'Dryden', 4, 4),
  (18, 'Alexander', 'Pope', 4, 4),
  (19, 'Leionel', 'Johnson', 4, 4),
  (20, 'Aubrey', 'Beardsley', 2, 5),
  (21, 'Tulse', 'Luper', 2, 5),
  (22, 'William', 'Morris', 2, 5),
  (23, 'George', 'Shaw', 2, 5),
  (24, 'Arnold', 'Bennett', 2, 5);
