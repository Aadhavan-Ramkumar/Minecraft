var Canvas = new fabric.Canvas("myCanvas");

var PlayerX = 0;
var PlayerY = 0;

var BlockImageWidth = 30;
var BlockImageHeight = 30;

var PlayerObject = "";
var BlockImageObject = "";

function PlayerUpdate() {
    fabric.Image.fromURL("player.png", function (img) {
        PlayerObject = img;
        PlayerObject.scaleToWidth(150);
        PlayerObject.scaleToHeight(140);
        PlayerObject.set({
            top: PlayerY,
            left: PlayerX
        });
        Canvas.add(PlayerObject);
    });
}

function NewImage(GetImage) {
    fabric.Image.fromURL(GetImage, function (img) {
        BlockImageObject = img;
        BlockImageObject.scaleToWidth(BlockImageWidth);
        BlockImageObject.scaleToHeight(BlockImageHeight);
        BlockImageObject.set({
            top: PlayerY,
            left: PlayerX
        });
        Canvas.add(BlockImageObject);
    });
}
//Part 2
window.addEventListener("keydown", MyKeyDown);

function MyKeyDown(e) {
    KeyPressed = e.keyCode;
    console.log(KeyPressed);
    if (e.shiftKey == true && KeyPressed == '80') {
        console.log("Shift + P");
        BlockImageHeight = BlockImageHeight + 10;
        BlockImageWidth = BlockImageWidth + 10;
        document.getElementById("CurrentHeight").innerHTML = BlockImageHeight;
        document.getElementById("CurrentWidth").innerHTML = BlockImageWidth;
    }
    if (e.shiftKey == true && KeyPressed == '77') {
        console.log("Shift + M");
        BlockImageHeight = BlockImageHeight - 10;
        BlockImageWidth = BlockImageWidth - 10;
        document.getElementById("CurrentHeight").innerHTML = BlockImageHeight;
        document.getElementById("CurrentWidth").innerHTML = BlockImageWidth;
    }
    if (KeyPressed == '37') {
        Left();
        console.log("Left");
    }
    if (KeyPressed == '38') {
        Up();
        console.log("Up");
    }
    if (KeyPressed == '39') {
        Right();
        console.log("Right");
    }
    if (KeyPressed == '40') {
        Down();
        console.log("Down");
    }
    if (KeyPressed == '84') {
        NewImage("trunk.jpg");
        console.log("T");
    }
    if (KeyPressed == '68') {
        NewImage("dark_green.png");
        console.log("D");
    }
    if (KeyPressed == '76') {
        NewImage("light_green.png");
        console.log("L");
    }
    if (KeyPressed == '71') {
        NewImage("ground.png");
        console.log("G");
    }
    if (KeyPressed == '87') {
        NewImage("wall.jpg");
        console.log("W");
    }
    if (KeyPressed == '89') {
        NewImage("yellow_wall.png");
        console.log("Y");
    }
    if (KeyPressed == '85') {
        NewImage("unique.png");
        console.log("U");
    }
    if (KeyPressed == '82') {
        NewImage("roof.jpg");
        console.log("R");
    }
    if (KeyPressed == '67') {
        NewImage("cloud.jpg");
        console.log("C");
    }
}
//Part 3
function Up() {
    if (PlayerY >= 30) {
        PlayerY = PlayerY - BlockImageHeight;
        console.log("The block height is " + BlockImageHeight);
        console.log("X = " + PlayerX + "Y = " + PlayerY);
        Canvas.remove(PlayerObject);
        PlayerUpdate();
    }
}

function Down() {
    if (PlayerY <= 450) {
        PlayerY = PlayerY + BlockImageHeight;
        console.log("The block height is " + BlockImageHeight);
        console.log("X = " + PlayerX + "Y = " + PlayerY);
        Canvas.remove(PlayerObject);
        PlayerUpdate();
    }
}

function Left() {
    if (PlayerX >= 30) {
        PlayerX = PlayerX - BlockImageHeight;
        console.log("The block height is " + BlockImageWidth);
        console.log("X = " + PlayerX + "Y = " + PlayerY);
        Canvas.remove(PlayerObject);
        PlayerUpdate();
    }
}

function Right() {
    if (PlayerX <= 840) {
        PlayerX = PlayerX + BlockImageHeight;
        console.log("The block height is " + BlockImageWidth);
        console.log("X = " + PlayerX + "Y = " + PlayerY);
        Canvas.remove(PlayerObject);
        PlayerUpdate();
    }
}