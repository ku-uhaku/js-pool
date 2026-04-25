const chunk = (input, nb) => {
  let res = []

  let numberofres = Math.floor(input.length / nb)
  let end = input.length % nb

  // full chunks
  for (let i = 0; i < numberofres; i++) {
    res.push(input.slice(i * nb, i * nb + nb))
  }

  // remaining part
  if (end > 0) {
    res.push(input.slice(input.length - end))
  }

  return res
}



console.log(chunk([1, 2, 3, 4, 5], 6))