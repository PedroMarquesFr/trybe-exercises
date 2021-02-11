SELECT cus.name, car.name
FROM Cars car
INNER JOIN Customers cus
WHERE EXISTS(
    SELECT *
    FROM CarSales
    WHERE CustomerID = cus.CustomerId
    AND carID = car.ID
);