const planetes = {
    earth: 1,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
};

const dogYears = (planet, ageInSec) => {
    const earthYearInSec = 31557600;
    const result = (ageInSec * 7) / (earthYearInSec * planetes[planet]);

    return parseFloat(result.toFixed(2));
};
