-- *************** SqlDBM: PostgreSQL ****************;
-- ***************************************************;


-- ************************************** product_order

CREATE TABLE product_order
(
 id               bigint NOT NULL GENERATED ALWAYS AS IDENTITY (START 1),
 customer_id          bigint NOT NULL,
 order_date       timestamp with time zone NOT NULL,
 tracking_number  varchar(50) NOT NULL,
 price            bigint NOT NULL,
 shipping_address text NOT NULL,
 billing_address  text NOT NULL,
 amount           bigint NOT NULL,
 "timestamp"      timestamp with time zone NOT NULL,
 CONSTRAINT PK_order PRIMARY KEY ( id ),
 CONSTRAINT FK_13 FOREIGN KEY ( customer_id ) REFERENCES customer ( id )
);

CREATE INDEX fkIdx_14 ON product_order
(
 customer_id
);







