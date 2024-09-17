// הפעלת פונקציה באמעות לחיצה על כפתור החיפוש
document.getElementById("search").addEventListener("click", function () {

  let city = document.getElementById("cityInput").value; // קבלת הערך מתיבת החיפוש(עיר בירה)


  // יוצר את הכתובת (URL) של ה-API לפי שם העיר שהתקבל
  let url = 'https://restcountries.com/v3.1/capital/' + city;

  // קריאה ל-API באמצעות axios
  axios.get(url).then(function (response) {
    let country = response.data[0]; // מקבל את המידע על המדינה מהתגובה

    // מאחזר את המידע הבא: דגל, שם המדינה, אוכלוסיה, אזור, שפות
    let flag = country.flags.svg;
    let name = country.name.common;
    let population = country.population.toLocaleString();
    let region = country.region;
    let languages = Object.values(country.languages).join(', ');

    // הצגת המידע על המדינה
    document.getElementById("result").innerHTML = `<div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-5">
      <img src="${flag}" class="img-fluid rounded-start" alt="Flag of ${name}">
    </div>
    <div class="col-md-7">
      <div class="card-body">
        <h4 class="card-title display-6">${name}</h4>
        <p class="card-text "><strong>region:</strong> ${region}</p>
        <p class="card-text"><small class="text-body-secondary"><strong>population:</strong> ${population}</small></p>
        <p class="card-text"><small class="text-body-secondary"><strong>languages:</strong> ${languages}</small></p>
      </div>
    </div>
  </div>
</div>`;

    //הצגת הודעת שגיאה במקרה של שגיאה - עיר בירה לא נמצאה
  }).catch(function (error) {
    document.getElementById("result").innerHTML = '<p style="color: red;">No capital city found</p>';
  });
})
