DROP DATABASE IF EXISTS bamazonDB;
CREATE database  bamazonDB;

USE  bamazonDB;

CREATE TABLE products(

    item_id INT NOT NULL,
    product_name VARCHAR(100) NULL,
    department_name VARCHAR(100) NULL,
    price FLOAT(10,2) NULL, 
    stock_quantity INT NULL,
	PRIMARY KEY (item_id)
);




INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (0001, "The Flash t-shirt", "clothing", 15.55, 5);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (0101, "Supergirl doll", "toys", 25.01, 1);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (0201, "Batman vs Superman", "movies", 20.78, 9);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (0301, "superman ring", "jeweley", 30.55, 3);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (0401, "Batwoman Comic", "books", 4.25, 15);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (0501, "Harry potter Lamp", "electronics", 65.55, 5);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (0601, "Harry Potter 1-8", "movies", 99.85, 3);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (0701, "Wands", "toys", 40.09, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (0801, "Wonder Women t-shirt", "clothing", 17.55, 20);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (0901, "Walking Death t-shirt", "clothing", 12.55, 70);

SELECT *FROM products;

ALTER USER 'root@localhost' IDENTFIED WITH mysql_native_password BY 'root';