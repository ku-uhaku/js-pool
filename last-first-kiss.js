const first = (input) => {
  return input[0]
}

const last = (input) => {
  return input[input.length - 1]
}

const kiss = (input) => {
  return [last(input), first(input)]
}