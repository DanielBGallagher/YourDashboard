$().ready(() =>{


    dadjokes();
  
  
  })

function dadjokes () {
    fetch('https://icanhazdadjoke.com/')
    .then(laughs => laughs.json())
    .then(response => {

        const funnydata = response.data;
        console.log(funnydata)


    })
} ;
