function addWeek(date) {
    const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
        "secondMonday",
        "secondTuesday",
        "secondWednesday",
        "secondThursday",
        "secondFriday",
        "secondSaturday",
        "secondSunday",
    ];

    const start = new Date("0001-01-01");
    const currentDate = new Date(date);

    let dayToMs = 24 * 60 * 60 * 1000;
    let diff = currentDate - start;

    return days[(diff / dayToMs) % 14];
}

function timeTravel({ date, hour, minute, second }) {
    let newDate = new Date(date);
    newDate.setHours(hour, minute, second);
    return newDate;
}
