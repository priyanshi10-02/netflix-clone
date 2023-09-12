//const apikey="fe78eb3f455551b5cbe5ec844375918c";
const requests ={
    fetchTrending: `trending/all/week?language=en-US`,
    fetchNetflixOriginal:`discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc`,
    fetchTopRated:`movie/top_rated?language=en-US&page=1`,
    fetchActionMovies:`discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28`,
    fetchComedyMovies:`discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=35`,
   
    fetchRomanceMovies:`discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=27`,
    fetchDocumentaries:`discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10749`,
    fetchHorrorMovies:`discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=99`
}
export default requests;