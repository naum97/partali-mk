-- *************** SqlDBM: PostgreSQL ****************;
-- ***************************************************;


-- ************************************** supplier

CREATE TABLE supplier
(
 id                bigint NOT NULL GENERATED ALWAYS AS IDENTITY (START 1),
 name              text NOT NULL,
 address           text NOT NULL,
 registration_date timestamp with time zone NOT NULL,
 email             text NOT NULL,
 phone_number      varchar(50) NOT NULL,
 CONSTRAINT PK_supplier PRIMARY KEY ( id )
);







