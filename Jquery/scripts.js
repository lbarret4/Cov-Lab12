//1. Add Button to jQuery page with an alert('') action when pressed
let button = $('<button type=\'submit\'>Submit</button>').appendTo('body');
button.click(function(e){
  e.preventDefault();
  alert('Greetings!')
  
  
});
