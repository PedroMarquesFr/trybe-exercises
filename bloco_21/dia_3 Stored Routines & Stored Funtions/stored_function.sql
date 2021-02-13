-- Utilizando a tabela sakila.payment , monte uma function que retorna a quantidade total de pagamentos feitos até o momento por um determinado customer_id .
SELECT * FROM payment;
SELECT customer_id, COUNT(*), SUM(amount) FROM payment GROUP BY customer_id;
SELECT COUNT(*) FROM payment GROUP BY customer_id;

DELIMITER $$ 
CREATE FUNCTION TotalPayments(customer_idi int)
RETURNS INT READS SQL DATA
BEGIN
	DECLARE totalPayments INT;
    
    SELECT COUNT(*) FROM payment WHERE customer_id = customer_idi
    INTO totalPayments;
    RETURN totalPayments;
END $$

DELIMITER ;

SELECT TotalPayments(5);

-- Crie uma function que, dado o parâmetro de entrada inventory_id , retorna o nome do filme vinculado ao registro de inventário com esse id.
SELECT * FROM film;
SELECT i.inventory_id, (SELECT title FROM film WHERE film_id = i.film_id) FROM inventory i;

DELIMITER $$ 
CREATE FUNCTION returnNameInv(inv_id int)
RETURNS VARCHAR(200) READS SQL DATA
BEGIN
	DECLARE filmName VARCHAR(200);
    
    SELECT CONCAT(i.inventory_id, ' ', (SELECT title FROM film WHERE film_id = i.film_id)) 
    FROM inventory i
    WHERE i.inventory_id = inv_id
    INTO filmName;
    RETURN filmName;
END $$

DELIMITER ;

SELECT returnNameInv(11);

-- Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action' , 'Horror' ) e retorna a quantidade total de filmes registrados nessa categoria.
SELECT c.name, COUNT(fc.category_id) FROM category as c
INNER JOIN film_category as fc ON fc.category_id = c.category_id
WHERE c.name = 'Music'
GROUP BY c.name;

DELIMITER $$ 
CREATE FUNCTION CategoryMovie(categ VARCHAR(200))
RETURNS INT READS SQL DATA
BEGIN
	DECLARE amountOfMovies INT;
    
	SELECT COUNT(fc.category_id) FROM category as c
	INNER JOIN film_category as fc ON fc.category_id = c.category_id
	WHERE c.name = categ
	GROUP BY c.name
    INTO amountOfMovies;
    
    RETURN amountOfMovies;
END $$

DELIMITER 


SELECT CategoryMovie('Action');

SELECT * FROM category;
SELECT * FROM film_category ;
SELECT * FROM film;

