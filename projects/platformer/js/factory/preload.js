(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    let opspark = window.opspark;
    
    // TODO : Load config for url //
    opspark.preload = function (game) {
        game.load.image('cannon', './asset/cannon.png');
        game.load.image('projectile', './asset/projectile.png');
        game.load.image('platform', './asset/platform.png');
        game.load.atlas('halle', './asset/halle/phaser-json-array/halle.png', './asset/halle/phaser-json-array/halle.json');
        game.load.image('pyramid', './asset/collectable/pyramid.png');
        game.load.image('jobama', './asset/collectable/jobama.png');
        game.load.image('homicide', './asset/collectable/homicide.png');
    };
})(window);
