-- Crie uma view chamada film_with_categories utilizando as tabelas category , film_category e film do banco de dados sakila . Essa view deve exibir o título do filme, o id da categoria e o nome da categoria, conforme a imagem abaixo. Os resultados devem ser ordenados pelo título do filme.
SELECT * FROM film;
SELECT * FROM category;

CREATE VIEW film_with_categories AS 
	SELECT
		(SELECT title FROM film WHERE film_id = fc.film_id) 'title',
		(SELECT category_id FROM category WHERE category_id = fc.category_id) 'id',
		(SELECT name FROM category WHERE category_id = fc.category_id) 'category'
	FROM sakila.film_category AS fc;
    
SELECT * FROM film_with_categories;

-- Crie uma view chamada film_info utilizando as tabelas actor , film_actor e film do banco de dados sakila . Sua view deve exibir o actor_id , o nome completo do ator ou da atriz em uma coluna com o ALIAS actor e o título dos filmes. Os resultados devem ser ordenados pelos nomes de atores e atrizes. Use a imagem a seguir como referência.

SELECT * FROM actor;
SELECT * FROM film_actor;
SELECT * FROM film;

SELECT a.actor_id, CONCAT(a.first_name, ' ', a.last_name) 'nome', f.title FROM actor AS a
INNER JOIN film_actor AS fa ON fa.actor_id = a.actor_id
INNER JOIN film AS f ON f.film_id = fa.film_id;

CREATE VIEW film_info AS 
	SELECT a.actor_id, CONCAT(a.first_name, ' ', a.last_name) 'nome', f.title FROM actor AS a
	INNER JOIN film_actor AS fa ON fa.actor_id = a.actor_id
	INNER JOIN film AS f ON f.film_id = fa.film_id;
    
SELECT * FROM film_info;   

-- Crie uma view chamada address_info que faça uso das tabelas address e city do banco de dados sakila . Sua view deve exibir o address_id , o address , o district , o city_id e a city . Os resultados devem ser ordenados pelo nome das cidades. Use a imagem abaixo como referência.
SELECT * FROM address;
SELECT * FROM city;

SELECT a.address_id, a.address, a.district, a.city_id, (SELECT city FROM city WHERE city_id = a.city_id)
FROM address AS a;

SELECT a.address_id, a.address, a.district, a.city_id, c.city
FROM address AS a
INNER JOIN city AS c ON c.city_id = a.city_id;


CREATE VIEW address_info AS
	SELECT a.address_id, a.address, a.district, a.city_id, (SELECT city FROM city WHERE city_id = a.city_id)
	FROM address AS a;
    
SELECT * FROM address_info;  

-- Crie uma view chamada movies_languages , usando as tabelas film e language do banco de dados sakila . Sua view deve exibir o título do filme , o id do idioma e o idioma do filme , como na imagem a seguir.
SELECT language_id FROM film;
SELECT * FROM language;

CREATE VIEW movies_languages AS 
	SELECT f.title, f.language_id, l.name FROM film AS f
	INNER JOIN language AS l ON l.language_id = f.language_id;
    
SELECT * FROM movies_languages;
  
