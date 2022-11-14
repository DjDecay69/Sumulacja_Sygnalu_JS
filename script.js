function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function getCurrentTimestamp () {
    return Math.floor(Date.now() / 1000);
}
var lastSignal = -1;
var signals = [];

function sendSignals(s) {
    signals = s;
    if(signals.length <1){
        var randomNumsOfPackets = getRandomInt(4)+2;
        console.log(randomNumsOfPackets + " num of packets")

        var index = 0;
        const interval = setInterval(() => {
            var randomSignal = getRandomInt(2);
            var currentTimeStamp = getCurrentTimestamp();

            var signal = {
                timestamp: currentTimeStamp,
                digitNum: randomSignal
            }
            console.log(currentTimeStamp+": "+randomSignal)
            signals.push(signal)
            index++;
            if(index == randomNumsOfPackets){
                clearInterval(interval);
                console.log("\n\n\nWynik:")
                showResults()
            }    
        }, (getRandomInt(6)+5)*1000); // random time between signal inputs
    }
    else{
        showResults()
    }
}

function showResults(){
    console.log(signals)
    signals.forEach(element => {

        if(element.digitNum !== lastSignal){
            console.log(element.timestamp + ": "+element.digitNum);
            lastSignal = element.digitNum;
        }
    })
}

function test(){
    console.log("Predefined case: \n")
    sendSignals([
        {timestamp: 1615560000, digitNum: 1},
        {timestamp: 1615560005, digitNum: 1},
        {timestamp: 1615560013, digitNum: 1},
        {timestamp: 1615560018, digitNum: 1},
        {timestamp: 1615560024, digitNum: 0},
        {timestamp: 1615560030, digitNum: 1},
        {timestamp: 1615560037, digitNum: 0},
        {timestamp: 1615560042, digitNum: 0}
    ]);
    console.log("\nRandom input case: \n\n")
    sendSignals([]);
}
test();