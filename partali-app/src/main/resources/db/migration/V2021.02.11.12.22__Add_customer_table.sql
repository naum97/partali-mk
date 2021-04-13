-- *************** SqlDBM: PostgreSQL ****************;
-- ***************************************************;


-- ************************************** "user"

CREATE TABLE customer
(
 id            bigint NOT NULL GENERATED ALWAYS AS IDENTITY (START 1),
 email_address text NOT NULL UNIQUE,
 address       text NOT NULL,
 first_name    varchar(50) NOT NULL,
 last_name     varchar(50) NOT NULL,
 date_of_birth date NOT NULL,
 phone         varchar(50) NOT NULL,
 password      varchar(50) NOT NULL,
 CONSTRAINT PK_user PRIMARY KEY ( id )
);







