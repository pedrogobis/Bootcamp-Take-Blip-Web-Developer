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
/*matamos a marta*/