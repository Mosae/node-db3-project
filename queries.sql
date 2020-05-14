-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT  ProductName, CategoryName FROM [Products]
JOIN Category
ON CategoryID = Category.id;
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
-- SELECT orders.OrderId, Shippers.ShipperName, orders.orderDate FROM [Orders]
-- INNER JOIN Shippers
-- where orders.OrderDate 
SELECT p.productName, o.quantity FROM [OrderDetail] as o
JOIN [Product] as p
on p.id = o.ProductId
Where o.OrderId = 10251
order by p.ProductName;

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT ProductName, Quantity
    FROM Products
    JOIN OrderDetails
    ON Products.Id = OrderDetails.ProductId
    WHERE OrderDetails.OrderId = '10251'
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
   SELECT CompanyName, LastName as EmployeesLastName, [Order].Id
    FROM [Order]
    JOIN Employee
    ON Employee.Id = [Order].EmployeeId
    JOIN Customer
    ON Customer.Id = [Order].CustomerId  