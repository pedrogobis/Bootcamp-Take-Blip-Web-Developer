CREATE DATABASE YT;

USE YT;
/*CRIADA */
CREATE TABLE videos(
    id_vid INT PRIMARY KEY AUTO_INCREMENT,
    fk_autor VARCHAR(30),
    title VARCHAR(60),
    likes INT,
    dislikes INT
)

/* ALIMENTANDO A TABELA*/
INSERT INTO videos (autor, title, likes, dislikes) VALUE('marta', 'SERIA O BOLSONARO UM ALIEN?', '1000000', '17');
INSERT INTO videos (autor, title, likes, dislikes) VALUE('LUIZANARCO', 'IMPOSTO É ROUBO, SAIBA COMO ROUBAR OUTRAS PESSOAS', '10', '1500');
INSERT INTO videos (autor, title, likes, dislikes) VALUE('TUDO COMIDA', 'COMO FAZER ARROZ NA FRIGIDEIRA', '10000', '120');
/*Alimentada*/
/*ZERAMOS todos os nomes dos autores e colocamos codigos neles, para poder relacionar depois*/
UPDATE videos SET autor=4 WHERE id=1;
UPDATE videos SET autor=1 WHERE id=2;
UPDATE videos SET autor=2 WHERE id=3;
UPDATE videos SET autor=3 WHERE id=4;


/*RELACIONANDO OS DADOS, agora o fk_autor vai receber os dados da tabela autor, com os dados da coluna id_autor*/
ALTER TABLE `videos` ADD CONSTRAINT `fk_autor` FOREIGN KEY (`fk_autor`) REFERENCES `autor`(`id_autor`) ON DELETE CASCADE ON UPDATE CASCADE;


/*Nesse caso vai aparecer a tabela videos, mas sem os nomes dos autores, apenas os numeros.*/
SELECT * FROM videos;


/*Agora relacionando com a tabela autor, vamos ter os ids, e os nomes de cada autor.*/
/*
LENDO:

SELECIONE TODA A TABELA VIDEOS, JUNTE COM A TABELA AUTOR, ON ONDE A TABELA  FK_AUTOR É IGUAL AO ID_AUTOR.

Ou seja, vai organizar a tabela que vai mostrar alinhando os autores com os numeros dos autores. 
*/
SELECT * FROM videos JOIN autor ON videos.fk_autor = autor.id_autor;


/* 
Aqui vou visualizar apenas o titulo na tabela video, com o nome da tabela autor

tabela.coluna   tabela.coluna
video.titulo    autor.nome
*/
SELECT videos.title, autor.nome FROM videos JOIN autor ON videos.fk_autor = autor.id_autor;

/*Inserindo mais itens*/
INSERT INTO videos (fk_autor, title, likes, dislikes) VALUE('1', 'SERIA O BOLSONARO UM ALIEN?', '1000000', '17');
INSERT INTO videos (fk_autor, title, likes, dislikes) VALUE('2', 'IMPOSTO É ROUBO, SAIBA COMO ROUBAR OUTRAS PESSOAS', '10', '1500');
INSERT INTO videos (fk_autor, title, likes, dislikes) VALUE('3', 'COMO FAZER ARROZ NA FRIGIDEIRA', '10000', '120');
INSERT INTO videos (fk_autor, title, likes, dislikes) VALUE('6', 'VEJA COMO FAZER UMA MAKE INCRIVEL', '1000000', '17');
INSERT INTO videos (fk_autor, title, likes, dislikes) VALUE('5', 'VOCE JÁ INVESTIU EM BITCOINS HJ?', '10', '1500');
INSERT INTO videos (fk_autor, title, likes, dislikes) VALUE('4', 'PISCINA DE BATATA', '10000', '120');
INSERT INTO videos (fk_autor, title, likes, dislikes) VALUE('5', 'DO 1000 A 0', '10000', '120');

/*Criamos mais uma coluna na tabela videos.*/
ALTER TABLE videos ADD fk_seo INT NOT NULL AFTER dislikes;

/*Atualizando a nova coluna com novos valores*/
UPDATE videos set fk_seo=3 WHERE id_vid=1;
UPDATE videos set fk_seo=2 WHERE id_vid=2;
UPDATE videos set fk_seo=1 WHERE id_vid=3;
UPDATE videos set fk_seo=3 WHERE id_vid=4;
UPDATE videos set fk_seo=4 WHERE id_vid=5;
UPDATE videos set fk_seo=3 WHERE id_vid=6;
UPDATE videos set fk_seo=4 WHERE id_vid=7;

/*Relacionou 3 tabelas juntas, videos, autor, e seo.*/
SELECT videos.title, autor.nome, seo.category FROM videos JOIN seo ON videos.fk_seo = seo.id_seo
JOIN autor ON videos.fk_autor = autor.id_autor;



CREATE TABLE playlist(
    id INT PRIMARY KEY AUTO_INCREMENT,
    videos
    title VARCHAR(60)
)

/*Criada*/  
CREATE TABLE SEO(
    id INT PRIMARY KEY AUTO_INCREMENT,
    categorys
)

/*atualizando a tabela*/
ALTER TABLE `seo` CHANGE `id` `id_seo` INT(11) NOT NULL AUTO_INCREMENT;

/*Filtrando ainda mais as informações */
SELECT videos.title, seo.category FROM videos JOIN seo ON videos.fk_seo = seo.id_seo; 

/*ALIMENTANDO*/
INSERT INTO seo (category) VALUE ('comida');
INSERT INTO seo (category) VALUE ('Politica');
INSERT INTO seo (category) VALUE ('Teoria da conspiração');
INSERT INTO seo (category) VALUE ('Economia');

/*Criando um relacionamento de tabelas entre o fkseo e o idseo*/
ALTER TABLE `videos` ADD CONSTRAINT `fk_seo` FOREIGN KEY (`fk_seo`) REFERENCES `seo`(`id_seo`) ON DELETE CASCADE ON UPDATE CASCADE;


/*Relacionando elas*/
SELECT * FROM videos JOIN seo ON videos.fk_seo = seo.id_seo;

/*CRIADA*/
CREATE TABLE autor(
    id_autor INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(35),
    born date
)
/*alimentada*/
INSERT INTO autor (nome, born) VALUES ('marta', '1992-04-19');
INSERT INTO autor (nome, born) VALUES ('LUIZANARCO', '1993-09-09');
INSERT INTO autor (nome, born) VALUES ('TUDO COMIDA', '1998-12-29');
INSERT INTO autor (nome, born) VALUES ('FERNANDOGAMEPLAYS', '2002-06-30');
INSERT INTO autor (nome, born) VALUES ('SOSK', '1993-09-09');
INSERT INTO autor (nome, born) VALUES ('TAIS', '1998-12-29');
