
function convertTemperature() {
    const celsiusInput = document.getElementById("celsius").value;
    const fahrenheitInput = document.getElementById("fahrenheit").value;

    if (celsiusInput.value !== "") {
        const celsiusValue = parseFloat(celsiusInput);
        const fahrenheitValue = celsiusValue * 1.8 + 32;

        fahrenheitInput.value = fahrenheitValue.toFixed(2);
    } else if (fahrenheitInput.value !== "") {
        const fahrenheitValue = parseFloat(fahrenheitInput);
        const celsiusValue = (fahrenheitValue - 32) / 1.8;

        celsiusInput.value = celsiusValue.toFixed(2);
    }
}