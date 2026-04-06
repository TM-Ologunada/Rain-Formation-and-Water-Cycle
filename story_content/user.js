window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("Slider1");

// Convert 0–100 to 0–1 scale
var normalizedVolume = volume / 100;

// Send to web object
var iframe = document.querySelector("iframe");
iframe.contentWindow.postMessage(normalizedVolume, "*");

}

window.Script2 = function()
{
  var player = GetPlayer();

// Get today's date
var today = new Date();

// Format the date
var day = today.getDate();
var month = today.getMonth() + 1;
var year = today.getFullYear();

// Format as DD/MM/YYYY
var formattedDate = day + "/" + month + "/" + year;

// Send to Storyline variable
player.SetVar("TodayDate", formattedDate);
}

};
