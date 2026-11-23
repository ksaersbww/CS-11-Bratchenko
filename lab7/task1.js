const inputA = document.getElementById('t1-a');
const inputB = document.getElementById('t1-b');
const inputC = document.getElementById('t1-c');
const calculateButton = document.getElementById('t1-calculate');
const result = document.getElementById('t1-result');

calculateButton.addEventListener('click', () => {
    const a = parseFloat(inputA.value);
    const b = parseFloat(inputB.value);
    const c = parseFloat(inputC.value);

    const p = (a + b + c) / 2;
    const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    result.textContent = "Площа трикутника: " + area.toFixed(2);
});