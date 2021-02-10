USE hr;
SELECT * FROM  employees;
-- 1. Write a query to list the number of jobs available in the employees table. Go to the editor
SELECT COUNT(*) FROM  employees;

SELECT COUNT(DISTINCT job_id) 
FROM employees;
-- 2. Write a query to get the total salaries payable to employees
SELECT SUM(salary) 
FROM employees;
-- 3. Write a query to get the minimum salary from employees table.
SELECT MIN(salary) 
FROM employees;
-- 4. Write a query to get the maximum salary of an employee working as a Programmer.
SELECT MAX(salary) 
FROM employees WHERE JOB_ID = 'IT_PROG';
-- 5. Write a query to get the average salary and number of employees working the department 90.
SELECT AVG(salary),count(*) 
FROM employees WHERE DEPARTMENT_ID = 90;
-- 6. Write a query to get the highest, lowest, sum, and average salary of all employees.
SELECT 
MAX(salary),
MIN(salary),
SUM(salary),
AVG(salary)
FROM employees;

SELECT ROUND(MAX(salary),0) 'Maximum',
ROUND(MIN(salary),0) 'Minimum',
ROUND(SUM(salary),0) 'Sum',
ROUND(AVG(salary),0) 'Average'
FROM employees;
-- 7. Write a query to get the number of employees with the same job.
SELECT JOB_ID, COUNT(*)
FROM employees
GROUP BY JOB_ID;

-- 8. Write a query to get the difference between the highest and lowest salaries.
SELECT MAX(salary) - MIN(salary) AS diff
FROM employees;

-- 9. Write a query to find the manager ID and the salary of the lowest-paid employee for that manager.
SELECT MANAGER_ID, MIN(salary)
FROM employees
GROUP BY MANAGER_ID IS NOT NULL
ORDER BY MANAGER_ID DESC;

-- 10. Write a query to get the department ID and the total salary payable in each department.
SELECT DEPARTMENT_ID, SUM(SALARY)
FROM employees
GROUP BY DEPARTMENT_ID;

-- 11. Write a query to get the average salary for each job ID excluding programmer.
SELECT JOB_ID, AVG(SALARY)
FROM employees
GROUP BY JOB_ID
HAVING JOB_ID <> 'IT_PROG';

SELECT JOB_ID, AVG(SALARY)
FROM employees
WHERE JOB_ID <> 'IT_PROG'
GROUP BY JOB_ID;

-- 12. Write a query to get the total salary, maximum, minimum, average salary of employees (job ID wise), for department ID 90 only.
SELECT job_id, SUM(SALARY), MAX(SALARY), MIN(SALARY)
FROM employees
WHERE DEPARTMENT_ID = 90
GROUP BY job_id;

SELECT job_id, SUM(salary), AVG(salary), MAX(salary), MIN(salary)
FROM employees 
WHERE department_id = '90' 
GROUP BY job_id;

-- 13. Write a query to get the job ID and maximum salary of the employees where maximum salary is greater than or equal to $4000.
SELECT JOB_ID, MAX(SALARY)
FROM employees
WHERE SALARY >= 4000
GROUP BY JOB_ID;

SELECT job_id, MAX(salary) 
FROM employees 
GROUP BY job_id 
HAVING MAX(salary) >=4000;

-- 14. Write a query to get the average salary for all departments employing more than 10 employees.
SELECT DEPARTMENT_ID, AVG(SALARY), COUNT(*) AS num_de_empregados
FROM employees
GROUP BY DEPARTMENT_ID
HAVING num_de_empregados > 10;
