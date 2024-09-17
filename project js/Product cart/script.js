
function addItem() {
    // איסוף הנתונים מתיבות הקלט
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let category = document.getElementById("category").value;
    let description = document.getElementById("description").value;
    let rating = document.getElementById("rating").value;

    // אם המוצר במלאי, מציג אייקון של אישור, אחרת מציג אייקון של X
    let check = document.getElementById("check").checked ? '<i class="fa-solid fa-check text-success"></i>' : '<i class="fa-solid fa-x text-danger"></i>';

    // הוספת שורה חדשה לטבלת המוצרים עם הנתונים שהוזנו
    document.getElementById("products").innerHTML +=
        ` <tr>
        <td>${name}</td>
        <td>${category}</td>
        <td>${price}</td>
        <td>${description}</td>
        <td>${rating}</td>
        <td>${check}</td>
    </tr>`;

    // הוספת כרטיס עם פרטי המוצר בתצוגה של מובייל
    document.getElementById("card").innerHTML +=
        `<div  class="card border-danger mt-4">
        <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${category}</h6>
                <h5 class="card-card-title text-success">${price + "₪"}</h5> 
                <p class="card-text">${description}</p>
                    <p class="card-footer">${"Rating: " + rating}</p>
                    <h6 class="card-subtitle mb-2 text-body-secondary text-end">${check}</h6>
            </div> </div> `;

    // ניקוי כל השדות בטופס לאחר הוספת המוצר
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("category").value = "";
    document.getElementById("description").value = "";
    document.getElementById("rating").value = "1";
    document.getElementById("check").checked = false;
}
