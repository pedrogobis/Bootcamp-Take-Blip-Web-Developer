/*
Parte 2 do curso de mysql, fazendo a parte dos videos e canais.

Vamos usar agora o JOIN e AS

*/


/* Se digitar o codigo assim, vamos apenas mostrar as duas tabelas com dados duplicados, praticamente uma zona*/
SELECT * FROM videos_canais JOIN videos 

/*Agora se eu passar com o ON vamos ter outro resultado, o ON vai relacionar dois itens.

Videos_canais.fk_canal  'vai ser igual' = 'aos dados da tabela na coluna'  videos.id_videos.

então dado esse codigo, na tabela que aparecer vai conter 
os dados da coluna fk_canal vai ser organizado juntamente com a coluna id_video 

*/
SELECT * FROM videos_canais JOIN videos ON  videos_canais.fk_video = videos.id_video

/*Comando AS é igual no python, ela da um apelido para a tabela, como usamos muitas tabelas, com nomes grandes, podemos por um apelido, para ser mais facil de identifica-las.*/
SELECT * FROM videos_canais AS vc  JOIN videos AS vi ON  vc.fk_video = vi.id_video

/*
Estamos juntando mais uma tabela as duas já puxadas, e vamos relacionar os dados da tabela camaos com a coluna canal fk canal com os dados ta tabela videos com a coluna id canal 

Então apareceu o seguinte:
fk video está alinhado com id video
fk canal está alinhado com id canal



*/
SELECT * FROM videos_canais AS vc  JOIN videos AS vi ON  vc.fk_video = vi.id_video
JOIN canais AS c ON vc.fk_canal = c.id_canal

/*
Agora vamos filtrar ainda mais as informações 

Na linha do select, quando usamos o asteristico igual no git, ele seleciona tudo, então em mysql ele junta todas as informações de todas as tabelas selecionadas, então agora vamos filtrar, e pegar apenas as colunas que desejamos

então fazemos o seguinte:

nome da tabela.nome da coluna, nome da tabela.nome da coluna, nome da tabela e nome da coluna.

desse jeito irá aparecer apenas as colunas selecionadas, e ordenadas do jeito que solicitamos com o join.
*/
SELECT vi.nome_video, vi.autor_video, c.nome_canal 
FROM videos_canais AS vc  JOIN videos AS vi ON  vc.fk_video = vi.id_video
JOIN canais AS c ON vc.fk_canal = c.id_canal;

/*
INNER JOIN == JOIN DEFALT
ele tras apenas os dados que se relacionam, dados null/vazios ele não tras.

Para trazer esses dados utilizamos o OUTER JOIN, Porém para utilizar ele precisamos definir o lado Direito para ele poder aparecer, pois como ele não se relaciona com ninguem ele poderia atrapalhar a consulta

Então o codigo para usar o OUTER JOIN fica dessa forma:
RIGHT OUTER JOIN

*/
SELECT * FROM videos_canais AS vc  
RIGHT OUTER JOIN videos AS vi ON  vc.fk_video = vi.id_video;


/*
Lembre-se a primeira tabela sempre fica a esquerda a segunda sempre estara a direita.

****Sempre teste o left e o right para testar.
*/

/*
UNION: para puxar tudo precisa que o numero de colunas seja igual, Caso não seja, precisa definir no SELECT quais colunas voce quer puxar.

*/
SELECT v.id_video, v.nome_video FROM videos AS v LEFT OUTER JOIN videos_canais AS vc ON v.id_video = vc.fk_video
UNION
SELECT c.id_canal, c.nome_canal FROM videos_canais AS vc RIGHT OUTER JOIN canais AS c ON vc.fk_canal = c.id_canal; 

/*Inserindo mais um canal*/
INSERT INTO canais (id_canal, nome_canal) VALUES ('5', 'Javascript');

/*Inserimos a informação na tabela videos_canais, que o video aula js, pertence ao canal javascript*/ 

INSERT INTO Videos_canais (id_canais_video, fk_canal,fk_video) VALUES ('6', '5', '6');


/*Fazendo a consulta corretamente*/
SELECT * FROM videos_canais JOIN videos ON videos_canais.fk_video = videos.id_video JOIN canais ON videos_canais.fk_canal = canais.id_canal;

/*
WHERE - muito utilizada em varios comandos, e pode ser usada pra fazer multiplas consultas

aqui no exemplo, vamos selecionar para mostrar os dados apenas do cnaal react

Sempre fazer buscas pelo id/primary key
*/
SELECT * FROM videos_canais JOIN videos ON videos_canais.fk_video = videos.id_video JOIN canais ON videos_canais.fk_canal = canais.id_canal WHERE canais.id_canal = 1;