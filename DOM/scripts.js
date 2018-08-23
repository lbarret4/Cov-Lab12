//1. Add Button to DOM page with an alert('') action when pressed
let button = document.createElement('button');
let btnText = document.createTextNode('Submit');
button.appendChild(btnText);
button.setAttribute('type', 'submit');
button.addEventListener('click', function (e) {
    e.preventDefault();
    alert('Greetings!');

});
document.body.insertBefore(button, document.querySelector('script'));

//2. Adds an event listener for a clicked textbox button, where the text box content is displayed in an alert message.

let textBox = document.querySelector('input[type=\'text\']');
let textBtn = document.querySelector('#textBtn');

textBtn.addEventListener('click', function (e) {
    e.preventDefault();
    alert(textBox.value);
})

//3. Changes background color of div area on the DOM page as mouse hovers over  
let div = document.querySelector('div');
let oldColor = div.style.backgroundColor;

div.addEventListener('mousemove', function () {
    div.style.backgroundColor = 'red';
});

div3.addEventListener("mouseout",function(){
    div3.style.backgroundColor= oldColor;
    });