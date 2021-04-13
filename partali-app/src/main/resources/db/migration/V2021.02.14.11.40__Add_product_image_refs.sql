-- *************** SqlDBM: PostgreSQL ****************;
-- ***************************************************;


-- ************************************** product_image_refs

CREATE TABLE product_image_refs
(
 id         bigint NOT NULL GENERATED ALWAYS AS IDENTITY (START 1),
 product_id bigint NOT NULL,
 image_ref  varchar(50) NOT NULL,
 CONSTRAINT PK_product_image_refs PRIMARY KEY ( id ),
 CONSTRAINT FK_89 FOREIGN KEY ( product_id ) REFERENCES product ( id )
);

CREATE INDEX fkIdx_90 ON product_image_refs
(
 product_id
);







