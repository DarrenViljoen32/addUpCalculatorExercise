let input = document.querySelector(`input`);
let equal = document.querySelectorAll(`button`)[11];
let buttons = document.querySelectorAll(`[value]`);

function addNums(btnValues){
    input.value += btnValues;
}

buttons.forEach(btn => {
    btn.addEventListener(`click`, () => addNums(btn.value))
})

equal.addEventListener(`click`, () => {
    input.value = eval(input.value)
})
