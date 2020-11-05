var ball,img,paddle,paddle_img;
function preload() {
  img=loadImage("ball.png")
  paddle_img=loadImage("paddle.png")
  
  /* preload your images here of the ball and the paddle */
}
function setup() {
  createCanvas(400, 400);
  ball=createSprite(200,200,10,10);
  ball.addImage("ball",img);
  paddle=createSprite(350,200,10,10);
  paddle.addImage(paddle_img);
   /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */
  
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX= 9;

}

function draw() {
  background(205,153,0);
  edges=createEdgeSprites();
  ball.bounceOff(edges);
  ball.bounceOff(paddle,randomVelocity);
  /* create Edge Sprites here */
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
    paddle.y=paddle.y-20
     /* what should happen when you press the UP Arrow Key */
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y=paddle.y+20
    /* what should happen when you press the UP Arrow Key */
  }
  drawSprites();
  
}

function randomVelocity()
{
  ball.velocityY=random(+5,-5)
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

