-- https://www.w3resource.com/mysql-exercises/string-exercises/

-- https://www.w3resource.com/mysql-exercises/date-time-exercises/ ?

USE hr;

-- 1. Write a query to get the job_id and related employee's id.
SELECT job_id, GROUP_CONCAT(employee_id, ' ')  'Employees ID' 
FROM employees GROUP BY job_id;

-- 2. Write a query to update the portion of the phone_number in the employees table, within the phone number the substring '124' will be replaced by '999'.
SELECT REPLACE(PHONE_NUMBER, 123, 999) FROM employees;

-- 3. Write a query to get the details of the employees where the length of the first name greater than or equal to 8.
SELECT * FROM employees
WHERE length(FIRST_NAME) >= 8;

-- 4. Write a query to display leading zeros before maximum and minimum salary.
SELECT job_id,  LPAD( max_salary, 7, '0') ' Max Salary',
LPAD( min_salary, 7, '0') ' Min Salary' 
FROM jobs;

-- 5. Write a query to append '@example.com' to email field.
SELECT CONCAT(email, '@example.com') FROM employees;

SET SQL_SAFE_UPDATES = 0;
UPDATE employees SET email = CONCAT(email, '@example.com');

-- 6. Write a query to get the employee id, first name and hire month.
SELECT EMPLOYEE_ID, FIRST_NAME, MONTH(HIRE_DATE) AS hire_month FROM employees;

-- 7. Write a query to get the employee id, email id (discard the last three characters).
SELECT employee_id, REVERSE(SUBSTR(REVERSE(email), 4)) as Email_ID 
from employees;

-- 8. Write a query to find all employees where first names are in upper case. 
SELECT UCASE(FIRST_NAME)
from employees;

SELECT * FROM employees 
WHERE first_name = BINARY UPPER(first_name);

-- 9. Write a query to extract the last 4 character of phone numbers.
SELECT RIGHT(PHONE_NUMBER, 4) FROM employees;

-- 10. Write a query to get the last word of the street address.
SELECT RIGHT(street_address, 1) FROM locations;

SELECT location_id, street_address, 
SUBSTRING_INDEX(REPLACE(REPLACE(REPLACE(street_address,',',' '),')',' '),'(',' '),' ',-1) 
AS 'Last--word-of-street_address' 
FROM locations;

-- 11. Write a query to get the locations that have minimum street length.