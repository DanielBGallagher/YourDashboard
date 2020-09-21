$().ready(() =>{



  getWeatherData();


})

//getElementById('search').addEventListener()

//$('.form').click()

function getWeatherData(zip) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${someZipCode},us&appid=${weather}`)
    .then(data => data.json())
    .then(jsonData => {

    console.log(`\nWEATHER DATA\n${JSON.stringify(jsonData, null, 2)}\n`);

    
    let kelvinCurrent = jsonData.main.temp
    let fahrenheitCurrent = ((kelvinCurrent - 273.15)*1.8)+32

    let kelvinMin = jsonData.main.temp_min
    let fahrenheitMin = ((kelvinMin - 273.15)*1.8)+32

    let kelvinMax = jsonData.main.temp_max
    let fahrenheitMax = ((kelvinMax - 273.15)*1.8)+32



    $(".weather").append(`<div class ="weather-data">
    
    <div class = "weather-name">
      <h5>${jsonData.name}</h5>
      <h5>${fahrenheitCurrent.toFixed()} &#176; Fahrenheit</h5>
      <h5>${fahrenheitMin.toFixed()} &#176; Fahrenheit</h5>
      <h5>${fahrenheitMax.toFixed()} &#176; Fahrenheit</h5>
      <h5>${jsonData.weather[0].description} </h5>`)
 
      }

    )}
      
      // const someZipCode = "90210";

      // function zipCode(){
      //   document.getElementById("searchbar").submit();
      //   let someZipCode=searchbyzip
      //   console.log(someZipCode)
      // }
      $('#searchbyzip').submit((e)=>{
        e.preventDefault()
        let someZipCode=
        console.log(someZipCode)
      })
  

//Make weather background white   //

// document.getElementById(".weather-feed").style.backgroundColor = rgb(255, 255, 255, .6);

     //Make weather background white   //
    
      // document.getElementById(".weather-feed").style.backgroundColor = rgb(255, 255, 255, .6);
    