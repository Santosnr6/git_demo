console.log('Hello, World!');

window.addEventListener('load', function() {
    console.log('The page has fully loaded!');
});

let person = 'Jesper';

function getName() {
    return person;
}

function setName(newName) {
    person = newName;
}
