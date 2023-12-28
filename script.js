function calculate() {
    var sideA = parseFloat(document.getElementById('sideA').value);
    var sideB = parseFloat(document.getElementById('sideB').value);

    if (!isNaN(sideA) && !isNaN(sideB)) {
        var result = Math.sqrt(sideA * sideA + sideB * sideB);
        document.getElementById('result').innerText = 'Answer: ' + result.toFixed(2);
    } else {
        document.getElementById('result').innerText = 'Please enter valid numbers for both sides.';
    }
}