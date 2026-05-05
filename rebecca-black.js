const isFriday = (date) => {
    return new Date(date).getDay() === 5;
};

const isWeekend = (date) => {
    const day = new Date(date).getDay();
    return day === 0 || day === 6; // Sunday or Saturday
};

const isLeapYear = (date) => {
    const year = new Date(date).getFullYear();

    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};

const isLastDayOfMonth = (date) => {
    const d = new Date(date);

    return d.getDate() === new Date(
        d.getFullYear(),
        d.getMonth() + 1,
        0
    ).getDate();
};