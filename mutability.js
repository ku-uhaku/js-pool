const person = {
    name : "Kuuhaku",
    age : 25,
    country: 'US',
}

const clone1 = { ...person }

const clone2 = Object.assign({}, person)

const samePerson = person

person.age++
person.country = "MA"

console.log(clone1)
console.log(clone2)
console.log(samePerson)