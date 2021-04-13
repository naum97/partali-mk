-- *************** SqlDBM: PostgreSQL ****************;
-- ***************************************************;


-- ************************************** category_colors

CREATE TABLE category_colors
(
 id                 bigint NOT NULL GENERATED ALWAYS AS IDENTITY (START 1),
 category_id        bigint NOT NULL,
 color              text NOT NULL,
 CONSTRAINT PK_category_colors PRIMARY KEY ( id ),
 CONSTRAINT FK_120 FOREIGN KEY ( category_id ) REFERENCES product_category ( id )
);

CREATE INDEX fkIdx_121 ON category_colors
(
 category_id
);







