CREATE DATABASE YT;

CREATE TABLE videos(
    id INT PRIMARY KEY AUTO_INCREMENT,
    autor 
    title VARCHAR(60),
    likes INT
    dislikes INT
    datavd DATE
)

CREATE TABLE playlist(
    id INT PRIMARY KEY AUTO_INCREMENT,
    videos
    title VARCHAR(60)
)

CREATE TABLE SEO(
    id INT PRIMARY KEY AUTO_INCREMENT,
    categorys
)

CREATE TABLE autor(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(35)
)