const inputSide = document.getElementById('t3-side');
const inputHeight = document.getElementById('t3-height');
const calculateButton3 = document.getElementById('t3-calculate');
const result3 = document.getElementById('t3-result');

calculateButton3.addEventListener('click', () => {
    const side = parseFloat(inputSide.value);
    const height = parseFloat(inputHeight.value);

    const area = 0.5 * side * height;
    result3.textContent = "Площа трикутника: " + area.toFixed(2);
});