-- *************** SqlDBM: PostgreSQL ****************;
-- ***************************************************;


-- ************************************** product_category

CREATE TABLE product_category
(
 id bigint NOT NULL GENERATED ALWAYS AS IDENTITY (START 1),
 category text NOT NULL,
 CONSTRAINT PK_product_category PRIMARY KEY ( id )
);





