// Immediately Invoked Functions Expressions. (IIFE)

//This first example works fine, but we dont necessarily need to give the function a name just to create data privacy.

/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();
*/

//And now, the IIFE:

(function() {
    var score = Math.random()*10;
    console.log(score >= 5);
})();

//console.log(score);  this doesnt work ofc, because the variable is hidden from the global scope;

//We can also pass parameters into the function, like this:

(function(goodLuck) {
    var score = Math.random()*10;
    console.log(score >= 5 - goodLuck);
})(5);
