var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": 400 },
                { "type": "sawblade", "x": 600, "y": groundY - 10 },
                { "type": "spike", "x": 800, "y": groundY - 10 },
                { "type": "enemy", "x": 400, "y": groundY  - 50 },
                { "type": "reward", "x": 800, "y": groundY - 50 },
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        function createSawBlade(x, y){
            var hitZoneSize = 25; // declares var hitZoneSize and assigns it to the value 25
            var damageFromObstacle = 10; // declares var damageFromObsticle and assigns it to the value 10
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); // declares var sawBladeHitZone and creates a sawblade obsticle
            sawBladeHitZone.x = x; // assigns a value to sawBladeHitZon.x which is now 400 pixels
            sawBladeHitZone.y = y; // assigns a value to sawBladeHitZone which is now 100 pixels
            game.addGameItem(sawBladeHitZone); // creates the sawblade and exicutes the code putting it on screen
            var obstacleImage = draw.bitmap("img/sawblade.png"); // adds in the image of the sawblade itself
            sawBladeHitZone.addChild(obstacleImage); // adds the sawblade as a child to the background
            obstacleImage.x = -25;
            obstacleImage.y = -25;
        }
        function createSpike(x, y){
            var hitZoneSize = 25; // declares var hitZoneSize and assigns it to the value 25
            var damageFromObstacle = 10; // declares var damageFromObsticle and assigns it to the value 10
            var spikeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); // declares var sawBladeHitZone and creates a sawblade obsticle
            spikeHitZone.x = x; // assigns a value to sawBladeHitZon.x which is now 400 pixels
            spikeHitZone.y = y; // assigns a value to sawBladeHitZone which is now 100 pixels
            game.addGameItem(spikeHitZone); // creates the sawblade and exicutes the code putting it on screen
            var obstacleImage = draw.bitmap("img/spike(2).png"); // adds in the image of the sawblade itself
            spikeHitZone.addChild(obstacleImage); // adds the sawblade as a child to the background
            obstacleImage.x = -25; // gives the spike its x position
            obstacleImage.y = -25; // gives the spike its y position
            obstacleImage.scaleX = 0.5; // gives the spike a scaling value of the x to the size of the image
            obstacleImage.scaleY = 0.5; // gives the spike a scaling value of the y to the size of the image
        }
        function createEnemy(x, y){
            var enemy = game.createGameItem("enemy", 500); // declares var enemy and assigns a hiitbox value to 500 pixels
            var gameItem = draw.bitmap("img/ultimate obamids(2).png"); // draws the image used for the enemy
            gameItem.x = -350; // gives the image an x value so that it fits inside of the hitbox
            gameItem.y = -25; // gives the image a y value so that it fits inside of the hitbox
            enemy.addChild(gameItem); // adds enemy as a child to background
            x = 10000; // gives the enemy an x value to be placed onto the screen
            y = 100; // gives the enemy a y value to ba placed onto the screen
            enemy.x = x; // assigns a value to enemy.x which is now 10000
            enemy.y = y; // assigns a value to enemy.y which is now 100
            game.addGameItem(enemy); // draws the enemy itself onto the screen
            enemy.velocityX = -2; // sets a factor to be multiplied by so that the image can now be animated
            enemy.onPlayerCollision = function(){
                game.changeIntegrity(-10000000000000000000000000000000000000000000000000000000000000000000000000) // takes away x amount of health upon impact with the enemy itself
            }
            enemy.onProjectileCollision = function(){
                game.increaseScore(100); // gane 100 points by shooting it with a projectile
                enemy.fadeOut(); // once enemy is hit with said projectile it will fade off the screen
            }
        }
        function createReward(x, y){
            var reward = game.createGameItem("reward", 25);
            var gameItem = draw.bitmap("img/the chugggggggg.png");
            gameItem.x = -25;
            gameItem.y = -25;
            reward.addChild(gameItem);
            reward.x = x;
            reward.y = y;
            game.addGameItem(reward);
            reward.velocityX = -2;
            reward.onPlayerCollision = function(){
                game.changeIntegrity(+150)
            }
            reward.onProjectileCollision = function(){
                game.increaseScore(250);
                reward.shrink;
            }
        }
        for(var i = 0; i < levelData.gameItems.length; i++){
            var gameItem = levelData.gameItems[i];
            if(gameItem.type === "sawblade"){
                createSawBlade(gameItem.x, gameItem.y); // creates the sawblade itself
            }
            if(gameItem.type === "spike"){
                createSpike(gameItem.x, gameItem.y); // creates the spike itself
            }
            if(gameItem.type === "enemy"){
                createEnemy(gameItem.x, gameItem.y); // creates the enemy itself
            }
            if(gameItem.type === "reward"){
                createReward(gameItem.x, gameItem.y); // creates the reward itself
            }
        }
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
