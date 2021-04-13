-- *************** SqlDBM: PostgreSQL ****************;
-- ***************************************************;


-- ************************************** recommended_products

CREATE TABLE category_product
(
 product_id        bigint NOT NULL,
 category_id       bigint NOT NULL,
 CONSTRAINT FK_137 FOREIGN KEY ( product_id ) REFERENCES product ( id ),
 CONSTRAINT FK_138 FOREIGN KEY ( category_id ) REFERENCES product_category ( id )
);