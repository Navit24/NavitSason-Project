
// קריאת מערך מה-Session Storage אם קיים, אחרת יצירת מערך ריק
let arr = JSON.parse(sessionStorage.getItem("arr")) || [];

// הצגת רשימת פריטים מה-Session Storage אם קיימת
document.getElementById("item").innerHTML = sessionStorage.getItem("list") || "";

// פונקציה להוספת פריט לרשימה
function addItem() {
    // קבלת ערך מתיבת הקלט
    let name = document.getElementById("name").value;

    // הוספת הפריט לרשימה
    document.getElementById("item").innerHTML +=
        `<li class="list-group-item"> ${name}</li>`;

    // ניקוי תיבת הקלט
    document.getElementById("name").value = "";

    // הוספת הפריט למערך
    arr.push(name);
    // שמירת המערך והרשימה ב-Session Storage
    sessionStorage.setItem("arr", JSON.stringify(arr));
    sessionStorage.setItem("list", document.getElementById("item").innerHTML);

    // הדפסת המערך לקונסול לצורך בדיקה
    console.log(arr);
}


