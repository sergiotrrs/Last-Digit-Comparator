const registerForm = document.forms["numberForm"];

registerForm.addEventListener("submit", event => {
    event.preventDefault();
    const num1 = parseInt(registerForm.elements["number1"].value);
    const num2 = parseInt(registerForm.elements["number2"].value);
    const num3 = parseInt(registerForm.elements["number2"].value);

    result = document.getElementById("result");
    try {
        const isLastDigitEquals = compareLastDigit(num1, num2, num3);
        result.innerHTML = isLastDigitEquals
            ? `<div class='alert alert-success'>Los últimos dígitos son iguales.</div>`
            : `<div class='alert alert-danger'>Los últimos dígitos no son iguales.</div>`;
    } catch (error) {
        result.innerHTML = `<div class='alert alert-danger'> ${error.message} </div>`;
    }
});

/**
 * Compara si el último dígito de tres números enteros es igual.
 *
 * @param {number} number1 - El primer número entero (1-999).
 * @param {number} number2 - El segundo número entero (1-999).
 * @param {number} number3 - El tercer número entero (1-999).
 * @returns {boolean} true si el último dígito de los tres números es igual, de lo contrario false.
 */
function compareLastDigit(number1, number2, number3) {
    
    
}