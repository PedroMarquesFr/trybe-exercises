-- Monte uma query usando o MOD juntamente com o IF para descobrir se o valor 15 é par ou ímpar. Chame essa coluna de 'Par ou Ímpar' , onde ela pode dizer 'Par' ou 'Ímpar'.
SELECT IF(15 MOD 2 = 0, 'PAR', 'IMPAR') AS 'Par ou Ímpar';
-- Temos uma sala de cinema que comporta 220 pessoas. Quantos grupos completos de 12 pessoas podemos levar ao cinema sem que ninguém fique de fora?
SELECT 220 DIV 12;
-- Utilizando o resultado anterior, responda à seguinte pergunta: temos lugares sobrando? Se sim, quantos?
SELECT 'SIM', 220 - (12 * (220 DIV 12));

-- --------------------------------
-- Para gerar um valor aleatório entre 0 e 1:
SELECT RAND();
-- Para gerar um valor entre 7 e 13:
SELECT ROUND(7 + (RAND() * 6));

-- O cálculo que é feito é o seguinte: (7 + (0.0 a 1.0 * 6))
-- --------------------------------

-- Monte uma query que gere um valor entre 15 e 20 .
SELECT ROUND(15 + (RAND() * 5));
-- Monte uma query que exiba o valor arredondado de 15.75 com uma precisão de 5 casas decimais.
SELECT ROUND(15.7523123213123, 5);
-- Estamos com uma média de 39.494 de vendas de camisas por mês. Qual é o valor aproximado para baixo dessa média?
SELECT FLOOR(39.494);
-- Temos uma taxa de inscrição de 85.234% no curso de fotografia para iniciantes. Qual é o valor aproximado para cima dessa média?
SELECT CEIL(85.234);