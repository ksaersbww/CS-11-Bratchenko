const inputNumber8 = document.getElementById('t8-number');
const calculateButton8 = document.getElementById('t8-calculate');
const result8 = document.getElementById('t8-result');

calculateButton8.addEventListener('click', () => {
    const number = parseInt(inputNumber8.value);

    let prev = 1;
    let curr = 1;

    while (curr < number) {
        const next = prev + curr;
        prev = curr;
        curr = next;
    }

    if (curr === number) {
        result8.textContent = number + " належить послідовності Фібоначчі";
    } else {
        result8.textContent = number + " не належить послідовності Фібоначчі";
    }
});