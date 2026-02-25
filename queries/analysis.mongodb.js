db = db.getSiblingDB('Mongoflix')

print("\n--- RAPORT ANALITYCZNY MONGOFLIX ---")

print("\n\n1. Filmy z gatunku Akcja:")


print("\n\n2. Filmy ostatnio wydane:")


print("\n\n3. Wyświetlenia filmów każdego reżysera:")
const totalDirectorsMoviesViews = db.Movies.aggregate(
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


print("\n\n4. Średnia ocen każdego filmu:")
const avgMovieRating = db.Movies.aggregate(
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


print("\n\n5. Średnia ocen każdego gatunku:")
const avgGenreRating = db.Movies.aggregate(
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