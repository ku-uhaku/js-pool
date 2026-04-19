const is = {}

is.num = (val) => typeof val === 'number'
is.nan = (val) => Number.isNaN(val)
is.str = (val) => typeof val === 'string'
is.bool = (val) => typeof val === 'boolean'
is.undef = (val) => typeof val === 'undefined'
is.def = (val) => typeof val !== 'undefined'
is.arr = (val) => Array.isArray(val)
is.obj = (val) => typeof val === 'object' && val !== null && !Array.isArray(val)
is.fun = (val) => typeof val === 'function'
is.truthy = (val) => !!val
is.falsy = (val) => !val

console.log(is.nan("das"))