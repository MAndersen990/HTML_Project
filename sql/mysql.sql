CREATE DATABASE IF NOT EXISTS project2;
USE project2

CREATE TABLE users_information
(
    user_id tinyint not null auto_increment,
    user_first_name varchar(50),
    user_last_name varchar(50),
    user_username varchar(50) unique,
    user_email varchar(50) unique,
    uer_creation_date varchar(50),
    
    PRIMARY KEY (user_id)
);

CREATE TABLE user_passwords
(
    password_id tinyint not null auto_increment,
    password_user_id tinyint not null,
    password_plain varchar(50),
    encrypted_pass varchar(50),
    salted_pass varcahr(50),
    
    PRIMARY KEY (password_id)
);

ALTER TABLE user_passwords ADD CONSTRAINT fk_password_user_id FOREIGN KEY(password_user_id) REFERENCES users_information (user_id);