var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg

var fairy , fairyImg;
var fairyVoice
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairyImg= loadAnimation("images/fairyImage1.png","images/fairyImage2.png")
	fairyVoice= loadSound("sound/JoyMusic.mp3")
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	fairy = createSprite(100,500);
	fairy.addAnimation("moving",fairyImg);
	fairy.scale = .2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  if (keyDown("left")) {
	fairy.x= fairy.x-10;
  }
  
  if (keyDown("up")) {
	if (fairy.y>25) {
	  
	}
	
	fairy.y= fairy.y-10;
  }
  
  if (keyDown("right")) {
	fairy.x= fairy.x+10;
  }
  
  if (keyDown("down")) {
	if (fairy.y>25) {
	  
	}
	
	fairy.y= fairy.y+10;
  }





  //write code to stop star in the hand of fairy
if(star.y>470 && starBody.position.y>470){
	Matter.Body.setStatic(starBody,true);
}
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	







}
