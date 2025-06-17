let displayScreen = document.getElementById('output-screen'); // Corrected ID
let evalString = '';

function display(displayChar, evalChar) {
    displayScreen.value += displayChar;
    evalString += evalChar;
}

function calculate() {
    try {
        displayScreen.value = eval(evalString);
        evalString = displayScreen.value;
    } catch (err) {
        displayScreen.value = "Error";
        evalString = '';
    }
}

function clearScreen() {
    displayScreen.value = '';
    evalString = '';
}

function equal() {
    calculate();
}

function del() {
    displayScreen.value = displayScreen.value.slice(0, -1);
    evalString = evalString.slice(0, -1);
}
