//1. Add Button to jQuery page with an alert('') action when pressed
let button = $('<button type=\'submit\'>Greeting</button>').insertBefore('script[src*=\'query\']');
  button.click(function(e){
    e.preventDefault();
    alert('Greetings!')
    
    
  });

//2. Adds an event listener for a clicked textbox button, where the text box content is displayed in an alert message.

let  textBtn =$('#textBtn');
textBtn.click(function(e){
  e.preventDefault();
  let text = $('input[type=\'text\']').val();
  window.alert(text);
})


//3. Changes background color of div area on the jQuery page as mouse hovers over 
let $div = $('div');
let oldColor =$div.css('backgroundColor');

$div.hover(function(){
    $div.css('backgroundColor','red');
    
  },function(){
    $div.css('backgroundColor',oldColor);
    
  })

