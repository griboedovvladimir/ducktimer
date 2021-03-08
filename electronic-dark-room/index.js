SPI1.setup({mosi: P3, miso: P2, sck: A5});
const quad2 = require('@amperka/quaddisplay2').connect({spi: SPI1, cs: P9});
const beep = require('@amperka/buzzer').connect(P5);
const mainBtn = require('@amperka/button').connect(P1);
const upBtn = require('@amperka/button').connect(P4);
const downBtn = require('@amperka/button').connect(P6);
const relay = require('@amperka/led').connect(P10).turnOff();

function doBeep() {
    beep.frequency(2300);
    beep.beep('0.2');
}

function doLongBeep() {
    beep.frequency(300);
    beep.beep('1');
}

function displayTime(time) {
    quad2.display(getTimeString(time), true);
}

function getTimeString(time) {
    if (time.toString().length < 3) {
        return time.toString() + '.0';
    }
    return time.toString();
}

function incriminate() {
    time = time + 0.1;
}

function decriminate() {
    time = time - 0.1;
}

function resetTime() {
    time = 0;
    displayTime(time);
}

function isTimeNull() {
    return time < 0.1;
}

function mainButtonOnClick(fn){
    mainBtn.on('click', fn)
}

function upButtonOnClick(fn){
    upBtn.on('click', fn)
}

function downButtonOnClick(fn){
    downBtn.on('click', fn)
}

function timer() {
    timerInProcess = true;
    relay.turnOn();
    timer$ = setInterval(() => {
        if (!isTimeNull()) {
            displayTime(time);
            decriminate();
        } else {
            doLongBeep();
            resetTime();
            clearInterval(timer$);
            timerInProcess = false;
            relay.turnOff();
        }
    }, 100);
}

let time = 0;
let initialTime = 0;
displayTime(time);
let timerInProcess = false;
let decimalSet = false;
let timer$;


upButtonOnClick(() => {
    if (decimalSet) {
        if (time > 0.8) {
            resetTime();
            return;
        }
        incriminate();
        displayTime(time);
    } else {
        time = time + 1;
        displayTime(time);
    }
    initialTime = time;
    doBeep();
});

downButtonOnClick(() => {
    if (decimalSet) {
        if (isTimeNull()) {
            resetTime();
            return;
        }
        decriminate();
        displayTime(time);
    } else {
        time = time - 1;
        displayTime(time);
    }
    initialTime = time;
    doBeep();
});

mainButtonOnClick(() => {
    if (!timerInProcess && isTimeNull() && !initialTime) {
        relay.turnOn();
        timerInProcess = true;
    }
    else if (!timerInProcess && isTimeNull()) {
        relay.turnOff();
        time = initialTime;
        displayTime(time);
    } else if (!timerInProcess) {
        timer();
    }
    else {
        clearInterval(timer$);
        relay.turnOff();
        timerInProcess = false;
    }
    doBeep();
});


