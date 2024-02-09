const display = document.getElementById("calculator__output");
const calculatorKeys = document.querySelector('.calculator__keys');


calculatorKeys.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const buttonText = event.target.textContent;
        if (event.target.classList.contains('calculator__key--operator')) {
            handleButtonClick(" " + buttonText + " ");
        } else {
            handleButtonClick(buttonText);
        }


    }
});



function handleButtonClick(buttonText) {


	
    display.innerHTML += `${buttonText}`;

}

function getInputText() {
    let inputValue = display.innerHTML;
    //console.log(inputValue);
    //console.log(typeof(inputValue));
    let numArray = inputValue.split(" ");
    let num1 = parseFloat(numArray[0]);
    let num2 = parseFloat(numArray[2]);
    let operator = numArray[1];

    //console.log(num1);
    //console.log(num2);
    //console.log(operator);
    let inputArray = [];
    inputArray.push(num1);
    inputArray.push(num2);
    inputArray.push(operator);
    

    return inputArray;

}
