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
  (1, 'James', 'Fraser', 1, 1),
  (2, 'Jack', 'London', 1, 1),
  (3, 'Robert', 'Bruce', 1, 1),
  (4, 'Peter', 'Greenway', 1, 1),
  (5, 'Derek', 'Jarman', 1, 1),
  (6, 'Paolo', 'Pasolini', 6, 2),
  (7, 'heathcote', 'Williams', 6, 2),
  (8, 'Dsandy', 'Powell', 7, 3),
  (9, 'Emil', 'Zola', 7, 3),
  (10, 'Sissy', 'Coalpitts', 7, 3),
  (11, 'Antionette', 'Capet', 7, 3),
  (12, 'Samuel', 'Delany', 7, 3),
  (13, 'Tony', 'Duvert', 9, 4),
  (14, 'Dennis', 'Cooper', 8, 4),
  (15, 'Monica', 'Bellucci', 8, 4),
  (16, 'Samuel', 'Johnson', 8, 4),
  (17, 'John', 'Dryden', 8, 4),
  (18, 'Alexander', 'Pope', 8, 4),
  (19, 'Leionel', 'Johnson', 8, 4),
  (20, 'Aubrey', 'Beardsley', 10, 5),
  (21, 'Tulse', 'Luper', 10, 5),
  (22, 'William', 'Morris', 10, 5),
  (23, 'George', 'Shaw', 10, 5),
  (24, 'Arnold', 'Bennett', 10, 5);
