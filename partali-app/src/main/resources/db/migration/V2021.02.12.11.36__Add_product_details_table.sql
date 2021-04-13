-- *************** SqlDBM: PostgreSQL ****************;
-- ***************************************************;


-- ************************************** product_details

CREATE TABLE product_details
(
 id                 bigint NOT NULL GENERATED ALWAYS AS IDENTITY (START 1),
 product_id         bigint NOT NULL,
 color              text NOT NULL,
 "size"             text NOT NULL,
 stock              bigint NOT NULL,
 CONSTRAINT PK_table_111 PRIMARY KEY ( id ),
 CONSTRAINT FK_85 FOREIGN KEY ( product_id ) REFERENCES product ( id )
);

CREATE INDEX fkIdx_86 ON product_details
(
 product_id
);







