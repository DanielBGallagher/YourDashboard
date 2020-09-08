$().ready(() =>{


    loadNews();


})

function loadNews () {
    fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=COws2HNoQFFRrMk8kc77p3JoINr90whz')
    .then(news => news.json())
    .then(data => {
        
        let articleArray = data.results;

        const articleHTML = articleArray.map(currentArticle =>{
            console.log(currentArticle.media);
            $(".content").append(`<div class = "news-card2">
            <div class = "story-img2">
              <img src = "">
              <p>${currentArticle.published_date}</p>
            </div>
            <div class = "story-info">
              <h4>${currentArticle.title}</h4>
              <p>${currentArticle.abstract}</p>
              <a href = "currentArticle.url">Read More</a>
            </div>
            
          </div>`)
        })
        
    })
}

// TODO detect location based on the user's IP address
const someZipCode = "90210";
// TODO sign up for an account at openweathermap in order to get an API key
const someAPIKey = apiKey;

function getWeatherData() {
  fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${someZipCode},us&appid=${someAPIKey}`)
  .then(data => data.json())
  .then(jsonData => console.log(`\nWEATHER DATA\n${JSON.stringify(jsonData, null, 2)}\n`));
}

getWeatherData();
