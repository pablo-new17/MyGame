


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

uGameFramework.menu = {};
uGameFramework.tab = {};
uGameFramework.botton = {};

uGameFramework.botton.init = function(options)
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

uGameFramework.tab.init = function(options)
{
    var defaultValues = {
        tab_object : $("ul.tablist"),
    }
    $.extend(this, defaultValues, options);

    this.tab_object.children().removeClass('active');
    this.tab_object.children().filter("#base").addClass('active');

    this.tab_object.parent().children().filter("div.tabcontain").hide(0);
    this.tab_object.parent().children().filter("div#tab_base").show(0);
}


$(function() {  //Start Javascript (1st executed function after page load)
    uGameFramework.tab.init({tab_object: $("ul.tablist")});
});