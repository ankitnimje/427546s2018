
let angle = 0;

let fabric;
let wood;
let floor;
var translateSlider;
var rotateSlider;
var scaleSlider;
var sHearSlider;

function setup() {
  createCanvas(1520, 640, WEBGL);

  //textSize(50);

  translateSlider = createSlider(-500, 500, 0);
  translateSlider.position(1350,100);
  translateSlider.style('width', '150px');

  rotateSlider = createSlider(-500, 500, 0);
  rotateSlider.position(1350,130);
  rotateSlider.style('width', '150px');

  scaleSlider = createSlider(-500, 500, 0);
  scaleSlider.position(1350,160);
  scaleSlider.style('width', '150px');

  sHearSlider = createSlider(-500, 500, 0);
  sHearSlider.position(1350,190);
  sHearSlider.style('width', '150px');

  //noStroke();

  noLoop();

  
}

function preload() {
	fabric = loadImage('texture/royal_blue.jpg');
	wood = loadImage('texture/wood.jpg');
	floor = loadImage('texture/floor2.jpg');
}

function draw() {
  	background(50);

    var t = translateSlider.value();
    var r = rotateSlider.value();
    var sc = scaleSlider.value();
    var sh = sHearSlider.value();

  	//rectMode(CENTER);
  	noStroke();

  	fill(0, 102, 0);

`	  rotateX(angle);
  	rotateY(angle * 0.0002);
  	rotateZ(angle);
`

	//let camX = map(0, 0, width, -100, 0);
  //let camY = map(0, 0, height, -100, 0);
	camera(0, 800, 300, 0, 0, 0, 0, 0, -1);

  orbitControl();

  //ambientLight(227, 232, 239);

  //var dirX = (mouseX / width - 0.5) * 2;
 	//var dirY = (mouseY / height - 0.5) * 2;
 	ambientLight(200, 200, 200, 0, 100, 0);

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

  	translate(0, 180, 0);		//leg left bottom
  	box(30, 30, 250);

  	translate(-150, -100, -100);
  	texture(floor);	
  	//ambientMaterial(125);
  	plane(2000, 1500);

  	//Snooker Balls

  	translate(100, 0, 265);
  	specularMaterial(255, 0, 0);
  	sphere(8, 20, 20);

  	translate(15, 0, 0);
  	specularMaterial(255, 0, 0);
  	sphere(8, 20, 20);

  	translate(35, 0, 0);
  	specularMaterial(255, 0, 0);
  	sphere(8, 20, 20);

  	translate(-10, 20, 0);
  	specularMaterial(255, 0, 0);
  	sphere(8, 20, 20);

  	translate(-15, 10, 0);
  	specularMaterial(255, 0, 0);
  	sphere(8, 20, 20);

  	translate(-15, 30, 0);
  	specularMaterial(255, 0, 0);
  	sphere(8, 20, 20);
  	
  	translate(15, 27, 0);
  	ambientMaterial(255, 0, 0);
  	sphere(8, 20, 20);

  	translate(-15, 20, 0);
  	specularMaterial(255, 0, 0);
  	sphere(8, 20, 20);

  	translate(-20, -20, 0);
  	specularMaterial(255, 0, 0);
  	sphere(8, 20, 20);

  	translate(-30, -20, 0);
  	specularMaterial(0, 11, 119);
  	sphere(8, 20, 20);

  	translate(-50, -40, 0);
  	specularMaterial(239, 4, 212);
  	sphere(8, 20, 20);

  	translate(-50, -30, 0);
  	specularMaterial(0, 0, 0);
  	sphere(8, 20, 20);

    translate(-80, -30, 0);
    specularMaterial(255, 255, 255);
    sphere(8, 20, 20);

  	//Holes

  	translate(120, -70, -10);
  	specularMaterial(0, 0, 0);
  	sphere(12, 20, 20);

  	translate(0, 225, 0);
  	specularMaterial(0, 0, 0);
  	sphere(12, 20, 20);

  	translate(182, 0, 0);
  	specularMaterial(0, 0, 0);
  	sphere(12, 20, 20);

  	translate(0, -220, 0);
  	specularMaterial(0, 0, 0);
  	sphere(12, 20, 20);

  	translate(-360, 0, 0);
  	specularMaterial(0, 0, 0);
  	sphere(12, 20, 20);

  	translate(0, 220, 0);
  	specularMaterial(0, 0, 0);
  	sphere(12, 20, 20);


    fill(255);
    text("translate", 1200, 35);


  // 	angle += 0.002;
}