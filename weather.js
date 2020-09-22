
  $('#searchbar').submit((e)=>{
    e.preventDefault()
    let someZipCode=document.getElementById('searchbyzip').value;
    console.log(someZipCode)
    getWeatherData(someZipCode);
 
  })


  
function getWeatherData() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${weather}`)
    .then(data => data.json())
    .then(jsonData => {
      
    console.log(`\nWEATHER DATA\n${JSON.stringify(jsonData, null, 2)}\n`);


    
    let kelvinCurrent = jsonData.main.temp
    let fahrenheitCurrent = ((kelvinCurrent - 273.15)*1.8)+32

    let kelvinMin = jsonData.main.temp_min
    let fahrenheitMin = ((kelvinMin - 273.15)*1.8)+32

    let kelvinMax = jsonData.main.temp_max
    let fahrenheitMax = ((kelvinMax - 273.15)*1.8)+32

    $(".weather-name").html(`
      <h5>${jsonData.name}</h5>
      <h5>${fahrenheitCurrent.toFixed()} &#176; Fahrenheit</h5>
      <h5>${fahrenheitMin.toFixed()} &#176; Fahrenheit</h5>
      <h5>${fahrenheitMax.toFixed()} &#176; Fahrenheit</h5>
      <h5>${jsonData.weather[0].description} </h5>`)
    
      
 
    })
}
      
      // const someZipCode = "90210";

      // function zipCode(){
      //   document.getElementById("searchbar").submit();
      //   let someZipCode=searchbyzip
      //   console.log(someZipCode)
      // }
    
