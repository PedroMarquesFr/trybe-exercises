SELECT cli.Name, cs.CustomerID,(SELECT `Name` FROM Cars WHERE Cars.Id = cs.CarID)
FROM Customers AS cli
INNER JOIN CarSales AS cs ON cli.CustomerID  = cs.CustomerID;