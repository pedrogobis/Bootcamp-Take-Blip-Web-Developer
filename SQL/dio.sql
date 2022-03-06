/*
Material interessante para consulta:

https://www.devmedia.com.br/primeiros-passos-no-mysql/28438

*/


CREATE TABLE pessoa( /* Criamos uma tabela */
    id INT NOT NULL PRIMARY KEY AUTO INCREMENT, 
    nome VARCHAR(40) NOT NULL,
    nasc DATE
)

/*Inserimos dados na tabela*/
INSERT INTO pessoa (nome, nasc) VALUES ('PEDRO', '1997-10-08');
INSERT INTO pessoa (nome, nasc) VALUES ('FERNANDA', '1997-06-01');
INSERT INTO pessoa (nome, nasc) VALUES ('MARTA', '1997-02-07');
INSERT INTO pessoa (nome, nasc) VALUES ('CESAR', '1997-01-28');
INSERT INTO pessoa (nome, nasc) VALUES ('LUCAS', '1997-08-18');
INSERT INTO pessoa (nome, nasc) VALUES ('AMANDA', '1997-11-13'); 
INSERT INTO pessoa (nome, nasc) VALUES ('GUILHERME', '1997-12-08');

/* Atualizamos todos os nomes*/
UPDATE pessoa SET nome='Pedro Gobis' WHERE id=2;
UPDATE pessoa SET nome='Fernda Martins' WHERE id=3;
UPDATE pessoa SET nome='Marta Suplicy' WHERE id=4;
UPDATE pessoa SET nome='Cesar Rossi' WHERE id=5;
UPDATE pessoa SET nome='Lucas Azevedo' WHERE id=6;
UPDATE pessoa SET nome='Amanda Vasques' WHERE id=7;
UPDATE pessoa SET nome='Guilherme Stracci' WHERE id=8;

DELETE FROM pessoa WHERE id=3;
/*matamos a fernanda*/

/*Ordenando a tabela por alfabeto crescente*/
SELECT * FROM pessoa ORDER BY nome 

/*Ordenando a tabela por alfaveto Decrescente*/
SELECT * FROM pessoa ORDER BY nome DESC

/*Alterando a tabela e inserindo mais uma coluna*/
ALTER TABLE 'pessoa' ADD 'genero' VARCHAR(1) NOT NULL AFTER 'nasc';

UPDATE pessoa SET genero='M' WHERE id=2;
UPDATE pessoa SET genero='F' WHERE id=4;
UPDATE pessoa SET genero='M' WHERE id=5;
UPDATE pessoa SET genero='M' WHERE id=6;
UPDATE pessoa SET genero='F' WHERE id=7;
UPDATE pessoa SET genero='M' WHERE id=8;

/*Usando command line*/
/*Mostra os bandos de dados*/
SHOW DATABASES;

/*Mostra as tabelas*/
SHOW TABLES;

/*Criando BD*/
CREATE DATABASE escola;

/*Selecionar o bd*/
USE escola;

/*Criar tabela*/
CREATE TABLE cursos (id_curso INT AUTO_INCREMENT PRIMARY KEY, curso VARCHAR(30));

/*INSERINDO DADOS*/
INSERT INTO cursos (nome) VALUE('HTML');
INSERT INTO cursos (nome) VALUE('MYSQL');
INSERT INTO cursos (nome) VALUE('CSS');
INSERT INTO cursos (nome) VALUE('LOGISTICA');

/*Deletando, selecionando pelo nome*/
DELETE FROM cursos WHERE nome='CSS';

/*Inserindo uma coluna na tabela*/
ALTER TABLE cursos ADD carga_horaria INT(2) AFTER nome;

/*Inserindo uma quantidade padrão de horas nas colunas*/
UPDATE cursos SET carga_horaria=20;

SELECT * FROM cursos

/*Atualizando uma linha em especificio*/
UPDATE cursos SET carga_horaria=90 WHERE id_curso=2;

INSERT INTO cursos (nome) VALUE('PYTHON');
INSERT INTO cursos (nome) VALUE('C++');
INSERT INTO cursos (nome) VALUE('C#');
INSERT INTO cursos (nome) VALUE('CONTABILIDADE');


/*Criando um bd, uma tabela e deletando*/

CREATE DATABASE loja;

USE loja;

CREATE TABLE itens (id_item INT PRIMARY KEY AUTO_INCREMENT, nome_prt VARCHAR(40), preco INT NOT NULL);

INSERT INTO itens (nome_prt, preco) VALUE('CADEIRA', '130.00');
INSERT INTO itens (nome_prt, preco) VALUE('TECLADO', '140.00');
INSERT INTO itens (nome_prt, preco) VALUE('MONITOR', '930.00');
INSERT INTO itens (nome_prt, preco) VALUE('MOUSE', '100.00');

DROP TABLE itens;

/*feito*/