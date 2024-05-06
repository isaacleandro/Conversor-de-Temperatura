
function convertTemperature() {
    const celsiusInout = document.getElementById("celsius").value;
    const fahrenheitInout = document.getElementById("fahrenheit").value;

    if (celsiusInout.value !== "") {
        const celsiusValue = parseFloat(celsiusInout);
        const fahrenheitValue = celsiusValue * 1.8 + 32;

        fahrenheitInout.value = fahrenheitValue.toFixed(2);
    } else if (fahrenheitInout.value !== "") {
        const fahrenheitValue = parseFloat(fahrenheitInout);
        const celsiusValue = (fahrenheitValue - 32) / 1.8;

        celsiusInout.value = celsiusValue.toFixed(2);
    }
}