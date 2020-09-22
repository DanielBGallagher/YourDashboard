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
        $(".dad-joke").append(`<p id= dad-joke>${response.joke}</p>`)

    })
} ;
dadjokes();