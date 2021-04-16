CREATE TABLE collection_sizes
(
 size_id           bigint NOT NULL,
 collection_id       bigint NOT NULL,
 CONSTRAINT FK_157 FOREIGN KEY ( size_id ) REFERENCES product_sizes ( id ),
 CONSTRAINT FK_158 FOREIGN KEY ( collection_id ) REFERENCES product_collection ( id )
);