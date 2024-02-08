
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