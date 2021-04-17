CREATE TABLE product_sizes
(
 id               bigint NOT NULL GENERATED ALWAYS AS IDENTITY (START 1),
 product_size     text NOT NULL UNIQUE,
 CONSTRAINT PK_sizes PRIMARY KEY ( id )
);