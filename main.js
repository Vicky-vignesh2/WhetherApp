const api ={
    key : "05eb9f4cdcc2cd8c41198a5d8c0d306e",
    base : "https://api.openweathermap.org/data/2.5/"
}

const searchbox =document.querySelector('.search-box');
searchbox.addEventListener('keypress',setQuery);

function setQuery(evt){
    if(evt.keyCode==13){
        getResults(searchbox.value);
    }
}

function getResults(query){
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}

function displayResults (weather){
    console.log(weather);
    let city = document.querySelector('.location .city'); 
    city.innerText = `${weather.name}, ${weather.sys.country}`;
    
    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);
    
    let temp = document.querySelector('.current .temp');
    temp.innerHTML=`${Math.round(weather.main.temp)}<span>°c</span>`;

    let weather_e = document.querySelector('.current .weather');
    weather_e.innerText=weather.weather[0].main;

    
    let hilow = document.querySelector('.hi-low');
    hilow.innerText=`${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;

    if(weather_e.innerText=="Clouds")
    {
        document.body.style.backgroundImage = "url('images/cloudy.jpg')";
        weather_e.style.color = 'skyblue';
        temp.style.color='skyblue';
        date.style.color='skyblue';
        city.style.color='skyblue';
        hilow.style.color='skyblue';
    }

    if(weather_e.innerText=="Sunny")
    {
        document.body.style.backgroundImage = "url('images/sunny.jpg')";
        weather_e.style.color = 'red';
        temp.style.color='red';
        date.style.color='red';
        city.style.color='red';
        hilow.style.color='red';
    }

    if(weather_e.innerText=="Rain")
    {
        document.body.style.backgroundImage = "url('images/2ujE73.jpg')";
        weather_e.style.color = 'white';
        temp.style.color='white';
        date.style.color='white';
        city.style.color='white';
        hilow.style.color='white';
    }

    if(weather_e.innerText=="Fog")
    {
        document.body.style.backgroundImage = "url('images/foggy.jpg')";
        weather_e.style.color = 'grey';
        temp.style.color='grey';
        date.style.color='grey';
        city.style.color='grey';
        hilow.style.color='grey';
    }

    if(weather_e.innerText=="Clear")
    {
        document.body.style.backgroundImage = "url('images/clear.jpg')";
        weather_e.style.color = 'black';
        temp.style.color='black';
        date.style.color='black';
        city.style.color='black';
        hilow.style.color='black';
    }

    if(weather_e.innerText=="Haze")
    {
        document.body.style.backgroundImage = "url('images/haze.jpg')";
        weather_e.style.color = 'orangered';
        temp.style.color='orangered';
        date.style.color='orangered';
        city.style.color='orangered';
        hilow.style.color='orangered';
    }

}

function dateBuilder(d){
    let months = ["Jan" , "Feb" , "Mar" , "Apr" , "May" , "Jun",
 "Jul" , "Aug" , "Sep" , "Oct" , "Nov" , "Dec"];
    let days = ["Sun", "Mon" , "Tue" , "Wed" , "Thu" ,
  "Fri" , "Sat" ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}