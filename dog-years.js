const yearSec = 31557600

const planetList = [
    { name: "earth", year: 1 },
    { name: "mercury", year: 0.2408467 },
    { name: "venus", year: 0.61519726 },
    { name: "mars", year: 1.8808158 },
    { name: "jupiter", year: 11.862615 },
    { name: "saturn", year: 29.447498 },
    { name: "uranus", year: 84.016846 },
    { name: "neptune", year: 164.79132 }
]

const dogYears = (planet, ageInSeconds) => {
    let earthAge = ageInSeconds / yearSec
    let targetPlanet = planetList.find(ele => ele.name === planet)
    
    let result = (earthAge / targetPlanet.year) * 7
    
    return parseFloat(result.toFixed(2))
}

console.log(dogYears("earth", 31557600 * 11))