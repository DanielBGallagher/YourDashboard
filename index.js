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
              <img src = "https://static01.nyt.com/images/2020/09/02/science/02VIRUS-CDC/02VIRUS-CDC-thumbStandard.jpg">
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


