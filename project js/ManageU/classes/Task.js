
// המחלקה הבאה מייצגת משימה. לכל משימה יש מספר מזהה (רדנומלי), תיאור וסטטוס המשימה 
// משימה חדשה תהיה אוטומטית בסטטוס 'טרם הושלמה'-false
class Task {
    constructor(description) {
        this.id = Math.floor(Math.random() * 1000); //מספר מזהה רנדומלי
        this.description = description; //מתקבל חיצונית
        this.completed = false;// מוגדר מראש כ-משימה שטרם הושלמה

    }
}

//ייצוא המחלקה לקבצים אחרים 
export default Task;