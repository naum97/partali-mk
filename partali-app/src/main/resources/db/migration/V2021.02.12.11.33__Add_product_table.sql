-- *************** SqlDBM: PostgreSQL ****************;
-- ***************************************************;


-- ************************************** product

CREATE TABLE product
(
 id              bigint NOT NULL GENERATED ALWAYS AS IDENTITY (START 1),
 supplier_id     bigint NOT NULL,
 amount_in_stock bigint NOT NULL,
 care            text,
 materials       text,
 name            text NOT NULL,
 description     text NOT NULL,
 price           bigint NOT NULL,
 CONSTRAINT PK_product PRIMARY KEY ( id ),
 CONSTRAINT FK_72 FOREIGN KEY ( supplier_id ) REFERENCES supplier ( id )
);

CREATE INDEX fkIdx_73 ON product
(
 supplier_id
);







