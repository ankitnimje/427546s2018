
let angle = 0;

let fabric;
let wood;
let floor;

function setup() {
  createCanvas(1520, 520, WEBGL);
}

function preload() {
	fabric = loadImage('texture/royal_blue.jpg');
	wood = loadImage('texture/wood.jpg');
	floor = loadImage('texture/floor2.jpg');
}

function draw() {
  	background(50);

  	//rectMode(CENTER);
  	noStroke();

  	fill(0, 102, 0);

  	rotateX(angle);
  	rotateY(angle * 0.0002);
  	rotateZ(angle);

  	ambientLight(227, 232, 239);

  	texture(fabric);
  	translate(0, 0, 0);
  	box(400, 250, 30);          //base green

  	//fill(77, 38, 0);
  	texture(wood);

  	translate(0, 125, 0);		//side long top 
  	box(425, 25, 50);			

  	translate(0, -250, 0);		//side long bottom
  	box(425, 25, 50);			

  	translate(200, 125, 0);		//side short right
  	box(25, 250, 50);

  	translate(-400, 0, 0);		//side short left
  	box(25, 250, 50);

  	translate(50, 80, -140);	//leg left bottom
  	box(30, 30, 250);

  	translate(0, -170, 0);		//leg left top
  	box(30, 30, 250);

  	translate(300, 0, 0);		//leg right top
  	box(30, 30, 250);

  	translate(0, 180, 0);	//leg left bottom
  	box(30, 30, 250);

  	translate(-150, -100, -100);
  	texture(floor);	
  	//ambientMaterial(125);
  	plane(800, 800);

  	angle += 0.002;
}