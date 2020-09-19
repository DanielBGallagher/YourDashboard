$().ready(() =>{


    // dadjokes();
  
  
  })

function dadjokes () {
    fetch('https://icanhazdadjoke.com/',{
        method:'GET',
        headers:{
            'Accept':'application/json'
        }
    })
    .then(laughs => laughs.json())
    .then(response => {
    
        const funnydata = response.joke;
        console.log(funnydata)
        $(".dad-joke").append(`<p>${response.joke}</p>`)

    })
} ;
dadjokes();