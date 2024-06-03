window.addEventListener('load', function() {
    console.log('The page has been changed');
});

function getRootValue(number) {
    return Math.sqrt(number);
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


let person = 'Jesper';

function getName() {
    return person;
}

function setName(newName) {
    person = newName;
}
