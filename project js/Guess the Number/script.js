
let number, attempts;

function startGame() {
    //הגרלת מספר בין 1-10
    number = Math.ceil(Math.random() * 10)


    // הגדרת מספר ניסיונות למשחק (5 ניסיונות)
    attempts = 5;

    // הדפסת המספר שנבחר (לעזרת המפתח)
    console.log(number);

    // איפוס התוצאות ותיבת הקלט, והפעלת כפתור הבדיקה ותיבת הקלט מחדש
    document.getElementById("results").innerHTML = "";
    document.getElementById("guess").value = "";
    document.getElementById("checkButton").disabled = false;
    document.getElementById("guess").readOnly = false
}

// התחלת המשחק
startGame()

function check() {
    // המרה של הערך שהמשתמש הכניס למספר (מבטיח שהערך יהיה מספרי)
    let guess = +document.getElementById("guess").value;

    // (בין 1 ל-10) בדיקת תקינות הקלט
    if (guess < 1 || guess > 10) {
        alert("Please enter number between 1 and 10")

    } else {
        //הפחתת מספר הנסיונות ב1 בכל ניחוש
        attempts--;

        // מקרה של ניחוש נמוך מדי
        if (guess < number) {
            document.getElementById("results").innerHTML = `<p class="text-light">${guess} is too small <p/>`;
        }

        // מקרה של ניחוש גבוה מדי
        else if (guess > number) {
            document.getElementById("results").innerHTML = `<p class="text-light">${guess} is too big <p/>`;
        }

        else {
            // מקרה של ניחוש נכון- ניצחון: כפתור הבדיקה ותיבת הקלט לא יתאפשרו כל עוד לא לוחצים על כפתור התחל מחדש
            document.getElementById("results").innerHTML = `<p class="text-light" style="font-family: 'Playfair Display', Calibri, sans-serif; font-size: 2rem;" >You won the game! <br> The number was ${number}. <p/> <button class=" btn btn-success" onclick="startGame()">Start again</button>`
            document.getElementById("checkButton").disabled = true;
            document.getElementById("guess").readOnly = true
        }
    }

    // מקרה של הפסד - נגמרו הניסיונות והמשתמש לא ניחש את המספר הנכון
    if (attempts == 0 && number != guess) {
        document.getElementById("results").innerHTML = `<p class="text-light">You lost the game! The number was ${number}. <p/> <button class=" btn btn-danger" onclick="startGame()">Start again</button>`

        // ביטול אפשרות לשימוש בכפתור ובתיבת הקלט עד להתחלה מחדש
        document.getElementById("checkButton").disabled = true;
        document.getElementById("guess").readOnly = true
    }

}
