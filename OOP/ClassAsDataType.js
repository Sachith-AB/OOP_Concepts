class Date {
    constructor(day, month, year){
        this.day = day;
        this.month = month;
        this.year = year;
    }

    getDate(){
        console.log(`${this.day}.${this.month}.${this.year}`);
    }
}

const today = new Date(2, 8, 2025);

const createYesterday = (today) => {
    newDay = today.day - 1;
    const yesterDay = new Date(newDay, today.month, today.year);
    return yesterDay;
}

createYesterday(today).getDate();


