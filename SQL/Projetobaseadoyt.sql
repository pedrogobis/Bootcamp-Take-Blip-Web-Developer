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


/*A tabela de playlist vai se dividir em duas, pois tem muitos dados de fora. */
CREATE TABLE playlist(
    id_playlist INT PRIMARY KEY AUTO_INCREMENT,
    nome_pl VARCHAR(35)
)

/*Alimentando ela*/
INSERT INTO playlist (nome_pl) VALUES ('Politicas atuais');
INSERT INTO playlist (nome_pl) VALUES ('Diversão');
INSERT INTO playlist (nome_pl) VALUES ('Receitas');

/*Criando tabela de muitos para muitos.*/ 
CREATE TABLE videos_playlist(
    id_vp INT PRIMARY KEY AUTO_INCREMENT,
    fk_videos INT,
    fk_playlist INT
)

/*Inserimos dados de outras tabelas na propria tabela videos_playlist*/
INSERT INTO videos_playlist (fk_videos, fk_playlist) VALUES(1,1);
INSERT INTO videos_playlist (fk_videos, fk_playlist) VALUES(2,1);
INSERT INTO videos_playlist (fk_videos, fk_playlist) VALUES(1,2);
INSERT INTO videos_playlist (fk_videos, fk_playlist) VALUES(7,2);
INSERT INTO videos_playlist (fk_videos, fk_playlist) VALUES(4,2);

/*Visualizando os dados das tabelas.*/
SELECT * FROM playlist JOIN videos_playlist ON playlist.id_playlist = videos_playlist.fk_playlist;

/*
Visualizando os dados das tabelas e mostrando os nomes dos videos com a tabela.

LER:
traga todas as informações da tabela playlist, junte com todos videoplaylist onde minha idplaylist de playlist vai ser igual a fk_playlist de videos playlist.
junte com a tabela videos onde id de videos em videos, é igual a fk videos na table avideos_playlist

*/
SELECT * FROM playlist JOIN videos_playlist ON playlist.id_playlist = videos_playlist.fk_playlist
JOIN videos ON videos.id_vid = videos_playlist.fk_videos;

/*Aqui vamos mostrar apenas o nome da playlist e o nome do video*/
SELECT playlist.nome_pl, videos.title FROM playlist JOIN videos_playlist ON playlist.id_playlist = videos_playlist.fk_playlist JOIN videos ON videos.id_vid = videos_playlist.fk_videos;

/*Mostrar o nome do autor*/
SELECT playlist.nome_pl, videos.title, autor.nome FROM playlist 
JOIN videos_playlist ON playlist.id_playlist = videos_playlist.fk_playlist 
JOIN videos ON videos.id_vid = videos_playlist.fk_videos
JOIN autor ON videos.fk_autor = autor.id_autor;

/*Vamos fazer uma alteração na tabela playlist, vamos colocar o nome do criador de uma playlist.*/

ALTER TABLE playlist ADD fk_autor INT NOT NULL AFTER nome_pl;

/*Vinculando dados*/
UPDATE playlist SET fk_autor=5 WHERE id_playlist=1; /*SOSK COM PLAYLIST POLITICA*/
UPDATE playlist SET fk_autor=6 WHERE id_playlist=2;/* TAIS COM PLAYLIST DIVERSAO*/
UPDATE playlist SET fk_autor=1 WHERE id_playlist=3;/* MARTA COM PLAYLIST RECEITAS*/

/* Mostrando nome do criador da playlist e o nome da playlist*/
SELECT autor.nome, playlist.nome_pl FROM playlist JOIN autor ON playlist.fk_autor = autor.id_autor;

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
