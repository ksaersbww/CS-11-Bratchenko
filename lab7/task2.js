const inputA2 = document.getElementById('t2-a');
const inputB2 = document.getElementById('t2-b');
const inputAngle = document.getElementById('t2-angle');
const calculateButton2 = document.getElementById('t2-calculate');
const result2 = document.getElementById('t2-result');

calculateButton2.addEventListener('click', () => {
    const a = parseFloat(inputA2.value);
    const b = parseFloat(inputB2.value);
    const angle = parseFloat(inputAngle.value);

    const area = 0.5 * a * b * Math.sin(angle * Math.PI / 180);
    result2.textContent = "Площа трикутника: " + area.toFixed(2);
});