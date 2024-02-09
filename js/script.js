const display = document.getElementById("calculator__output");
const calculatorKeys = document.querySelector('.calculator__keys');


calculatorKeys.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const buttonText = event.target.textContent;
        if (event.target.classList.contains('calculator__key--operator')) {
            handleButtonClick(" " + buttonText + " ");
        } else if(event.target.classList.contains('calculator__key--enter')) {
			operate();
			return;
		}else if(event.target.classList.contains('all_clear')) {
			clearDisplay();

		}
		else {
            handleButtonClick(buttonText);
        }


    }
});


function clearDisplay() {
	display.innerHTML = "0";
}


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

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b) {
    let inputArray = getInputText();
    let num1 = inputArray[0];
    let num2 = inputArray[1];
    let operator = inputArray[2];
    if (operator === "+") {
        let sum = add(num1, num2);
        return displayResult(sum) ;
        
    }else if(operator === "-") {
        let difference = subtract(num1, num2);

        return displayResult(difference);
    }else if(operator === "×") {
        let product = multiply(num1, num2);
        return displayResult(product);
    }else if(operator === "÷") {
        let division = divide(num1, num2);
        return displayResult(division);
    }else {
        alert("Error!");
    }

}


function displayResult(result) {
    display.innerHTML = result;
}



