-- Escreva uma query que exiba todos os filmes cadastrados no banco de dados.
SELECT * FROM sakila.film;

-- Escreva uma query que exiba apenas o nome dos filmes, seu ano de lançamento e sua classificação .
SELECT title, release_year, rental_rate FROM sakila.film;

-- Escreva uma query que exiba apenas os sobrenomes únicos cadastrados no banco sakila .
SELECT * FROM sakila.actor;
SELECT DISTINCT last_name FROM sakila.actor;

-- Crie queries para descobrir o seguinte:
-- Quantos filmes temos cadastrados?
SELECT COUNT(*) FROM sakila.film;

-- Quantos clientes temos registrados?
SELECT COUNT(*) FROM sakila.customer;
-- Quantos sobrenomes únicos temos no banco de dados?
SELECT * FROM sakila.customer;
SELECT DISTINCT COUNT(last_name) FROM sakila.customer;

-- Quantas categorias de filmes o banco sakila possui?
SELECT COUNT(*) FROM sakila.category;

-- Quantos países são atendidos pela sakila?
SELECT COUNT(*) FROM sakila.country;

-- Vá até a tabela language do sakila e crie uma pesquisa que mostre os 5 idiomas cadastrados , mas não mostre o idioma english .
SELECT * FROM sakila.language LIMIT 5 OFFSET 1;

-- Vá até a tabela film e selecione todos os dados da tabela. Pronto, fez isso?
SELECT * FROM sakila.film;

-- Agora vamos tentar fazer o seguinte: Crie uma query para encontrar os 20 primeiros filmes , incluindo o título , o ano de lançamento , a duração , a classificação indicativa e o custo de substituição . Ordene os resultados pelos filmes com a maior duração e depois pelo menor custo de substituição.
SELECT title, release_year, rental_duration, rating, replacement_cost FROM sakila.film ORDER BY rental_duration DESC, replacement_cost LIMIT 20; 

