import {


} from "./foo.js";


const searchInput = document.querySelector(".input");
const searchBtn = document.querySelector(".icon-btn");
const curTemp = document.querySelector(".wheader-num");



let search = searchInput.value;

searchBtn.addEventListener("click", async () => {
 try {
  const api = await fetch(`https://lobster-app-kps4x.ondigitalocean.app/api/weather/${search}`);

  const response = api.json();
  response.then(data => {
   curTemp.textContent = data.currentTemp;

   if (data.currentWeatherDesc === "mostly sunny ") {
    document.body.style.backgroundImage = `url('../assets/bg-weather-img.png')`
   }





  })
 } catch (error) {
  alert("error");
 } finally {

 };

});


function getTime() {
 const date = new Date();
 const year = date.getFullYear();
 const month = date.getMonth();
 const day = date.getDay();
 const hours = date.getHours();
 time.textContent = `${hours} - ${day}, ${month} ${year}`;

 console.log(hours)


}

console.log(getTime())








