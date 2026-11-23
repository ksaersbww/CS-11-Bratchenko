const inputNumber7 = document.getElementById('t7-number');
const calculateButton7 = document.getElementById('t7-calculate');
const result7 = document.getElementById('t7-result');

calculateButton7.addEventListener('click', () => {
    const n = parseInt(inputNumber7.value);

    let prev = 1;
    let curr = 1;

    for (let i = 3; i <= n; i++) {
        const next = prev + curr;
        prev = curr;
        curr = next;
    }

    result7.textContent = n + "-е число Фібоначі: " + curr;
});