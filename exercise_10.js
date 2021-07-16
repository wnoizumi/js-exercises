var lampState = true;

function checkLampState(callback) {
    let interval = Math.floor(Math.random() * 2000) + 2000;
    console.log("Interval: " + interval);

    setInterval(() => {
        lampState = !lampState;
        callback(lampState);
    }, interval);
}

checkLampState(e => console.log(e ? "aceso" : "apagado"));