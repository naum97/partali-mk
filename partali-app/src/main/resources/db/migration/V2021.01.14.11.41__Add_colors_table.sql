CREATE TABLE product_colors
(
 id         bigint NOT NULL GENERATED ALWAYS AS IDENTITY (START 1),
 product_color      text   NOT NULL,
 CONSTRAINT PK_colors PRIMARY KEY ( id )
);







