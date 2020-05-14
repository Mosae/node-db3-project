-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT categoryID, productname FROM [Products]

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT orders.OrderId, Shippers.ShipperName, orders.orderDate FROM [Orders]
INNER JOIN Shippers
where orders.OrderDate 

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT ProductName, OrderId, Unit FROM [Products]
JOIN Orders
Where OrderId is 10251
order by ProductName
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT OrderID, CustomerName, LastName FROM [Orders]
JOIN Customers, Employees