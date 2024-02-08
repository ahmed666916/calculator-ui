const container = document.getElementById("container");

const buttonTexts = ['7', '8', '9', 'DEL', '4', '5', '6', '+', '1', '2', '3',
 '-', '.', '0', '/', '×'];

const display_container = document.getElementById("display-container");

const button_container = document.getElementById("button-container");


buttonTexts.forEach((text) => {
    const button = document.createElement("button");
    button.id = `button_${text.replace(/\s+/g, '_')}`;
    button.classList.add("button");
    button.textContent = text;

    button_container.appendChild(button);
   
})

container.appendChild(display_container);
container.appendChild(button_container);
