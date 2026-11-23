const inputA4 = document.getElementById('t4-a');
const inputB4 = document.getElementById('t4-b');
const inputC4 = document.getElementById('t4-c');
const inputRadius = document.getElementById('t4-radius');
const calculateButton4 = document.getElementById('t4-calculate');
const result4 = document.getElementById('t4-result');

calculateButton4.addEventListener('click', () => {
    const a = parseFloat(inputA4.value);
    const b = parseFloat(inputB4.value);
    const c = parseFloat(inputC4.value);
    const R = parseFloat(inputRadius.value);

     const area = (a * b * c) / (4 * R);
    result4.textContent = "Площа трикутника: " + area.toFixed(2);
});
