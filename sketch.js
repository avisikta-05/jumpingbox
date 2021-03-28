var canvas;
var music;
var o1,o2,o3,o4
var box;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    o1=createSprite(0,580,360,30);
    o1.shapeColor=rgb(0,0,255);
    o2=createSprite(295,580,200,30);
    o2.shapeColor=rgb(255,125,0);
    o3=createSprite(515,580,200,30);
    o3.shapeColor=rgb(153,0,76);
    o4=createSprite(740,580,220,30);
    o4.shapeColor=rgb(0,100,0);
    box=createSprite(random(20,750),100,40,40);
    box.shapeColor=rgb(255,255,255);
    box.velocityX=4;
    box.velocityY=9;
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    box.bounceOff(edges);
    if(o1.isTouching(box)&& box.bounceOff(o1)){
      box.shapeColor=rgb(0,0,255);
      music.play();
    }
    if(o2.isTouching(box)){
      box.shapeColor=rgb(255,125,0);
      box.velocityX=0;
      box.velocityY=0;
      music.stop();
    }
    if(o3.isTouching(box)&& box.bounceOff(o3)){
      box.shapeColor=rgb(153,0,76);
    }
    if(o4.isTouching(box)&& box.bounceOff(o4)){
      box.shapeColor=rgb(0,100,0);
    }
    //create edgeSprite

drawSprites();

    //add condition to check if box touching surface and make it box
}
