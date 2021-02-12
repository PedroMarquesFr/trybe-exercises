-- https://en.wikibooks.org/wiki/SQL_Exercises/Movie_theatres
-- 4.1 Select the title of all movies.
-- 4.2 Show all the distinct ratings in the database.
-- 4.3  Show all unrated movies.
-- 4.4 Select all movie theaters that are not currently showing a movie.
-- 4.5 Select all data from all movie theaters 
    -- and, additionally, the data from the movie that is being shown in the theater (if one is being shown).
SELECT * FROM MovieTheaters;
SELECT * FROM Movies;

SELECT * FROM MovieTheaters
LEFT JOIN Movies ON MovieTheaters.Movie = Movies.Code;
-- 4.6 Select all data from all movies and, if that movie is being shown in a theater, show the data from the theater.
SELECT * FROM Movies;
SELECT * FROM Movies AS m
LEFT JOIN MovieTheaters AS mt ON mt.Movie = m.Code;
-- 4.7 Show the titles of movies not currently being shown in any theaters.
SELECT * FROM Movies AS m
WHERE NOT EXISTS (SELECT * FROM MovieTheaters WHERE Movie = m.Code);

SELECT * FROM Movies AS m
LEFT JOIN MovieTheaters AS mt ON mt.Movie = m.Code WHERE mt.Movie IS NULL;

-- resps do gabarito:
/* With subquery */
 SELECT Title FROM Movies
   WHERE Code NOT IN
   (
     SELECT Movie FROM MovieTheaters
     WHERE Movie IS NOT NULL
   );
    /* With JOIN */
    SELECT Movies.Title
   FROM MovieTheaters RIGHT JOIN Movies
   ON MovieTheaters.Movie = Movies.Code
   WHERE MovieTheaters.Movie IS NULL;
-- 4.8 Add the unrated movie "One, Two, Three".
-- 4.9 Set the rating of all unrated movies to "G".
-- 4.10 Remove movie theaters projecting movies rated "NC-17".