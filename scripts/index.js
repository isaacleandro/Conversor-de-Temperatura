
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

function convertCentimeter() {
    const centimetrosInput = document.getElementById("centimeter");
    const inchInput = document.getElementById("inch");

    if (centimetrosInput.value !== "") {
        const centimetrosInputValue = parseFloat(centimetrosInput.value);
        const inchInputValue = centimetrosInputValue / 2.54;

        inchInput.value = inchInputValue.toFixed(2);

    } else if (inchInput.value !== "") {
        const inchInputValue = parseFloat(inchInput.value);
        const centimetrosInputValue = inchInputValue * 2.54;

        centimetrosInput.value = centimetrosInputValue.toFixed(2);
    }
}