CREATE DATABASE IF NOT EXISTS Zoologico;
USE Zoologico;

-- CREATE TABLE artista(
-- 	art_id INT PRIMARY KEY auto_increment,
--     nome varchar(50) not null,
--     num decimal(5,2) not null,
--     seila INT not null
-- )engine=InnoDB;

CREATE TABLE animals(
	animal_id INT PRIMARY KEY auto_increment,
    specie_id INT not null,
    sex BOOL not null,
    age INT not null,
    location_id INT not null,
    FOREIGN KEY (specie_id) REFERENCES species(specie_id),
    FOREIGN KEY (location_id) REFERENCES locations(location_id)
)engine=InnoDB;

CREATE TABLE species(
	specie_id INT PRIMARY KEY auto_increment,
    name varchar(50)
)engine=InnoDB;

CREATE TABLE locations(
	location_id INT PRIMARY KEY auto_increment,
    name varchar(50)
)engine=InnoDB;