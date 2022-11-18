const food = '9a25db7f65df2c373b27d714a00b3d96'

const requests = {
    
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${food}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${food}&language=en-US&page=2`,
    requestTrending: `https://api.themoviedb.org/3/trending/movie/week?api_key=${food}&language=en-US&page=1`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${food}&language=en-US&page=1`,
    requestUpcoming2: `https://api.themoviedb.org/3/movie/upcoming?api_key=${food}&language=en-US&page=2`,
    requestNowplaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${food}&language=en-US&page=1`,
    requestNowplaying2: `https://api.themoviedb.org/3/movie/now_playing?api_key=${food}&language=en-US&page=2`
}

export default requests