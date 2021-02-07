SELECT * FROM sakila.film
WHERE title LIKE '%do_';

-- Encontra qualquer resultado finalizando com "don"
-- WHERE title LIKE '%don';

-- Encontra qualquer resultado iniciando com "plu"
-- WHERE title LIKE 'plu%';

-- Encontra qualquer resultado que contém "plu"
-- WHERE title LIKE '%plu%';

-- Encontra qualquer resultado que inicia com "p" e finaliza com "r"
-- WHERE title LIKE 'p%r';

-- Encontra qualquer resultado em que o segundo caractere da frase é "C"
-- WHERE title LIKE '_C%';

-- Encontra qualquer resultado em que o título possui exatamente 8 caracteres
-- WHERE title LIKE '________';

-- Encontra todas as palavras com no mínimo 3 caracteres e que iniciam com E
-- WHERE title LIKE '%E__';


-- Encontre todos os detalhes dos filmes que contêm a palavra " ace " no nome.
SELECT * FROM sakila.film WHERE title LIKE "%ace%";
-- Encontre todos os detalhes dos filmes cujas descrições finalizam com " china ".
SELECT * FROM sakila.film WHERE description LIKE "%china%";
-- Encontre todos os detalhes dos dois filmes cujas descrições contêm a palavra " girl " e o título finaliza com a palavra " lord ".
SELECT * FROM sakila.film WHERE description LIKE "%china%";
-- Encontre os dois casos em que, a partir do 4° caractere no título do filme, tem-se a palavra " gon ".
SELECT title FROM sakila.film WHERE title LIKE "___gon%";
-- Encontre os dois casos em que, a partir do 4° caractere no título do filme, tem-se a palavra " gon " e a descrição contém a palavra " Documentary ".
SELECT * FROM sakila.film WHERE title LIKE "___gon%" AND description LIKE "%Documentary%";
-- Encontre os dois filmes cujos títulos ou finalizam com " academy " ou inciam com " mosquito ".
SELECT * FROM sakila.film WHERE title LIKE '%academy' OR title LIKE 'mosquito%';
-- Encontre os seis filmes que contêm as palavras " monkey " e " sumo " em suas descrições.
SELECT * FROM sakila.film WHERE description LIKE '%monkey%' OR description LIKE '%sumo%';

SELECT COUNT(*) FROM sakila.film;