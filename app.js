function appendToDisplay(value) {
    let display = document.getElementById('display');

    if (display.value === '0') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function calculate() {
    let display = document.getElementById('display');

    if (display.value.trim() === '') {
        display.value = '0';
        return;
    }

    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Hata';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}
