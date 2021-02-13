SELECT a.actor_id, COUNT(*) FROM actor AS a
INNER JOIN film_actor AS fa ON fa.actor_id = a.actor_id
GROUP BY a.actor_id;