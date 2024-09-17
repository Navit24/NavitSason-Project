// משיכת API
const apiKey = "074a696ef25dc504c766ed8da11e8227";
const url = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric&q=`;

// אתחול המשתנים
const input = document.querySelector("#inputCity");// אלמנט הקלט של שם העיר
const search = document.querySelector("#search");// כפתור החיפוש
const cityName = document.querySelector("#cityName"); // אזור להצגת שם העיר
const weatherIcon = document.querySelector("#weatherIcon"); // אייקון מזג האוויר
const temperature = document.querySelector("#temperature"); // אזור להצגת הטמפרטורה
const description = document.querySelector("#description");  // אזור להצגת תיאור מזג האוויר
const errorMessage = document.querySelector("#errorMessage"); // אזור להצגת הודעות שגיאה


// פונקציה למשיכת מזג האוויר על פי שם עיר
async function getWeather(cityName) {
    if (cityName) { // בדיקה אם התקבל שם עיר
        try {
            const result = await fetch(url + cityName); // שליחת בקשת API
            const data = await result.json();  // המרת התשובה לפורמט JSON
            displayWeather(data);// קריאה לפונקציה להצגת הנתונים

        } catch (error) {

        }
    }
}

// פונקציה להצגת מזג האוויר במסמך
function displayWeather(weatherData) {
    if (weatherData.cod === 200) { // בדיקה אם הבקשה הצליחה (קוד 200)
        errorMessage.textContent = "";
        cityName.textContent = weatherData.name;
        temperature.textContent = weatherData.main.temp + "°";
        description.textContent = weatherData.weather[0].description;
        weatherIcon.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`

        //  ניקוי במקרה של שגיאה (שם עיר שגוי) והצגת הודעה
    } else { 
        cityName.textContent = "";
        temperature.textContent = "";
        description.textContent = "";
        weatherIcon.src = "";
        errorMessage.textContent = weatherData.message;
    }
}

// באמצעות לחיצת כפתור- חיפוש- קריאה לפונקציה עם שם העיר שהוזן
search.addEventListener("click", (e) => {
    getWeather(input.value);
})



