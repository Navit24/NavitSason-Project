// הגדרת אפשרויות המשחק: אבן נייר ומספריים
let choices = ["rock", "paper", "scissors"];

// קבלת האלמנטים של התמונות ותצוגת התוצאה 
let playerImage = document.getElementById("playerImage");
let computerImage = document.getElementById("computerImage");
let resultDisplay = document.getElementById("resultDisplay");

// אתחול של ספירת הניצחונות
let wins = 0;
document.getElementById("wins").innerText = wins; // מציג את מספר הניצחונות הנוכחי על המסך

// פונקציה שמבצעת את הלוגיקה של המשחק כאשר השחקן בוחר אופציה
function playGame(playerChoice) {
    // בחירה אקראית של המחשב מתוך שלוש האפשרויות
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    // הצגת הבחירה של המחשב בקונסול לצורך בדיקה
    console.log(computerChoice);

    // משתנה לאחסון התוצאה של המשחק
    let result = "";


    // קביעת התוצאה של המשחק לפי הבחירות של השחקן והמחשב
    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!"; // אם הבחירות זהות, מדובר בתיקו
        resultDisplay.className = "";

    } else {
        // קביעת התוצאה לפי הבחירה של השחקן והמחשב
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!"
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!"
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!"
                break;
            default:
                break;
        }
    }

    // עדכון ספירת הניצחונות אם השחקן ניצח
    if (result === "YOU WIN!") {
        wins++;
        // הצגת ספירת הניצחונות החדשה על המסך
        document.getElementById("wins").innerText = wins;
    }

    // הסתרת התמונות של השחקן והמחשב כדי להכין את האנימציה
    playerImage.style.opacity = 0;
    computerImage.style.opacity = 0;

    // הגדרת התמונות החדשות לאחר עיכוב של 500ms
    setTimeout(() => {
        playerImage.src = `./images/${playerChoice}.png`; // עדכון מקור התמונה של השחקן בהתאם לבחירה
        computerImage.src = `./images/${computerChoice}.png`;// עדכון מקור התמונה של המחשב בהתאם לבחירה

        //  הצגת התמונות עם אפקט אנימציה ושינוי רוחב התמונה 
        playerImage.style.opacity = 1;
        computerImage.style.opacity = 1;
        playerImage.classList.add('flash');
        computerImage.classList.add('flash');
        playerImage.style.width = '10em';
        playerImage.style.height = '10em';
        computerImage.style.width = '10em';
        computerImage.style.height = '10em';



        setTimeout(() => {
            playerImage.classList.remove('flash');
            computerImage.classList.remove('flash');
        }, 700);
    }, 500);

    setTimeout(() => {
        resultDisplay.textContent = result; // הצגת התוצאה על המסך

        // קביעת עיצוב התוצאה לפי התוצאה
        if (result === "YOU WIN!") {
            resultDisplay.style.color = 'green';
            resultDisplay.style.fontSize = '1.5em';
        } else if (result === "YOU LOSE!") {
            resultDisplay.style.color = 'red';
            resultDisplay.style.fontSize = '1.5em';
        } else {
            resultDisplay.style.color = 'black';
        }

        // השמעת צליל בהתאם לתוצאה
        playSound(result);
    }, 500); // הצגת התוצאה לאחר 500ms


    // הצגת התוצאה לאחר עיכוב של 500ms
    setTimeout(() => {
        resultDisplay.textContent = result;  // הצגת התוצאה על המסך
        playSound(result); // השמעת צליל בהתאם לתוצאה
    }, 500);
}

// פונקציה להשמעת צלילים בהתאם לתוצאה של המשחק
function playSound(result) {
    let sound;
    // קובע איזה צליל להשמיע לפי התוצאה של המשחק
    if (result === "YOU WIN!") {
        sound = new Audio('./sounds/win sound.wav');
    } else if (result === "YOU LOSE!") {
        sound = new Audio('./sounds/lose sound.wav');
    } else {
        sound = new Audio('./sounds/try again sound.mp3');
    }
    sound.play();
}