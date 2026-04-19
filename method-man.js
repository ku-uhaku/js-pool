const words = (input) => {
    return input.split(" ")
}

const sentence = (input) => {
    return input.join(" ")
}

const yell = (input) => {
    return input.toUpperCase()
}

const whisper = (input) => {
    return  "*" + input.toLowerCase() + "*"
}   

const capitalize = (input) => {
    return  input
        .split(" ")
        .map(element => {
            return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
        })
        .join(" ");
}
