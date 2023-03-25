const key = '61d5e9c2e7f1082b5f0b4fa6296efa11'
// const key = process.env.REACT_APP_IMDB_API_KEY

const requests = {
    requestTrending: `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}&language=en-US`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,

}

export default requests