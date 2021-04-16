-- *************** SqlDBM: PostgreSQL ****************;
-- ***************************************************;


-- ************************************** product_collection

CREATE TABLE product_collection
(
 id bigint NOT NULL GENERATED ALWAYS AS IDENTITY (START 1),
 collection text NOT NULL,
 CONSTRAINT PK_product_collection PRIMARY KEY ( id )
);





