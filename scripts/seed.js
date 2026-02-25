db = db.getSiblingDB('Mongoflix');

db.Movie.drop();
db.Ratings.drop();


console.log("--- Inicjalizacja przesyłu danych ---");

db.Movie.insertMany([
    {
        _id: 1,
        title: "stringi",
        releaseDate: "10-04-2026",
        genres: ["horror","drama"],
        director: "mariusz",
        actors: ["tonik_mlody","kamieniusz"],
        ratings_id: [1,2],
        isPremium: true,
        totalViews: 10101010
    },
    {
        _id: 2,
        title: "alien",
        releaseDate: "20-08-1997",
        genres: ["horror","action","sci-Fi"],
        director: "adam",
        actors: ["alien","ripley"],
        ratings_id: [3],
        isPremium: false,
        totalViews: 3
    },
    {
        _id: 3,
        title: "stringi 2: shorty",
        releaseDate: "26-12-2026",
        genres: ["horror","comedy"],
        director: "mateusz",
        actors: ["tonik_stary","rockeusz"],
        ratings_id: [4,5,6],
        isPremium: true,
        totalViews: 2137
    },
    {
        _id: 4,
        title: "Film 2",
        releaseDate: "15-05-2025",
        genres: ["comedy", "family"],
        director: "kowalski",
        actors: ["jan_nowak", "anna_mala"],
        ratings_id: [7,8],
        isPremium: false,
        totalViews: 502340
    },

    {
        _id: 5,
        title: "Film 3",
        releaseDate: "22-11-2024",
        genres: ["action", "thriller"],
        director: "nowicki",
        actors: ["piotr_szybki", "adam_woj"],
        ratings_id: [9],
        isPremium: true,
        totalViews: 8459201},
    {
        _id: 6,
        title: "Film 4",
        releaseDate: "01-02-2023",
        genres: ["sci-fi", "adventure"],
        director: "zielinski",
        actors: ["ewa_galaktyka", "tomasz_kosmos"],
        ratings_id:[10],
        isPremium: true,
        totalViews: 1293021
    },
    {
        _id: 7,
        title: "Film 5",
        releaseDate: "07-06-2023",
        genres: ["action", "adventure"],
        director: "kaszubski",
        actors: ["piotr_wolny", "anna_mala"],
        ratings_id:[11],
        isPremium: false,
        totalViews: 50304
    },
    {
        _id: 8,
        title: "Film 6",
        releaseDate: "22-09-2024",
        genres: ["sci-fi", "horror", "comedy"],
        director: "zielinski",
        actors: ["rockeusz", "anna_duza"],
        ratings_id:[12],
        isPremium: true,
        totalViews: 21353
    },
    {
        _id: 9,
        title: "Film 7",
        releaseDate: "08-10-2024",
        genres: ["sci-fi", "drama"],
        director: "adamski",
        actors: ["adam_woj"],
        ratings_id:[13],
        isPremium: true,
        totalViews: 35126
    },
    {
        _id: 10,
        title: "Film 8",
        releaseDate: "01-02-2023",
        genres: ["sci-fi", "thriller"],
        director: "polski",
        actors: ["tomasz_kosmos"],
        ratings_id:[14],
        isPremium: false,
        totalViews: 76532
    }
])

db.Ratings.insertMany([
    {
        _id: 1,
        username: "wcaleNieKamieniusz1990",
        comment: "taki sobie ten filmi",
        rating: 3
    },
    {
        _id: 2,
        username: "mariuszocity",
        comment: "najlepszy film jaki widziałem",
        rating: 5
    },
    {
        _id: 3,
        username: "sciFiLover",
        comment: "uwielbiam sci-Fi",
        rating: 5
    },
    {
        _id: 4,
        username: "kinomaniak",
        comment: "o wiele lepszy od pierwszego",
        rating: 3
    },
    {
        _id: 5,
        username: "comedyEnjoyer",
        comment: "dobra komedia",
        rating: 4
    },
    {
        _id: 6,
        username: "stringiHater22",
        comment: "tak słaby jak nie gorszy od pierwszego",
        rating: 1
    },
    {
        _id: 7,
        username: "comedyEnjoyer2",
        comment: "świetna komedia",
        rating: 4
    },
    {
        _id: 8,
        username: "user2436",
        comment: "meh",
        rating: 3
    },
    {
        _id: 9,
        username: "actionFan99",
        comment: "Mega dynamiczny, dużo akcji i świetne tempo.",
        rating: 5
    },
    {
        _id: 10,
        username: "kosmicznyJan",
        comment: "Bardzo klimatyczne sci-fi, dobra przygoda.",
        rating: 4
    },
    {
        _id: 11,
        username: "kinoManiak22",
        comment: "Solidne kino akcji, choć momentami przewidywalne.",
        rating: 3
    },
    {
        _id: 12,
        username: "horrorLover",
        comment: "Dziwne połączenie gatunków, ale bawi i straszy.",
        rating: 4
    },
    {
        _id: 13,
        username: "dramaQueen",
        comment: "Ciekawa historia, ale trochę za wolne tempo.",
        rating: 3
    },
    {
        _id: 14,
        username: "thrillerFan",
        comment: "Trzyma w napięciu do samego końca!",
        rating: 5
    }


])

console.log("--- Dodano wszystkie rekordy pomyślnie ---")


