-- Encontre o nome, sobrenome e e-mail dos clientes com os seguintes sobrenomes: hicks, crawford, henry, boyd, mason, morales e kennedy, ordenados por nome em ordem alfabética.
SELECT first_name, email FROM sakila.customer WHERE first_name IN ('hicks', 'crawford', 'henry', 'BOYD', 'mason', 'morales', 'kennedy') ORDER BY first_name;
-- Encontre o e-mail dos clientes com os address_id 172, 173, 174, 175 e 176, ordenados em ordem alfabética.
SELECT email FROM sakila.customer WHERE address_id IN (172, 173, 174, 175, 176) ORDER BY email;
-- Descubra quantos pagamentos foram feitos entre 01/05/2005 e 01/08/2005. Lembre-se de que, no banco de dados, as datas estão armazenadas no formato ano/mês/dia, diferente do formato brasileiro, que é dia/mês/ano.
SELECT * FROM sakila.payment;
SELECT COUNT(*) FROM sakila.payment WHERE payment_date BETWEEN '2005-05-01' AND '2005-08-01';
-- Encontre o título, ano de lançamento e duração do empréstimo de todos os filmes com a duração de empréstimo de 3 a 6. Os resultados devem ser classificados em filmes com maior duração de empréstimo primeiro.
SELECT * FROM sakila.film WHERE  rental_duration BETWEEN 3 AND 6;
-- Monte um relatório que exiba o título e classificação dos 500 primeiros filmes direcionados para menores de idade. Os resultados devem estar ordenados por classificação mais abrangente primeiro.
SELECT title, rental_rate FROM sakila.film WHERE rating IN ('G', 'PG', 'PG-13') ORDER BY rating LIMIT 500;