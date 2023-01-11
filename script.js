//"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function(){
        for(let i = 0; i < 2; i++){
            const lastSeeing = prompt("Один из последних просмотренных фильмов?", "").trim(),
                  ratingLastSeeing = prompt("На сколько оцените его?");
        
            if(lastSeeing != null && ratingLastSeeing != null && lastSeeing != '' && ratingLastSeeing != '' && lastSeeing.length < 50){
                personalMovieDB.movies[lastSeeing] = ratingLastSeeing;
                
            } else {
                i--;
            }
        }
    },
    writeYouGenres: function(){
        for(let i = 0; i < 3; i++){
            let genre = prompt(`Ваш любимый жанр под номером ${i+1}`);
            if(genre == null || genre === ''){
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((element, i) => {
           console.log(`Любимый жанр ${i+1} - это ${element}`);
        });
    },
    detectedPersonalLevel: function(){
        if(personalMovieDB.count < 10){
            alert("Просмотрено мало фильмов");
        
        } else if (personalMovieDB.count < 30){
            alert("Ты среднестатистический идиот!");
        
        } else {
            alert("Ты полный идиот!");
        }
    },
    showMyDB: function(hidden){
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function(){
        if(this.privat){
            this.privat = false;
        } else {
            this.privat = true;
        }
    }

};



/*
const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs:  function(object){
        return `Мне ${object.age} и я владею языками: ${personalPlanPeter.skills.languages.toString().replace(",", " ").toUpperCase()}`;
    }
};


console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));



const family = [];

function showFamily(arr) {
    let result = '';
    if(arr.length === 0){
        return "Семья пуста";
    } else {
        for(let i in arr){
            result += `${arr[i]} `;
        }
        return `Семья состоит из: ${result.trim()}`;
    }
    
}

console.log(showFamily(family));





const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    for(let i in arr){
        console.log(`${arr[i].toLowerCase()}`);
    }
}

console.log(standardizeStrings(favoriteCities));






const someString = 'This is some strange string';

function reverse(str) {
    result = '';
    for(let i = str.length-1; i >= 0; i--){
        result += str[i];
    }
    return result;
}

console.log(reverse(someString));








const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function(curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });

    return str;
}
console.log(availableCurr(baseCurrencies, additionalCurrencies));

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    let result = 0;
    shoppingMallData.shops.forEach((room, i) => {
        result += room.width * room.length * shoppingMallData.height;
    });
    result *= shoppingMallData.moneyPer1m3;
    if(result > shoppingMallData.budget){
        console.log("Бюджета недостаточно");
    } else {
        console.log("Бюджета достаточно");
    }
}

isBudgetEnough();



const students = ['Peter', 'Andrew', 'Ann', 'Josh', 'Sandra', 'Bernard', 'Takesi', 'Sam', 'Nikita'];

function sortStudentsByGroups(arr) {
    arr.sort();
    let teams = [[], [], []];
    let counter = 0;
    let result = 'Оставшиеся студенты:';
    for(let i = 0; i < 3; i++){
        
        for(let j = 0; j < 3; j++){
            teams[i].push(arr[counter]);
            counter++;
        }
    }
    if(arr.length === 9){
        result += ' -';
    }
    for(let i = 9; i <= arr.length-1; i++){
        if(i === arr.length-1){
            result += ` ${arr[i]}`;
        } else {
            result += ` ${arr[i]},`;
        }
    }
    
    teams[teams.length] = result;
    
    console.log(teams);
}

sortStudentsByGroups(students);


const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function transferWaitors(data) {
    const copy = Object.assign({}, data);
    copy.waitors = Object.assign({}, data.waitors);
    copy.waitors[0] = {name: 'Mike', age: 32};
    return copy;
}

console.log(transferWaitors(restorantData));
console.log(restorantData);*/