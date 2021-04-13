-- *************** SqlDBM: PostgreSQL ****************;
-- ***************************************************;


-- ************************************** category_sizes

CREATE TABLE category_sizes
(
 id                bigint NOT NULL GENERATED ALWAYS AS IDENTITY (START 1),
 category_id       bigint NOT NULL,
 "size"              text NOT NULL,
 CONSTRAINT PK_category_sizes PRIMARY KEY ( id ),
 CONSTRAINT FK_127 FOREIGN KEY ( category_id ) REFERENCES product_category ( id )
);

CREATE INDEX fkIdx_128 ON category_sizes
(
 category_id
);







