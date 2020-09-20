$().ready(() =>{



  getWeatherData();


})

function getWeatherData() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${someZipCode},us&appid=${weatherapi}`)
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


      const form = document.getElementById( "searchbar" );

      form.addEventListener( "button", function (event) {
        event.preventDefault();


      })
 
    }
    

    )}


// function getWeatherData() {
//   fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${someZipCode},us&appid=${weather}`)
//   .then(data => data.json())
//   .then(jsonData => console.log(`\nWEATHER DATA\n${JSON.stringify(jsonData, null, 2)}\n`));

// }

// getWeatherData();



// TODO detect location based on the user's Zip Code (IP address)
function getZip (someZipCode) {

  const someZipCode = "";

  for(i=0; i<zip; i++) {}

}

//const someZipCode = "90210";

function getWeatherByZip () {
  let someZipCode = $(".searchbyzip").append(getWeatherData);
  console.log(someZipCode);


}


//Make weather background white   //

// document.getElementById(".weather-feed").style.backgroundColor = rgb(255, 255, 255, .6);

     //Make weather background white   //
    
      // document.getElementById(".weather-feed").style.backgroundColor = rgb(255, 255, 255, .6);
    