function firstDayWeek(number, year) {
    const yearNum = parseInt(year);

    const jan1 = new Date(0);
    jan1.setFullYear(yearNum, 0, 1);
    jan1.setHours(0, 0, 0, 0);

    const jan1Day = jan1.getDay();
    const daysToMonday = jan1Day === 0 ? 6 : jan1Day - 1;

    const targetMonday = new Date(jan1);
    targetMonday.setDate(jan1.getDate() - daysToMonday + (number - 1) * 7);

    if (targetMonday < jan1) {
        return formatDate(jan1);
    }

    return formatDate(targetMonday);
}

function formatDate(date) {
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = String(date.getFullYear()).padStart(4, "0");
    return `${dd}-${mm}-${yyyy}`;
}
