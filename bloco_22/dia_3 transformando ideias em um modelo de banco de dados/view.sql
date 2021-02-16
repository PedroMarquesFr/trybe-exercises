-- Uma VIEW te permite:
-- Ter uma tabela que pode ser usada em relatórios;
-- Ter uma tabela para usar como base para montar novas queries;
-- Reduzir a necessidade de recriar queries utilizadas com frequência.

CREATE VIEW top_10_customers AS
    SELECT c.customer_id, c.first_name, SUM(p.amount) AS total_amount_spent
    FROM sakila.payment p
    INNER JOIN sakila.customer c ON p.customer_id = c.customer_id
    GROUP BY customer_id
    ORDER BY total_amount_spent DESC
    LIMIT 10;
    
SELECT * FROM top_10_customers;    