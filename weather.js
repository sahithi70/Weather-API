const apikey= 'b535f293557914b98fbd6c16ab4edcec';
let inputEle = document.getElementById("location");
let btnEle = document.getElementById("btn");
let temp = document.getElementById("temp-value");
let weather = document.getElementById("weather-desc");
let cityName = document.getElementById("city");
let humidEle = document.getElementById("humidity");
let icon = document.getElementById("icon");

btnEle.onclick=function(){
    if(inputEle.value==""){
        alert("Please Enter some city name");
    }
    else{
        loc=inputEle.value
        url=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`
        fetch(url).then(result=>result.json())
        .then(data=>{
            console.log(data)
            const{name}=data
            const{feels_like}=data.main
            const{description}=data.weather[0]
            const{humidity}=data.main
            temp.innerText=Math.floor(feels_like-273);
            cityName.innerText=name;
            weather.innerText=description
            humidEle.innerText=humidity
            
        })
        .catch(()=>{
            alert("Enter valid city hame")
        })
        location.value==""
    }
}