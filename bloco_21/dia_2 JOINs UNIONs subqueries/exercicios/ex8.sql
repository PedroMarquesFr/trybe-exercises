USE sakila;
-- 6a. Use JOIN to display the first and last names, as well as the address, of each staff member. Use the tables staff and address:
SELECT * FROM sakila.address;
SELECT * FROM sakila.staff;

SELECT s.first_name, s.last_name, a.address FROM sakila.staff s
LEFT JOIN sakila.address a ON s.address_id = a.address_id;

SELECT s.first_name, s.last_name, (SELECT address FROM sakila.address WHERE address_id = s.address_id) FROM sakila.staff s; -- se aparecer esse erro: Error Code: 1241. Operand should contain 1 column(s) é pq na substring tu n colocou a coluna unica de deve retornar


-- 6b. Use JOIN to display the total amount rung up(sum) by each staff member in August of 2005. Use tables staff and payment.
SELECT * FROM sakila.staff;
SELECT * FROM sakila.payment;

SELECT s.first_name, SUM(p.amount) FROM staff s
RIGHT JOIN payment p ON s.staff_id = p.staff_id
WHERE MONTH(p.payment_date) = 08 
AND YEAR(p.payment_date) = 2005
GROUP BY s.first_name;

SELECT s.first_name, (SELECT SUM(amount) FROM sakila.payment WHERE staff_id = s.staff_id AND MONTH(payment_date) = 08 
AND YEAR(payment_date) = 2005) FROM staff s;





