


/*
//method 1
// define the namespace Game
var Game = {};

// add the function shake to the namespace
Game.shake = function(){...}

//method 2
var Game = {
	// add the function shake to the namespace
	shake: function(){...},
};
*/

var uGameFramework = {};


var botton = {};

botton.init = function(options)
{
	var defaultValues = {
        url : false,
        width : 64,
        numberOfFrames : 1,
        currentFrame : 0,
        rate : 30
    }
    $.extend(this, defaultValues, options);

    alert("url = "+ this.url);
    alert("width = "+ this.width);
    alert("numberOfFrames = "+ this.numberOfFrames);
    alert("currentFrame = "+ this.currentFrame);
    alert("rate = "+ this.rate);

}