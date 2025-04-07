export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
    }
}

export const fetchMovies = async ({ query }: { query: string }) => {
    const endPoint = query
        ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=` + query
        : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;


    const response = await fetch(endPoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers,
    })

    if (!response.ok) {
        // @ts-ignore
        throw new Error('Failed to fetch movies', response.statusText);
    }

    const data = await response.json();
    return data.results;
}



// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmZmMjVkM2RjNWE0NjhkODE1OGI5YjE5Zjk2YzcxZiIsIm5iZiI6MTczMTIyMTYxOC4wOTMsInN1YiI6IjY3MzA1ODcxYzMxYTVkY2JiMjE0YWNlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._3dqgU2d3K1AibgPlAkRIYyXyTO-PS1fEzkXcxxleV8'
//     }
// };

// fetch(url, options)
//     .then(res => res.json())
//     .then(json => console.log(json))
//     .catch(err => console.error(err));


export const fetchMovieDetails = async (movieId: string): Promise<MovieDetails> => {
    try {
        const response = await fetch(`${TMDB_CONFIG.BASE_URL}/moive/${movieId}?api_key=${TMDB_CONFIG.API_KEY}`, {
            method: 'GET',
            headers: TMDB_CONFIG.headers,
        });


        if (!response.ok) {
            // @ts-ignore
            throw new Error('Failed to fetch movie details', response.statusText);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}   