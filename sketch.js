var dog, dogimg, happydog, database, food, foodstock;

function preload()
{
	dogimg = loadImage("images/dogImg.png");
 // happydog = loadImage("dogImg1.png");
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
  dog = createSprite(250, 250);
  dog.addImage(dogimg);
  dog.scale = 0.2;


   foodstock = database.ref('food');
  foodstock.on('value', readPosition, showError);

  
}


function draw() {  
  background(color(46, 139, 87));

  if(keyDown(UP_ARROW)){
    writePosition(food);
  }

  drawSprites();
  fill("white");
  text("Foodremaining" + food, 220, 150);
  text("Press UP_ARROW To Feed Drago MIlk", 150, 50);
  //add styles here

}

function writePosition(x){


  if(x<=0){
    x = 0;
  }
  else{
    x = x-1;
  }

  database.ref('/').set({
      food:x
  })
  
}

function readPosition(data){
  food = data.val();
}

function showError(){
  console.log("Error in reading the database");
}



