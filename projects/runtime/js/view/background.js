var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        // ANIMATION VARIABLES HERE:
        var tree;
        var buildings = [];
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO: 2 - Part 2
            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY,'black');
            background.addChild(backgroundFill);
            
            // TODO: 3 - Add a moon and starfield
            for(var i = 0; i < 100; i++){ // loop that draws 100 stars
                var circle = draw.circle(1, "white", "LightGray", 2); // draws a circle and stores it in var circle
                circle.x = canvasWidth * Math.random(); // multiplies a random decimal times the width of the canvas and stores it as the circles x position
                circle.y = groundY * Math.random(); // multiplies a random decimal times the groundY and stores it as the circles y position
                background.addChild(circle); // adds circle as a child to background
            }
            var moon = draw.bitmap("img/moon.png"); // draws the moon using bitmap and stores it in var moon
            moon.x = canvasWidth - 300; // adds an x value to the moon of 300 pixals
            moon.y = groundY - 450; // adds a y value to the moon of 200 pixals
            moon.scaleX = 0.5; // scales the moons x value
            moon.scaleY = 0.5; // scales the moons y value
            background.addChild(moon); // adds the moon as a child of background
            
            var backgroundPlanet = draw.bitmap("img/background planet(1).png");
            backgroundPlanet.x = canvasWidth - 1900; 
            backgroundPlanet.y = groundY - 450; 
            backgroundPlanet.scaleX = 1.5;
            backgroundPlanet.scaleY = 1.5; 
            background.addChild(backgroundPlanet); 
            
            // TODO 5: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            for (var i = 0; i < 5; ++i) {
                var buildingHeights = [300, 305, 250, 150, 200]; // declares a var for the height of the buildings being put on screen
                var buildingColor = "purple";
                var building = draw.rect(75, buildingHeights[i], buildingColor, "Black", 1); // var that draws the rectangles the make the building themselves
                building.x = 200 * i; // assigns a value to building.x whuch gives it its x value
                building.y = groundY - buildingHeights[i]; // assigns a value to building.y which gives it its y value
                background.addChild(building); // adds the buildings as a child to the background
                buildings.push(building); // pushing the buildings
              }
            
            // TODO 4: Part 1 - Add a tree
            /* tree = draw.bitmap("img/tree.png"); // uses bitmap to draw image and stores it in var tree
            tree.x = canvasWidth - 1000; // assigns a value to tree.x and sets it at 1000 pixels before you reach canasWidth
            tree.y = groundY - 250; // assigns a value to tree.y and sets it at 250 pixels before you reach groundY
            background.addChild(tree); // adds tree as a child to background to make it visible */
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!
            /* tree.x = tree.x - 1; // sets a value for the computer to mulitply speed by in order to animate

            if (tree.x < -200) {
            tree.x = canvasWidth; // loops the tree around screen so it doesn't diappear
            } */
            
            // TODO 5: Part 2 - Parallax
            for (var i = 0; i < buildings.length; i++) {
                var building = buildings[i]; // assigns the var building to the buildings array so that the animation process can take place
                building.x = building.x - 5 // sets a value for the computer to mulitply speed by in order to animate
                if(building.x < -200){
                    building.x = canvasWidth; // loops the tree around screen so it doesn't diappear
                }
                // code to do something with each element
              }

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
