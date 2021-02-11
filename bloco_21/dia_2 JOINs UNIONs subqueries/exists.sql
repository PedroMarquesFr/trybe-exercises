-- Use o banco de dados hotel para realizar os desafios a seguir:
-- Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros que ainda não foram emprestados.
SELECT * FROM Books_Lent;
SELECT * FROM Books;

SELECT Id, Title FROM Books AS b
WHERE NOT EXISTS (
	SELECT * FROM Books_Lent
    WHERE book_id = b.Id
);

-- Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros estão atualmente emprestados e que contêm a palavra "lost" no título.
SELECT * FROM Books_Lent;
SELECT * FROM Books;

SELECT Id, Title FROM Books AS b
WHERE EXISTS (
	SELECT * FROM Books_Lent
    WHERE returned = 0
) AND Title LIKE "%lost%";

-- Usando a tabela carsales e customers , exiba apenas o nome dos clientes que ainda não compraram um carro.
SELECT * FROM CarSales;
SELECT * FROM Customers;

SELECT `Name` FROM Customers
WHERE NOT EXISTS (
	SELECT * FROM CarSales
    WHERE CustomerID = Customers.CustomerId
);

-- Usando o comando EXISTS em conjunto com JOIN e as tabelas cars , customers e carsales , exiba o nome do cliente e o modelo do carro de todos os clientes que fizeram compras de carros.
SELECT * FROM CarSales;
SELECT * FROM Customers;
SELECT * FROM Cars;

SELECT cli.Name, cs.CustomerID,(SELECT `Name` FROM Cars WHERE Cars.Id = cs.CarID)
FROM Customers AS cli
INNER JOIN CarSales AS cs ON cli.CustomerID  = cs.CustomerID;

