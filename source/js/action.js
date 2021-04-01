const selectOptions = document.getElementById('licenses-number');
const radio1 = document.querySelector('.radio1');
const radio2 = document.querySelector('.radio2');
const radio3 = document.querySelector('.radio3');

let optionValue = selectOptions[selectOptions.selectedIndex].value;
const changeSelectOption = () => {
    optionValue = selectOptions[selectOptions.selectedIndex].value;
    chooseActiveRadio();
}
selectOptions.onchange = changeSelectOption;

const chooseActiveRadio = () => {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    for (let radio of radioButtons) {
        radio.parentNode.style.backgroundColor = "inherit";
    }
    for (let radio of radioButtons) {
        if (radio.checked) {
            const planNumber = document.querySelector(`.plan-${radio.value}`).innerText;
            const selectedPlanNumber = document.querySelector('.selected-plan span:last-child');
            const planPrice = document.querySelector(`.price-${radio.value}`).innerText;
            const totalPrice = document.querySelector('.money-amount');
            selectedPlanNumber.innerText = planNumber;
            radio.parentNode.style.backgroundColor = "#ebf4f7";
            radio.parentNode.style.border = "1px solid #dce9ee";
            totalPrice.innerText = planPrice * optionValue;
        }
    }
}

chooseActiveRadio();
radio1.onclick = chooseActiveRadio;
radio2.onclick = chooseActiveRadio;
radio3.onclick = chooseActiveRadio;