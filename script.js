//"use strict";
let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
    for(let i = 0; i < 2; i++){
        const lastSeeing = prompt("Один из последних просмотренных фильмов?", ""),
              ratingLastSeeing = prompt("На сколько оцените его?");
    
        if(lastSeeing != null && ratingLastSeeing != null && lastSeeing != '' && ratingLastSeeing != '' && lastSeeing.length < 50){
            personalMovieDB.movies[lastSeeing] = ratingLastSeeing;
            
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function writeYouGenres(){
    for(let i = 0; i < 2; i++){
        const genresFilms = prompt(`Ваш любимый жанр под номером ${i+1}`);
        if(genresFilms != null && genresFilms != '' && genresFilms.length < 50){
            personalMovieDB.genres[i] = genresFilms;
        } else {
            i--;
        }
    }
}
writeYouGenres();
function detectedPersonalLevel(){
    if(personalMovieDB.count < 10){
        alert("Просмотрено мало фильмов");
    
    } else if (personalMovieDB.count < 30){
        alert("Ты лох!");
    
    } else {
        alert("Ты полный лох!");
    }
}

detectedPersonalLevel();

function showMyDB(){
    if(personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }
}

showMyDB();