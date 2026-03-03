db = db.getSiblingDB('Mongoflix');

db.Movie.drop();
db.Ratings.drop();


console.log("--- Inicjalizacja przesyłu danych ---");

const movieData = fs.readFileSync("scripts/movie_data.json", 'utf8');
const movies = JSON.parse(movieData);
const ratingData = fs.readFileSync("scripts/ratings_data.json", 'utf8');
const ratings = JSON.parse(ratingData);
db.Movie.insertMany(movies)
db.Ratings.insertMany(ratings)

console.log("--- Dodano wszystkie rekordy pomyślnie ---")