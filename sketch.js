var moving,stable,gameobject1,gameobject2,gameobject3;


function setup() {
  createCanvas(1200,800);
  moving = createSprite(200,200,50,80);
  stable = createSprite(400,200,80,30);
  gameobject1 =createSprite(100,100,50,50);
  gameobject2= createSprite(200,100,80,80);
  gameobject3=createSprite(400,100,60,60);
  moving.shapeColor ="yellow";
  stable.shapeColor ="green";
  gameobject1.shapeColor ="green";
  gameobject2.shapeColor ="green";
  gameobject3.shapeColor ="green";
}

function draw() {
  background("black");
  moving.x = mouseX;
  moving.y = mouseY; 
  if(touch(moving,stable) ){
    moving.shapeColor ="red";
    stable.shapeColor ="red";
  }

  else if(touch(moving,gameobject1)){
    moving.shapeColor ="red";
    gameobject1.shapeColor="red";
  }
  else{
    moving.shapeColor ="yellow";
  stable.shapeColor ="green";

  }
  drawSprites();
}


function touch(object1,object2){
  if(object1.x-object2.x < object2.width/2+object1.width/2 && object2.x-object1.x<object2.width/2+object1.width/2 && object1.y-object2.y <object2.height/2+object1.height/2 && object2.y-object1.y<object2.height/2+object1.height/2){
    return true;
  } 

  else{
    return false;
  }

}