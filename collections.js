// Iterables to Sets/Arrays
const arrToSet = (arr) => new Set(arr)
const arrToStr = (arr) => arr.join('')
const setToArr = (set) => [...set]
const setToStr = (set) => [...set].join('')

// String conversions
const strToArr = (str) => str.split('')
const strToSet = (str) => new Set(str)

// Map/Object conversions
const mapToObj = (map) => Object.fromEntries(map)
const objToArr = (obj) => Object.values(obj)
const objToMap = (obj) => new Map(Object.entries(obj))

// Index-based Object conversions
const arrToObj = (arr) => Object.assign({}, arr)
const strToObj = (str) => ({ ...str })

// The Advanced Type Checker
const superTypeOf = (val) => {
    if (val === null) return 'null'
    if (val === undefined) return 'undefined'
    
    // Check for Array, Map, and Set specifically
    if (Array.isArray(val)) return 'Array'
    if (val instanceof Map) return 'Map'
    if (val instanceof Set) return 'Set'
    
    // For primitives, capitalize the first letter of typeof
    const type = typeof val
    return type.charAt(0).toUpperCase() + type.slice(1)
}