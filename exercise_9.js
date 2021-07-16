function delayTime() {
    let min = 500;
    let max = 2000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function simulateDelay() {
    await new Promise(resolve => setTimeout(resolve, delayTime()));
}

function toUpper(charSequence) {
    return charSequence.toUpperCase();
}

async function server(charSequence) {
    await simulateDelay();
    if (typeof charSequence === 'string') {
        return {
            status: 200, 
            result: toUpper(charSequence),
        };
    } else {
        return {
            status: 400,
            result: 'The request value is not supported.',
        };
    }
}

//Input Correto
server("teste").then(e => console.log(e));
//Input Inválido
server(123).then(e => console.log(e));