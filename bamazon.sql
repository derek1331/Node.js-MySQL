DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;

USE bamazonDB;
	
CREATE TABLE products (
	item_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price DECIMAL(6,4) NOT NULL,
    stock_quantity INT(10) NOT NULL
    
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Sunscreen", "Skincare", 11.50, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Swimsuit", "Clothing", 15.05, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Sun Hat", "Clothing", 14.99, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Beach Towel", "Outdoors", 10.35, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Surfboard", "Sports", 159, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Baked Lays BBQ Chips", "Food", 11.50, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Football", "Sports", 10.99, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Volleyball", "Sports", 12.99, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Flip Flops", "Footear", 19.99, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Bud Light (24 pack)", "Essentials", 11.50, 1);

SELECT * FROM products


