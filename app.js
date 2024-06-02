console.log('hello world');

window.addEventListener('load', function() {
    console.log('window loaded');
});

global.name = 'John Doe';

function getName() {
    return global.name;
}

function setName(newName) {
    global.name = newName;
}

