
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

<<<<<<< HEAD
      // function zipCode(){
      //   document.getElementById("searchbar").submit();
      //   let someZipCode=searchbyzip
      //   console.log(someZipCode)
      // }
    
=======

    const someZipCode = document.getElementById('zip').value;
  
 

// TODO detect location based on the user's Zip Code (IP address)

// One attempt to call weather api from search 
// function getZip () {

//   var request;
//   var input1 = document.getElementById('zip');
//   var apiCall = 'https://api.openweathermap.org/data/2.5/weather?zip=${input1},us&appid=${weather}'

//   var weatherbyzip = apiCall + input1.value;

//   request = new XMLHttpRequest();

//   request.open('GET', weatherbyzip, true);
//   request.onload = function() {
//     var data = JSON.parse(this.response);
//     if (request.status >=200 && request.status < 400) {
//       console.log(data);
//     }

//     else {
//       console.log(input1.value);
//     }
//   }

//   request.send();

// }



// 2nd attempt to call weather api from search  
// var fetchWeather;
// var api = "http://api.openweathermap.org/data/2.5/weather?zip=";
// var apikey = "8c5785d2d6e48e5c2e504db748496ff8";
// var input;


// function getZip () {
//   createCanvas(400, 200);
//   var button = select('.zip');
//   button.mousePressed(askWeather);

//   input = select('.zip');
// }

// function askWeather () {
//   var url = api + zip + input.value() + apikey;
//   loadJSON(url, gotData);
// }


// function gotData (data) {
//   fetchWeather = data;
// }

// $().ready(() =>{



//   getWeatherData();


// })

>>>>>>> dfb4c6c80f8ec97e84df334b66b4fe17fc0430af
