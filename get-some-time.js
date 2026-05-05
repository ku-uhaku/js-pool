const firstDayWeek = (number, year) => {
    const dayOfYear = (number - 1) * 7;
    const date = new Date(year, 0, 1 + dayOfYear);

    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = date.getFullYear();

    return `${dd}-${mm}-${yyyy}`;
};

console.log(firstDayWeek(1, 1000)); // '01-01-1000'
console.log(firstDayWeek(2, 2000)); // '08-01-2000'
