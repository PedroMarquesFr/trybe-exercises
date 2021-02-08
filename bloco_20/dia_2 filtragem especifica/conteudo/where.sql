USE sakila;

-- OPERADOR - DESCRIÇÃO
-- =   IGUAL
-- >   MAIOR QUE
-- <   MENOR QUE
-- >=  MAIOR QUE OU IGUAL
-- <=  MENOR QUE OU IGUAL
-- <>  DIFERENTE DE
-- AND OPERADOR LÓGICO E
-- OR  OPERADOR LÓGICO OU
-- NOT NEGAÇÃO
-- IS  COMPARA COM VALORES BOOLEANOS (TRUE, FALSE, NULL)


-- A tabela a seguir é um guia de como a classificação indicativa é usada no banco de dados sakila . Consulte-a ao fazer os desafios propostos.
-- G = permitido para todos
-- PG = permitido para crianças menores de 13 anos
-- PG-13 = permitido para pessoas com mais de 13 anos
-- R = permitido para pessoas com mais de 17 anos
-- NC-17 = permitido apenas para adultos


-- Precisamos identificar o cliente com o e-mail LEONARD.SCHOFIELD@sakilacustomer.org .
SELECT * FROM  customer WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';
-- Precisamos de um relatório dos nomes, em ordem alfabética, dos clientes que não estão mais ativos no nosso sistema e pertencem à loja com o id 2. Porém, não inclua o cliente KENNETH no resultado.
SELECT * FROM  customer WHERE active = 0 AND store_id = 2 AND first_name <> 'KENNETH' ORDER BY first_name;
-- O setor financeiro quer saber nome, descrição, ano de lançamento e quais são os 100 filmes com o maior custo de substituição, do valor mais alto ao mais baixo, entre os filmes feitos para menores de idade e que têm o custo mínimo de substituição de $18,00 dólares.
SELECT * FROM film;
SELECT title, description, release_year, replacement_cost FROM film 
WHERE (rating = 'G' OR rating = 'PG' OR rating = 'PG-13') AND replacement_cost >= 18
ORDER BY replacement_cost DESC 
LIMIT 100;
-- Quantos clientes estão ativos e na loja 1?
SELECT COUNT(store_id) AS 'Clientes Ativos' FROM customer WHERE store_id = 1 ;
-- Mostre todos os detalhes dos clientes que não estão ativos na loja 1.
SELECT * FROM customer;
SELECT * from customer WHERE active = 0;
-- Precisamos descobrir quais são os 50 filmes feitos para maiores de 17 anos e adultos com a menor taxa de aluguel, para que possamos fazer uma divulgação melhor desses filmes.
SELECT * FROM  film WHERE rating='NC-17' OR rating='R' 
ORDER BY replacement_cost
LIMIT 50;
