var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["e8d91f78-fc74-4de2-a8f6-f2226472fc5a","c4dcffe9-32f0-45c8-bc72-8d6cd89a6f79"],"propsByKey":{"e8d91f78-fc74-4de2-a8f6-f2226472fc5a":{"name":"diamond","sourceUrl":null,"frameSize":{"x":30,"y":29},"frameCount":1,"looping":true,"frameDelay":12,"version":"kwP0kp7zWEht3QcWxeLk0cX6Gaon1NtP","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":29},"rootRelativePath":"assets/e8d91f78-fc74-4de2-a8f6-f2226472fc5a.png"},"c4dcffe9-32f0-45c8-bc72-8d6cd89a6f79":{"name":"corona","sourceUrl":null,"frameSize":{"x":20,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"mNETZSTV8_XJuhCOCSawVLPtKeoGNdRj","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/c4dcffe9-32f0-45c8-bc72-8d6cd89a6f79.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//for creating sprites
var theif = createSprite(390, 390,15,15);
theif.shapeColor=("purple");
//theif.setAnimation("corona");

var diamond = createSprite(200, 25,40,40);
diamond.shapeColor=("aqua");
diamond.setAnimation("diamond");

var guard1 = createSprite(300,350,150,10 );
guard1.velocityX = 2;
guard1.velocityY = 0;
guard1.shapeColor="maroon";
var guard2 = createSprite(100,350,150,10 );
guard2.velocityX = -2;
guard2.velocityY = 0;
guard2.shapeColor="maroon";
var lazer1 = createSprite(100, 240,185,10);
lazer1.velocityX = 0;
lazer1.velocityY = 1.5;
lazer1.shapeColor="blue";
var lazer2 = createSprite(300, 240,185,10);
lazer2.velocityX = 0;
lazer2.velocityY = -1.5;
lazer2.shapeColor="blue";
var lazer3 = createSprite(120,70,130,10);
lazer3.velocityX = -4;
lazer3.velocityY = 0;
lazer3.shapeColor="red";
var lazer4 = createSprite(280,70,130,10);
lazer4.velocityX = 4;
lazer4.velocityY = 0;
lazer4.shapeColor="red";
var invisible1 = createSprite(200,300,400,2);
invisible1.shapeColor="green";
var invisible2 = createSprite(200,185,400,2);
invisible2.shapeColor="green";
var wall = createSprite(390, 370,70,5);
wall.shapeColor=("purple");

playSound("assets/Paagla-by-Akhil-Ek-Tarfa-Hai-Pyar-Song-Ringtone-Download.mp3", true);



function draw() {
// for changing bacground into black  
background("orange");

//to create edges
createEdgeSprites();

//for adding text
textSize(20)
fill("green");

text("Amit's Security System", 100, 175);

//to create bounceoff
lazer1.bounceOff(invisible1);
lazer1.bounceOff(invisible2);
lazer2.bounceOff(invisible1);
lazer2.bounceOff(invisible2);
theif.bounceOff(edges);
guard1.bounceOff(edges);
guard2.bounceOff(edges);
lazer1.bounceOff(edges);
lazer2.bounceOff(edges);
lazer3.bounceOff(edges);
lazer4.bounceOff(edges);

//to create bounce between guard 1 and 2 
guard1.bounce(guard2);

//to move thief up ,down,left,right
if (keyDown(UP_ARROW)) {
theif.velocityX = 0;
theif.velocityY = -3;
}

if (keyDown(DOWN_ARROW)) {
theif.velocityX = 0;
theif.velocityY = 3;
}  
  
if (keyDown(LEFT_ARROW)) {
theif.velocityX = -3;
theif.velocityY = 0; 
}  
  
if (keyDown(RIGHT_ARROW)) {
theif.velocityX = 3;
theif.velocityY = 0;  

  
}  
  
//to reposition thief when he touch lazer beams   
if (theif.isTouching(guard1)||theif.isTouching(guard2)
   ||theif.isTouching(lazer1)||theif.isTouching(lazer2)||
   theif.isTouching(lazer3)||theif.isTouching(lazer4)
   ||theif.isTouching(wall)) {
   theif.x=390;
   theif.y=390;
   fill("pink");
   textSize(30);
   text("THEIF IS CAUGHT", 100, 240);
   theif.velocityX=0;
   theif.velocityY=0;
  
}

//to text "diamond has been stolen"when thief reach at diamond 
if (theif.isTouching(diamond)) {
  theif.x=200;
  theif.y=25;
  theif.velocityX=0;
  theif.velocityY=0;
  lazer1.velocityX=0;
  lazer1.velocityY=0;
  lazer2.velocityX=0;
  lazer2.velocityY=0;
  lazer3.velocityX=0;
  lazer3.velocityY=0;
  lazer4.velocityX=0;
  lazer4.velocityY=0;
  fill("orange");
  textSize(25);
  text ("Diamond has been stolen",30,150);
}

drawSprites();

}  


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
