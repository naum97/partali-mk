CREATE TABLE collection_colors
(
 color_id        bigint NOT NULL,
 collection_id       bigint NOT NULL,
 CONSTRAINT FK_155 FOREIGN KEY ( color_id ) REFERENCES product_colors ( id ),
 CONSTRAINT FK_156 FOREIGN KEY ( collection_id ) REFERENCES product_collection ( id )
);