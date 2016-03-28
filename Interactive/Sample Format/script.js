$(document).ready(function() {
    $('div').mouseenter(function()
    {
        $('div').fadeTo('fast', 1);
    }); 
    $('div').mouseleave(function()
    {
        $('div').fadeTo('fast', 0.5);
    });
});

/* Let's go through it bit by bit.

$(document).ready(function() {
    Do something
});

$(document) is a jQuery object. 

The $() is actually a function in disguise; it turns the document into a jQuery object.

.ready() is a type of function; you can think of it as sort of a helper that runs the code inside its parentheses as soon as the HTML document is ready.

function(){} is the action that .ready() will perform as soon as the HTML document is loaded. (In the above example, the Do something placeholder is where those actions would go.) */