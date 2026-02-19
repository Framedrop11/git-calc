function getInputs() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    
    return {
        num1: parseFloat(num1),
        num2: parseFloat(num2),
        isValid: !isNaN(num1) && !isNaN(num2) && num1 !== '' && num2 !== ''
    };
}

document.getElementById('add').addEventListener('click', function() {
    const inputs = getInputs();
    if (inputs.isValid) {
        const result = inputs.num1 + inputs.num2;
        console.log(`${inputs.num1} + ${inputs.num2} = ${result}`);
    } else {
        alert('Please enter valid numbers');
    }
});

