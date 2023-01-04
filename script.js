
const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const firstLastSeeing = prompt("Один из последних просмотренных фильмов?", "");
const ratingFirstLastSeeing = prompt("На сколько оцените его?");
const secondLastSeeing = prompt("Один из последних просмотренных фильмов?", "");
const ratingSecondLastSeeing = prompt("На сколько оцените его?");

personalMovieDB.movies[firstLastSeeing] = ratingFirstLastSeeing;
personalMovieDB.movies[secondLastSeeing] = ratingSecondLastSeeing;

console.log(personalMovieDB);