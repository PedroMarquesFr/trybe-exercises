-- Quantos aluguéis temos com a data de retorno 2005-08-29 ? Há múltiplas maneiras possíveis de encontrar a resposta.
SELECT * FROM sakila.rental WHERE DATE(return_date) = '2005-08-29';
SELECT * FROM sakila.rental WHERE return_date LIKE '2005-08-29%';
-- Quantos filmes foram alugados entre 01/07/2005 e 22/08/2005 ?
SELECT * FROM sakila.rental WHERE DATE(rental_date) BETWEEN '2005-07-01' AND '2005-07-21';
-- Usando a tabela rental , extraia data, ano, mês, dia, hora, minuto e segundo dos registros com rental_id = 10330.
SELECT rental_date AS 'data, ano, mês, dia, hora, minuto e segundo' FROM sakila.rental WHERE rental_id = 10330;
-- Monte uma query que encontre o id e a data de aluguel do filme que foi alugado no dia 18/08/2005 às 00:14:03.
SELECT rental_id, rental_date FROM sakila.rental WHERE rental_date = '2005-08-18 00:14:03';
