SELECT * FROM film_actor;

-- 1. Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator ou atriz e a quantidade de filmes em que atuaram.
SELECT actor_id,(SELECT COUNT(*) FROM film_actor WHERE actor_id = a.actor_id GROUP BY actor_id) 
FROM actor AS a
ORDER BY actor_id;

SELECT a.actor_id, COUNT(fa.actor_id) FROM actor AS a
INNER JOIN film_actor AS fa ON fa.actor_id = a.actor_id
GROUP BY a.actor_id
ORDER BY COUNT(fa.actor_id) DESC
LIMIT 10;

DELIMITER $$

CREATE PROCEDURE Show10MostFamousActors(

)
BEGIN
	SELECT a.actor_id, COUNT(fa.actor_id) FROM actor AS a
	INNER JOIN film_actor AS fa ON fa.actor_id = a.actor_id
	GROUP BY a.actor_id
	ORDER BY COUNT(fa.actor_id) DESC
	LIMIT 10;
END $$

DELIMITER ;

CALL Show10MostFamousActors();

-- Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que exiba o id do filme , seu titulo , o id de sua categoria e o nome da categoria selecionada. Use as tabelas film , film_category e category para montar essa procedure.
SELECT category_id FROM category WHERE name = 'Action';

SELECT c.name, (SELECT CONCAT(film_id, ' ', title) FROM film WHERE film_id = fc.film_id ), c.category_id
FROM category AS c
INNER JOIN film_category AS fc ON fc.category_id = c.category_id
WHERE name = c.name;

DELIMITER $$

CREATE PROCEDURE ShowFilmsByCategory(
IN category_name VARCHAR(100)
)
BEGIN
SELECT c.name, (SELECT CONCAT(film_id, ' ', title) FROM film WHERE film_id = fc.film_id ), c.category_id
FROM category AS c
INNER JOIN film_category AS fc ON fc.category_id = c.category_id
WHERE name = category_name;

END $$

DELIMITER ;

CALL ShowFilmsByCategory('Action');

SELECT * FROM film;
SELECT * FROM film_category;
SELECT * FROM category;

-- Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está ou não ativo, através de um parâmetro de saída.

DELIMITER $$

CREATE PROCEDURE IsClientActive(INOUT client_email VARCHAR(100))
BEGIN
    SELECT active FROM customer
    WHERE email = client_email
    INTO client_email;

END $$

DELIMITER ;

SELECT 'ACE GOLDFINGERasdadasdsadasdasd' INTO @movie_title;
CALL NameGenerator(@movie_title);
SELECT @movie_title;

SELECT 'PATRICIA.JOHNSON@sakilacustomer.org' INTO @resp;
CALL IsClientActive(@resp);
SELECT @resp;