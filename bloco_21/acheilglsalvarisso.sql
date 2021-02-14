SELECT * FROM w3schools.products;
SELECT p.ProductName "Produto", 
	MIN(od.Quantity) "Mínima",
    MAX(od.Quantity) "Máxima",
    AVG(od.Quantity) AS "Média"
FROM w3schools.products AS p
INNER JOIN w3schools.order_details AS od ON od.ProductID = p.ProductID
GROUP BY p.ProductName
HAVING Média > 20;

-- É importante entender que quando usamos o HAVING estamos filtrando somente os resultados gerados após o GROUP BY ter sido executado. 
-- Por isso usar o where n funciona pq na cadeia de execucao da query ele é executado primeiro e ele não encontra o valor Média pq esse valor ainda não foi declarado
-- https://stackoverflow.com/questions/153598/unknown-column-in-where-clause

SELECT p.ProductName "Produto", 
	MIN(od.Quantity) "Mínima",
    MAX(od.Quantity) "Máxima",
    ROUND(AVG(od.Quantity), 2) AS "Média"
FROM w3schools.products AS p
INNER JOIN w3schools.order_details AS od ON od.ProductID = p.ProductID
GROUP BY p.ProductName
HAVING Média > 20
ORDER BY Média, Produto;