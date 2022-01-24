function setup() {
    createCanvas(800, 400);
  }
  
  function draw() {
    background(100,220,0);
    strokeWeight(4);
    stroke(0,0,255);
    fill(0,100,255);
    circle(400,200,40);    

    strokeWeight(3);
    stroke(255,0,255);
    fill(110,255,0);
    square(200,100,20);

    
    noFill();
    strokeWeight(1);
    stroke(0,110,255);
    circle(0,0,20);
    
    ellipse(200,150,55,55);

    arc(50,55,50,50,0, HALF_PI);
    noFill();
    arc(50,55,60,60,HALF_PI, PI);
    arc(50,55,70,70,PI,PI + QUARTER_PI);
    arc(50,55,80,80,PI+QUARTER_PI,TWO_PI);
  }