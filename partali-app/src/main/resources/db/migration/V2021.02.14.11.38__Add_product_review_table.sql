-- *************** SqlDBM: PostgreSQL ****************;
-- ***************************************************;


-- ************************************** product_review

CREATE TABLE product_review
(
 id         bigint NOT NULL GENERATED ALWAYS AS IDENTITY (START 1),
 customer_id    bigint NOT NULL,
 product_id bigint NOT NULL,
 rating     text NOT NULL,
 comment    text NOT NULL,
 "timestamp"     timestamp with time zone NOT NULL,
 image_ref  varchar(50) NOT NULL,
 CONSTRAINT PK_product_review PRIMARY KEY ( id ),
 CONSTRAINT FK_128 FOREIGN KEY ( customer_id ) REFERENCES customer ( id ),
 CONSTRAINT FK_95 FOREIGN KEY ( product_id ) REFERENCES product ( id )
);

CREATE INDEX fkIdx_129 ON product_review
(
 customer_id
);

CREATE INDEX fkIdx_96 ON product_review
(
 product_id
);







