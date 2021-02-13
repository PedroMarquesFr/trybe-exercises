SELECT actor_id,(SELECT COUNT(*) FROM film_actor WHERE actor_id = a.actor_id GROUP BY actor_id) 
FROM actor AS a
ORDER BY actor_id;