INSERT INTO department (department_name) values ("management"), ("finance"), ("hr");

INSERT INTO role (title, salary, department_id) values ("business analyst", 50000, 1), ("financial analyst", 50000, 2), ("senior recruiter", 60000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) values ("john", "smith", 1, NULL), ("jeff", "long", 2, NULL), ("john", "doe", 1, 1), ("ashley", "brown", 2, 2);