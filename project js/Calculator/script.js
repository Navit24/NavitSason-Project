// פונקציה שתפקידה לנקןת את הקלט של המחשבון
function clearInput() {
    document.getElementById("result").value = ""; // איפוס הערך של הקלט לתו ריק
}

// פונקציה להוספת תו בתיבת הקלט
function addChar(char) {
    document.getElementById("result").value += char; //הוספת התו שנבחר לקלט הקיים
}

// פונקציה לחישוב והצגת התוצאה
function showResult() {
    let calc = document.getElementById("result").value; // קבלת הקלט מתיבת הקלט
    let res = eval(calc); //חישוב התוצאה עם eval
    document.getElementById("result").value = res;// הצגת התוצאה 
}

