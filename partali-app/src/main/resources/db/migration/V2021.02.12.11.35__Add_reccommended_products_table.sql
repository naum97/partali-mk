-- *************** SqlDBM: PostgreSQL ****************;
-- ***************************************************;


-- ************************************** recommended_products

CREATE TABLE recommended_products
(
 product_id        bigint NOT NULL,
 accessory_of_week boolean NOT NULL,
 clothing_of_week  boolean NOT NULL,
 "timestamp" timestamp with time zone NOT NULL,
 CONSTRAINT PK_table_137 PRIMARY KEY ( product_id ),
 CONSTRAINT FK_137 FOREIGN KEY ( product_id ) REFERENCES product ( id )
);

CREATE INDEX fkIdx_138 ON recommended_products
(
 product_id
);