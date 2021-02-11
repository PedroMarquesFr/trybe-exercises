-- Vamos visualizar a diferença entre os três joins já vistos até o momento. Rode e analise cada uma das três queries a seguir. Busque notar a diferença entre as colunas da direita e da esquerda e a quantidade de dados retornados em cada query , como foi mostrado no vídeo. Gaste de 2 a 5 minutos aqui e depois continue.
-- LEFT JOIN
USE sakila;
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM customer c
LEFT JOIN actor a
ON c.last_name = a.last_name;

-- RIGHT JOIN
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM customer c
RIGHT JOIN actor a
ON c.last_name = a.last_name
ORDER BY c.last_name;

-- INNER JOIN

SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM customer c
INNER JOIN actor a
ON c.last_name = a.last_name
ORDER BY c.last_name;