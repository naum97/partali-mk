-- add suppliers
INSERT INTO supplier(name, address, registration_date, email, phone_number)
VALUES ('Shop 1', 'Address 1', '2007-12-03 10:15:30+00', 'some@email', '+38970238142');

INSERT INTO supplier(name, address, registration_date, email, phone_number)
VALUES ('Shop 2', 'Address 2', '2007-12-03 10:15:30+00', 'some@email2', '+38970238142');

--add categories
INSERT INTO product_collection(collection)
VALUES ('Маици');

INSERT INTO product_collection(collection)
VALUES ('Сакоа');

INSERT INTO product_collection(collection)
VALUES ('Јакни');

INSERT INTO product_collection(collection)
VALUES ('Капути');


--add colors
INSERT INTO product_colors(product_color)
VALUES ('Red');

INSERT INTO product_colors(product_color)
VALUES ('Green');

INSERT INTO product_colors(product_color)
VALUES ('Blue');

--add sizes
INSERT INTO product_sizes(product_size)
VALUES ('XS');

INSERT INTO product_sizes(product_size)
VALUES ('S');

INSERT INTO product_sizes(product_size)
VALUES ('M');

INSERT INTO product_sizes(product_size)
VALUES ('L');

INSERT INTO product_sizes(product_size)
VALUES ('XL');
