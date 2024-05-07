
function convertTemperature() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");

    if (celsiusInput.value !== "") {
        const celsiusValue = parseFloat(celsiusInput.value);
        const fahrenheitValue = celsiusValue * 1.8 + 32;

        fahrenheitInput.value = fahrenheitValue.toFixed(2);
    } else if (fahrenheitInput.value !== "") {
        const fahrenheitValue = parseFloat(fahrenheitInput.value);
        const celsiusValue = (fahrenheitValue - 32) / 1.8;

        celsiusInput.value = celsiusValue.toFixed(2);
    }
}


function convertHours() {
    const hoursInput = document.getElementById("hours");
    const minutesInput = document.getElementById("minutes");

    if (hoursInput.value !== "") {
        const hoursValue = parseFloat(hoursInput.value);
        const minutesValue = hoursValue * 60;

        minutesInput.value = minutesValue.toFixed(2);

    } else if (minutesInput.value !== "") {
        const minutesValue = parseFloat(minutesInput.value);
        const hoursValue = minutesValue / 60;

        hoursInput.value = hoursValue.toFixed(2);
    }
}

function convertCentimeters() {
    const centimeterInput = document.getElementById("centimeter");
    const inchInput = document.getElementById("inch");

    if (centimeterInput.value !== "") {
        const centimeterValue = parseFloat(centimeterInput.value);
        const inchValue = centimeterValue / 100;

        inchInput.value = inchValue.toFixed(2);

    } else if (inchInput.value !== "") {
        const inchValue = parseFloat(inchInput.value);
        const centimeterValue = inchValue * 1;

        centimeterInput.value = centimeterValue.toFixed(2);
    }
}

function convertReal() {
    const realInput = document.getElementById("real");
    const dolarInput = document.getElementById("dolar");

    if (realInput.value !== "") {
        const realValue = parseFloat(realInput.value);
        const dolarValue = realValue / 5.24;

        dolarInput.value = dolarValue.toFixed(2);
    } else if (dolarInput.value !== "") {
        const dolarValue = parseFloat(dolarInput.value);
        const realValue = dolarValue * 5.24;

        realInput.value = realValue.toFixed(2);
    }
}