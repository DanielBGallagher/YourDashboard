$().ready(() =>{


    loadnews();


})

function loadnews () {
    fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=COws2HNoQFFRrMk8kc77p3JoINr90whz')
    .then(news => {
        console.log(news);
    })
}