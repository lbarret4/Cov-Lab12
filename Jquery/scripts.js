//1. Add Button to jQuery page with an alert('') action when pressed
let button = $('<button type=\'submit\'>Greeting</button>').insertBefore('script[src*=\'query\']');
button.click(function (e) {
    e.preventDefault();
    alert('Greetings!')


});

//2. Adds an event listener for a clicked textbox button, where the text box content is displayed in an alert message.

let textBtn = $('#textBtn');
textBtn.click(function (e) {
    e.preventDefault();
    let text = $('input[type=\'text\']').val();
    window.alert(text);
});


//3. Changes background color of div area on the jQuery page as mouse hovers over 
let $div = $('div');
let oldColor = $div.css('backgroundColor');

$div.hover(function () {
    $div.css('backgroundColor', 'red');

}, function () {
    $div.css('backgroundColor', oldColor);

});

//4. Add text paragraph that changes color randomly when clicked 
let $para = $('<p>****************************************************Click me* ****************************************************</p>').insertAfter($('form'));
$para.on('click', function () {

    $para.css('color', randomColor());
});

function randomColor() {
    let [red, green, blue] = [Math.ceil(Math.random() * 255), Math.ceil(Math.random() * 255), Math.ceil(Math.random() * 255)];
    return `rgb(${red},${green},${blue})`;
}

//5.Adds an empty div area to the jQuery page and a button that adds    span enclosing text 
let $divBtn = $('<button> Show Name </button>');
let $divSpan = $('<div></div>');
let $span = $('<span> Llewellyn Barrett </span>');

$('form').after($divBtn);
$divBtn.after($divSpan);
$divBtn.click(function (e) {
    e.preventDefault();
    $divSpan.append($span);

});



//6. Add friends list to jQuery page once by pressing friends list button
let friends = ['Charles', 'Jemma', 'Kim', 'Amanda', 'Kenji', 'John', 'Candice', 'Robert', 'Tina', 'Patricia'];

let $ul = $('ul');
let $liBtn = $('#listBtn');


$liBtn.one('click', function (e) {
    e.preventDefault();
    addList();
});

function addList() {
    for (let friend of friends) {
        $ul.append($(`<li>${friend}</li>`));
    }

}
