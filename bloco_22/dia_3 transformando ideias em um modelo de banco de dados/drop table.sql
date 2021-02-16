
DROP TABLE nome_da_tabela;


SHOW COLUMNS FROM sakila.language;
-- Ao executar o comando, você verá que ele não funciona, retornando a seguinte mensagem de erro:
-- Error Code: 3730. Cannot drop table 'language' referenced by a foreign key constraint 'fk_film_language' on table 'film'
-- Isso acontece em função de as informações da tabela language serem utilizadas na tabela film . Caso tente dropar a tabela film , você perceberá que ela também possui restrições. Essas restrições estão relacionadas ao conceito de integridade referencial, que deve ser considerado quando se cria um banco de dados. Elas têm o intuito de evitar que tabelas sejam excluídas acidentalmente.
-- Então, lembre-se: nem todas as tabelas podem (ou devem) ser dropadas diretamente. É necessário avaliar as restrições existentes naquela tabela para entender o que pode ser feito e como deve ser feito, caso precise excluí-la.