//ייבוא מחלקה מקובץ אחר
import TaskManager from "./classes/TaskManager.js";

let manager = new TaskManager;
manager.addTask("example task");

// פונקציה לשמירה ב-localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(manager.tasks));
}

// פונקציה לייבוא משימות מה-localStorage
function importTasks() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
        manager.tasks = JSON.parse(tasks);
    }
}

//הפונקציה הבאה קוראת לכמה פעולות באמצעות לחיצה על כפתור
//הוספת המשימה למערך
window.addNewTask = function addNewTask() {
    let description = document.querySelector("#description").value;
    manager.addTask(description)
    saveTasks()//שומר את המשימות לאחר הוספה
    showTask()//מפעילה גם את הפונקציה שתפקידה להציג את המשימות במסמך 
}

// פונקציה שתפקידה להציג את המשימות במסמך 
function showTask() {
    document.querySelector("#activeTasks").innerHTML = "";
    document.querySelector("#completedTasks").innerHTML = "";
    document.querySelector("#description").value = "";
    //לולאה שעוברת על המערך ומוסיפה משימה לרשימה במקום המתאים על פי תנאי - הושלמה או טרם הושלמה 
    for (let task of manager.tasks) {
        if (task.completed) {
            document.querySelector("#completedTasks").innerHTML +=
                `<div>
            <li class='list-group-item d-inline-block w-50 text-decoration-line-through'> ${task.description}</li> 
            <button class='btn btn-success me-1' disabled><i class="fa-solid fa-check-double text-light"></i></button>
            <button class='btn btn-primary me-1' disabled> <i class="text-light fa-sharp fa-solid fa-pencil"></i> </button>
            <button class='btn btn-danger me-1' onclick='deleteTask(${task.id})'> <i class="fa-solid fa-trash"></i> </button>
            </div>
    `;
        } else {
            document.querySelector("#activeTasks").innerHTML +=
                `<div>
            <li class='list-group-item d-inline-block w-50'> ${task.description}</li>
            <button class='btn btn-success me-1' onclick='completeTask(${task.id})'> <i class="fa-solid fa-check"></i> </button>
            <button class='btn btn-primary me-1' onclick='updateTask(${task.id},"${task.description}")'> <i class="text-light fa-sharp fa-solid fa-pencil"></i> </button>
            <button class='btn btn-danger me-1' onclick='deleteTask(${task.id})'><i class="fa-solid fa-trash" ></i> </button </div>`;
        }
    }
}

// פונקציה שקוראת להפעלת פונקציה לסימון משימות שהושלמו 
window.completeTask = function completeTask(id) {
    manager.completeTask(id)
    saveTasks()//שומר את המשימות לאחר סימון כהושלמה
    showTask()//מפעילה גם את הפונקציה שתפקידה להציג את המשימות במסמך 
}

// פונקציה שקוראת לפונקציית עריכת משימה
window.updateTask = function updateTask(id, oldDesc) {
    let newDesc = prompt("Enter new description: ", oldDesc)
    //הפעלת הפונקציה בתנאי קצה אפשריים 
    if (newDesc !== null && newDesc !== "") {
        manager.updateTaskDescription(id, newDesc)
        saveTasks();//שומר את המשימות לאחר עריכה
        showTask()
    } else {
        alert("Invalid input")
    }
}

//פונקציה שקוראת לפונקציית מחיקת מהמערך
window.deleteTask = function deleteTask(id) {
    if (confirm("Are you sure?")) {
        manager.deleteTask(id);
        saveTasks();//שומר את המשימות לאחר מחיקה
        showTask();
    }
}

// הפעלת הפונקציה לייבוא המשימות מה-localStorage בעת רענון הדף
importTasks();
// הפעלת הפונקציה להצגת המשימה לדוגמא
showTask();

