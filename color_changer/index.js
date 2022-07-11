function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}
letters = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];

function changeColor()
{
    var hex = '#';
    for(i=0;i<6;i++)
    {
        hex += choose(letters);
    }
    $('.container').css('background-color',hex);
    $('.hex').text(hex);
}
function changeColorO()
{
    var hex = '#';
    for(i=0;i<8;i++)
    {
        hex += choose(letters);
    }
    $('.container').css('background-color',hex);
    $('.hex').text(hex);
}
var interval = -1;
function auto()
{
    if(interval == -1)
    {
        interval = setInterval(changeColorO, 1000);
        $('#auto').text('STOP');
    }
    else 
    {
        clearInterval(interval);
        $('#auto').text('AUTO');
        interval = -1;
    }
}

