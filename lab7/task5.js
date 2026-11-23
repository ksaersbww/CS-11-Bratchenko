const inputNumber5 = document.getElementById('t5-number');
const calculateButton5 = document.getElementById('t5-calculate');
const result5 = document.getElementById('t5-result');

calculateButton5.addEventListener('click',() =>{
    const number = inputNumber5.value;
    const reversed = number.split('').reverse().join('');

    if (number === reversed) {
        result5.textContent = number + " — паліндром";
    } else {
        result5.textContent = number + " — не паліндром";
    }
})