db = db.getSiblingDB('Mongoflix')

const GOLD = "\x1b[33m";
const RESET = "\x1b[0m";
console.log(`\n${GOLD}--------------- RAPORT ANALITYCZNY MONGOFLIX ---------------${RESET}`);

print("\n\n------ 1. Filmy z gatunku Horror: ------------------------")
const horrorMovies = db.Movie.aggregate([
    {
        $lookup: {
            from: "Ratings",
            localField: "ratings_id",
            foreignField: "_id",
            as: "oceny_id"
        }
    },
    {$unwind: "$oceny_id"},
    {$match: { genres: "horror"}}
]).toArray()
printjson(horrorMovies)


print("\n\n------ 2. Filmy ostatnio wydane: ------------------------")
const recentMovies = db.Movie.aggregate([  {
    $match:
        {
            releaseYear: {
                $gt: 2020
            },
            releaseMonth: {
                $gt: 4
            },
            releaseDay: {
                $gt: 5
            }
        }
}]).toArray()
printjson(recentMovies)


print("\n\n------ 3. Wyświetlenia filmów każdego reżysera: ------------------------")
const totalDirectorsMoviesViews = db.Movie.aggregate(
    [
        {
            $group: {
                _id: '$director',
                totalMoviesViews: { $sum: '$totalViews' }
            }
        }
    ]
).toArray()
printjson(totalDirectorsMoviesViews)


print("\n\n------ 4. Średnia ocen każdego filmu: ------------------------")
const avgMovieRating = db.Movie.aggregate(
    [
        {
            $lookup: {
                from: 'Ratings',
                localField: 'ratings_id',
                foreignField: '_id',
                as: 'ratings'
            }
        },
        { $unwind: { path: '$ratings' } },
        {
            $group: {
                _id: '$title',
                avgRating: { $avg: '$ratings.rating' }
            }
        }
    ]
).toArray()
printjson(avgMovieRating)


print("\n\n------ 5. Średnia ocen każdego gatunku: ------------------------")
const avgGenreRating = db.Movie.aggregate(
    [
        {
            $lookup: {
                from: 'Ratings',
                localField: 'ratings_id',
                foreignField: '_id',
                as: 'ratings'
            }
        },
        { $unwind: { path: '$genres' } },
        { $unwind: { path: '$ratings' } },
        {
            $group: {
                _id: '$genres',
                avgRating: { $avg: '$ratings.rating' }
            }
        }
    ]
).toArray()
printjson(avgGenreRating)