const isValid = (date) => {
    if (typeof date == "string") return false;

    return !isNaN(new Date(date).getTime());
};

const isAfter = (date1, date2) => {
    if (!isValid(date1) || !isValid(date2)) return false;
    return new Date(date1) > new Date(date2);
};

const isBefore = (date1, date2) => {
    if (!isValid(date1) || !isValid(date2)) return false;
    return new Date(date1) < new Date(date2);
};

const isFuture = (date) => {
    if (!isValid(date)) return false;
    return new Date(date) > new Date();
};

const isPast = (date) => {
    if (!isValid(date)) return false;
    return new Date(date) < new Date();
};
