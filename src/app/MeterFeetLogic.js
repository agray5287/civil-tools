function runScript() {
    const number = parseFloat(document.getElementById('numberInput').value);
    const unit = document.getElementById('unitSelect').value;
    let result;
    
    if (unit === 'meters') {
        result = number * 3.28084;
        document.getElementById('result').textContent = `${number} meters = ${result.toFixed(3)} feet`;
    } else {
        result = number / 3.28084; 
        document.getElementById('result').textContent = `${number} feet = ${result.toFixed(3)} meters`;
    }
    
    document.getElementById('result').style.display = 'block';
    
    return false;
}