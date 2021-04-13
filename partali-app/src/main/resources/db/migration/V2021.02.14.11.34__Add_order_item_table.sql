-- *************** SqlDBM: PostgreSQL ****************;
-- ***************************************************;


-- ************************************** order_item

CREATE TABLE order_item
(
 id            bigint NOT NULL GENERATED ALWAYS AS IDENTITY (START 1),
 product_id    bigint NOT NULL,
 product_order_id      bigint NOT NULL,
 amount        bigint NOT NULL,
 price         bigint NOT NULL,
 CONSTRAINT PK_table_25 PRIMARY KEY ( id ),
 CONSTRAINT FK_99 FOREIGN KEY ( product_id ) REFERENCES product ( id ),
 CONSTRAINT FK_105 FOREIGN KEY ( product_order_id ) REFERENCES product_order ( id )
);

CREATE INDEX fkIdx_100 ON order_item
(
 product_id
);

CREATE INDEX fkIdx_106 ON order_item
(
 product_order_id
);







