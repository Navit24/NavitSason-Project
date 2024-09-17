//ייבוא מחלקה מקובץ אחר
import Task from "./Task.js";

//המחלקה הבאה כוללת מתודות המנהלות את המערך המשימות 
class TaskManager {
    constructor() {
        this.tasks = [];//מחזיקה מערך משימות מסוג Task
    }

    //המתודה הבאה מקבלת תיאור משימה, מייצרת אוביקט משימה חחדש מסוג Task
    // ומוסיפה אותו למערך המשימות 
    addTask(description) {
        this.tasks.push(new Task(description));
    }

    //המתודה הבאה מקבלת מספר מזהה ומוחקת את המשימה ממערך המשימות 
    deleteTask(id) {
        this.tasks = this.tasks.filter((task) => task.id != id);
    }

    //המתודה הבאה הבאה מקבלת מספר מזהה ותיאור חדש ומעדכנת את התיאור החדש 
    updateTaskDescription(id, newDescription) {
        let indexToUpdate = this.tasks.findIndex((task) => task.id == id)// מציאת מיקום id במערך
        this.tasks[indexToUpdate].description = newDescription;
    }

    //המתודה הבאה מקבלת מספר מזהה ומעדכנת את סטטוס משימה ל'הושלמה'-true
    completeTask(id) {
        let indexToUpdate = this.tasks.findIndex((task) => task.id == id)// מציאת מיקום id במערך
        this.tasks[indexToUpdate].completed = true;
    }
}

//ייצוא המחלקה לקבצים אחרים 
export default TaskManager;