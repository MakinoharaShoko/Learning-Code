-- 注意：这是初始化数据库的代码！！！非初始化不要使用！
-- 注意：取消下一行的注释将会删除数据库！
-- DROP TABLE IF EXISTS Customers;
CREATE TABLE Customers (
    CustomerID INT,
    CompanyName TEXT,
    PRIMARY KEY (`CustomerID`)
);
INSERT INTO Customers (CustomerID, CompanyName)
VALUES (1, 'Mahiru SHiina');