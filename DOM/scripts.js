//1. Add Button to DOM page with an alert('') action when pressed
let button = document.createElement('button');
let btnText = document.createTextNode('Submit');
button.appendChild(btnText);
button.setAttribute('type', 'submit');
button.addEventListener('click', function (e) {
    e.preventDefault();
    alert('Greetings!');

});
document.body.appendChild(button);