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

    let start = new Date("0001-01-01");
    let current = new Date(date);
    let msInDay = 24 * 60 * 60 * 1000;
    let diff = current - start;
    return days[Math.floor(diff / msInDay) % 14];
}

function timeTravel({ date, hour, minute, second }) {
    const result = new Date(date);
    result.setHours(hour, minute, second, 0);
    return result;
}
