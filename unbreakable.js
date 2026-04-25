const split = (input, sep) => {
  input = String(input)

  // if separator is undefined → return whole string
  if (sep === undefined) return [input]

  sep = String(sep)
  let res = []
  let start = 0
  let len = sep.length

  // split into characters
  if (len === 0) {
    for (let i = 0; i < input.length; i++) {
      res.push(input[i])
    }
    return res
  }

  for (let i = 0; i <= input.length - len; i++) {
    if (input.slice(i, i + len) === sep) {
      res.push(input.slice(start, i))
      start = i + len
      i += len - 1
    }
  }

  res.push(input.slice(start))
  return res
}

const join = (input, sep) => {
  sep = sep === undefined ? "," : String(sep)

  let res = ""

  for (let i = 0; i < input.length; i++) {
    if (i > 0) res += sep
    res += input[i] !== undefined && input[i] !== null
      ? String(input[i])
      : ""
  }

  return res
}