-- o fulltext index nao pode ser  acessado com where usa outra coisa que esqueci
-- e tambem em uma busca ele filtra um texto por normalizacao e nao por exatidao, ou seja, ele vai procurar semenhantes

-- Criando um índice em uma coluna
CREATE [INDEX | FULLTEXT INDEX | UNIQUE INDEX] nome_indice
ON tabela (coluna);

-- Criando um índice composto, em duas ou mais colunas
CREATE [INDEX | FULLTEXT INDEX | UNIQUE INDEX] nome_indice
ON tabela (coluna1, coluna2);

-- Excluindo índices
DROP INDEX nome_do_indice ON tabela;