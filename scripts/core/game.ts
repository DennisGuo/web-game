(function(){

    // game variable
    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;
    let helloLabel:createjs.Text;

    function init(){
        console.log("Game Initialization ...");
        start();
    }

    function start(){
        console.log('Game starting ...');

        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // fps
        createjs.Ticker.on("tick",update);

        main();
    }

    function update(){
        helloLabel.rotation += 5;
        stage.update() // redraw
    }

    function main():void{
        console.log("Game started.");

        helloLabel = new createjs.Text("Hello,World","20px Consolas","#000000");
        helloLabel.x = 10;
        helloLabel.y = 10;

        stage.addChild(helloLabel);
    }

    window.onload = init;

}());