var canvas;
var music;
var surface1 , surface2 , surface3 , surface4 ; 
var box ;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(260,310);

    //create 4 different surfaces
    surface1 = createSprite(50,300,50,10);
    surface1.shapeColor =("green")

    surface2 = createSprite(110,300,50,10);
    surface2.shapeColor =("blue")

    surface3 = createSprite(170,300,50,10);
    surface3.shapeColor =("red")

    surface3 = createSprite(230,300,50,10);
    surface3.shapeColor =("yellow")

    box = createSprite(150,100,20,20);
    box.shapeColor =("white")



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();
    
    

    drawSprites();
    //add condition to check if box touching surface and make it box
}
