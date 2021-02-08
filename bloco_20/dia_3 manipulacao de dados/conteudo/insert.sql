-- DICA DE UMA ESTRUTURA USANDO INSERT
-- INSERT INTO tabelaA (coluna1, coluna2)
--     SELECT tabelaB.coluna1, tabelaB.coluna2
--     FROM tabelaB
--     WHERE tabelaB.nome_da_coluna <> 'algumValor'
--     ORDER BY tabelaB.coluna_de_ordenacao;


-- Insira um novo funcionário na tabela sakila.staff .
SELECT * FROM sakila.staff;
INSERT INTO sakila.staff (first_name, last_name, email, active, username, password, address_id, store_id)
VALUES	("joao", "seila", "joaoseila@gmail.com", 1, 'jaosei', 'jao123', 2, 1); -- Para saber quais campos são obrigatórios, clique com o botão direito na tabela sakila.staff e selecione "Table Inspector". Clique na aba "columns" e verifique quais campos aceitam nulos para te guiar. Lembre-se de que valores que são gerados automaticamente não precisam ser inseridos manualmente. Boa explorada!

-- Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query .
SELECT * FROM sakila.staff;
INSERT INTO sakila.staff (first_name, last_name, email, active, username, password, address_id, store_id)VALUES	
("maria", "seila", "mari@gmail.com", 1, 'mar', 'mar123', 2, 1),
("cleyson", "seila", "claei2231@gmail.com", 1, 'Cley', 'disa876dagsdisaÏ&*&F%&GFui', 2, 1);

-- Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor.
SELECT * FROM sakila.actor;
SELECT * FROM sakila.customer;

INSERT INTO sakila.actor (first_name, last_name)
    SELECT first_name, last_name
    FROM sakila.customer
    ORDER BY customer_id
    LIMIT 5;

-- Cadastre três categorias de uma vez só na tabela sakila.category .
SELECT * FROM sakila.category;
INSERT INTO sakila.category (name)
VALUES ('cat1'), ('cat2'), ('cat3');

-- Cadastre uma nova loja na tabela sakila.store .
SELECT * FROM sakila.store;

INSERT INTO sakila.store (manager_staff_id, address_id)
VALUES (3,3);