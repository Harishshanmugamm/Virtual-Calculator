document.addEventListener('DOMContentLoaded', function() {
    const screen = document.querySelector('.calc-scr');
    const buttons = document.querySelectorAll('.calc button');
    let screenValue = '';
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonValue = this.value;

            if (buttonValue === '=') {
                screen.value = eval(screenValue);
            } else if (buttonValue === 'C') {
                screenValue = '';
                screen.value = '';
            } else if(buttonValue === 'del'){
                screenValue = screenValue.slice(0, -1);
                screen.value = screenValue;
            } 
            else {
                screenValue += buttonValue;
                screen.value = screenValue;
            }
        });
    });
});