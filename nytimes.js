$().ready(() =>{


    loadNews();


})

function loadNews () {
    fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${nyTimes}`)
    .then(news => news.json())
    .then(data => {
        
        let articleArray = data.results;

        const articleHTML = articleArray.map(currentArticle =>{
            
            // console.log(currentArticle.media[0]);

            const imgSRC = currentArticle.media[0] ? currentArticle.media[0]["media-metadata"][0].url : "";

            $(".content").append(`<div class = "news-card2">
            <div class = "story-img2">
              <img src = "${imgSRC}">
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


// opacity: 0.2;
// background-image: url("/img/newspaper.jpg");
// background-size: contain;"


document.getElementByClass("content").style.maxHeight = "15px";