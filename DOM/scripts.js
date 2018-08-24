//1. Add Button to DOM page with an alert('') action when pressed
let button = document.createElement('button');
let btnText = document.createTextNode('Greeting');
let formTag = document.querySelector('form');
button.appendChild(btnText);
button.setAttribute('type', 'submit');
button.addEventListener('click', function (e) {
    e.preventDefault();
    alert('Greetings!');

});
document.body.insertBefore(button, formTag.previousElementSibling);

//2. Adds an event listener for a clicked textbox button, where the text box content is displayed in an alert message.

let textBox = document.querySelector('input[type=\'text\']');
let textBtn = document.querySelector('#textBtn');

textBtn.addEventListener('click', function (e) {
    e.preventDefault();
    alert(textBox.value);
});

//3. Changes background color of div area on the DOM page as mouse hovers over  
let div = document.querySelector('div');
let oldColor = div.style.backgroundColor;

div.addEventListener('mousemove', function () {
    div.style.backgroundColor = 'red';
});

div.addEventListener("mouseout", function () {
    div.style.backgroundColor = oldColor;
});

//4. Add text paragraph that changes color randomly when clicked

let p = document.createElement('p');
let pText = document.createTextNode
    ('****************************************************Click me* **************************************************** ');
let scriptTag = document.querySelector('script');
p.appendChild(pText);
document.body.insertBefore(p, scriptTag.previousElementSibling);

p.addEventListener("click", function () {
    p.style.color = randomColor();
})


function randomColor() {
    let [red, green, blue] = [Math.ceil(Math.random() * 255), Math.ceil(Math.random() * 255), Math.ceil(Math.random() * 255)];
    return `rgb(${red},${green},${blue})`;
}


//5.Adds an empty div area to the DOM page and a button that adds    span enclosing text 
let divBtn = document.createElement('button');
let divBtnText = document.createTextNode('Show Name');
let divSpan = document.createElement('div');
let span = document.createElement('span');
let myName = 'Llewellyn Barrett';
let spanText = document.createTextNode(myName);
var liBtn = document.querySelector('#listBtn');

document.body.insertBefore(divBtn, liBtn);
divBtn.appendChild(divBtnText);
document.body.insertBefore(divSpan, divBtn.nextSibling);
divBtn.addEventListener('click', function (e) {
    e.preventDefault();
    span.appendChild(spanText);
    divSpan.appendChild(span);
});

//6. Add friends list to DOM page once by pressing friends list button
let friends = ['Charles', 'Jemma', 'Kim', 'Amanda', 'Kenji', 'John', 'Candice', 'Robert', 'Tina', 'Patricia'];


let ul = document.querySelector('ul');

liBtn.addEventListener('click', function (e) {
    e.preventDefault();
    addList();

}, { once: true });

function addList() {

    for (let friend of friends) {

        let li = document.createElement('li');
        let liText = document.createTextNode(friend);
        li.appendChild(liText);
        ul.appendChild(li);
    }

}
