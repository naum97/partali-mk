CREATE TABLE collection_product
(
 product_id          bigint NOT NULL,
 collection_id       bigint NOT NULL,
 CONSTRAINT FK_137 FOREIGN KEY ( product_id ) REFERENCES product ( id ),
 CONSTRAINT FK_138 FOREIGN KEY ( collection_id ) REFERENCES product_collection ( id )
);