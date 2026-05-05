const isValid = (date) => {
    if (typeof date === "number") return !isNaN(date);
    return date instanceof Date && !isNaN(date);
};

const isAfter = (date1, date2) =>
    isValid(date1) && isValid(date2) && date1 - date2 > 0;
const isBefore = (date1, date2) =>
    isValid(date1) && isValid(date2) && date1 - date2 < 0;
const isFuture = (date) => isValid(date) && date - new Date() > 0;
const isPast = (date) => isValid(date) && date - new Date() < 0;
