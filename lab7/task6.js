const inputWord1 = document.getElementById('t6-word1');
const inputWord2 = document.getElementById('t6-word2');
const calculateButton6 = document.getElementById('t6-calculate');
const result6 = document.getElementById('t6-result');

calculateButton6.addEventListener('click', () => {
    const word1 = inputWord1.value.toLowerCase().split('').sort().join('');
    const word2 = inputWord2.value.toLowerCase().split('').sort().join('');

    if (word1 === word2) {
        result6.textContent = "анаграма";
    } else {
        result6.textContent = "не анаграма";
    }
});