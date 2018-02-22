var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d');
var line = document.getElementById('line');
var circle = document.getElementById('circle');
var ellipse = document.getElementById('ellipse');
var rectangle = document.getElementById('Rectangle');
var polygon = document.getElementById('polygon');
var polyline = document.getElementById('polyline');

//A function to print pixel by pixel using function fillRect()
var DrawPixel = function(x,y)
{
	ctx.fillRect(x,y,1,1);
	}

//Line Function
function Line(x1,y1,x2,y2){		
	
	ctx.fillStyle = '#001EFF';
	
	var yi = 1;
	 if(x1>x2)
    {
		  var t1;
		  var t2;
		  t1 = x1;
		  x1=x2;
		  x2=t1;
		  
		  t2=y1;
		  y1=y2;
		  y2=t2;
	 }

	 if(y1>y2)
	 {
		  yi = -1;
	 }	 

	 var dx = x2-x1;
	 var dy = y2-y1;
	 var cy= 0;
	 var s= Math.abs(dy/dx);	 
	 var y= y1;
	 if(x1==x2)
    {

		  while(Math.abs(y1-y2) != 0)
		  {
				if(y2>y1)
				{
	 				 DrawPixel(x1,y1);				
					 y1++;
			   }
				else if(y1>y2)
				{
					 DrawPixel(x1,y2);
					 y2++;
				}
		  }
	 }
	 else
    {
		  for(var x=x1; x<=x2;x++)
		  {
	 			DrawPixel(x,y);
	  			cy += s;
				if(cy >= 0.5)
				{
					 y += yi;
					 cy -= 1.0;
				}
		  }
	 }
}
line.addEventListener("click", function(){
		ctx.font = '40pt Calibri';
		ctx.fillStyle = '#FF0023';
		ctx.fillText('Line ------- >', 30, 70);
		
	 Line(380, 70, 800, 40);
},false);


//Circle Function
function Circle(xr,yr, radius){
	ctx.font = '40pt Calibri';
	ctx.fillStyle = '#FF0023';
	ctx.fillText('Circle ------------------- >', 30, 170);
	
	ctx.fillStyle = '#001EFF';
	
	var r = radius;
	var r1 = 0;
	var raderror = 1 - r;
	
	while(r >= r1){
		DrawPixel(r + xr, r1 + yr);
		DrawPixel(r1 + xr, r + yr);
		DrawPixel(-r + xr, r1 + yr);
		DrawPixel(-r1 + xr, r + yr);
		DrawPixel(-r + xr, -r1 + yr);
		DrawPixel(-r1 + xr, -r + yr);
		DrawPixel(r + xr, -r1 + yr);
		DrawPixel(r1 + xr, -r + yr);
		r1++;
		
		if (raderror < 0) {
			raderror += 2 * r1 + 1;
			}
			else {
				r--;
				raderror+= 2 * (r1 - r + 1);
				}
		}
	}
	
circle.addEventListener("click", function(){
	 Circle(600,150,40);
},false);

//Ellipse Function
function Ellipse(){
	ctx.font = '40pt Calibri';
	ctx.fillStyle = '#FF0023';
	ctx.fillText('Ellipse ------ >', 30, 270);
	}

ellipse.addEventListener("click", function(){
	Ellipse();
},false);	


var RAx =400 , RAy =320 , RBx =650 , RBy =320 , RCx =400 , RCy =400 , RDx =650 , RDy =400 ;
	
rectangle.addEventListener("click", function(){

	ctx.font = '40pt Calibri';
	ctx.fillStyle = '#FF0023';
	ctx.fillText('Rectangle --- >', 30, 370);
	
	ctx.font = '10pt Calibri';
	ctx.fillStyle = '#06FF00';
	ctx.fillText('Respawnable', 50, 385);
	
	
	Line(RAx,RAy,RBx,RBy);  // A - B
	Line(RAx,RAy,RCx,RCy);	// A - C
	Line(RCx,RCy,RDx,RDy);	// C - D
	Line(RBx,RBy,RDx,RDy);	// B - D
	
	//Shifting Rectangle to right by 3 pixels
	RAx  = RAx + 3;
	RBx  = RBx + 3;
	RCx  = RCx + 3;
	RDx  = RDx + 3;
	
},false);

	
	var PAx = 700, PAy = 470, PBx = 770, PBy = 420, PCx = 840, PCy = 430, PDx = 870, PDy = 450, PEx = 780, PEy = 500;
	
polygon.addEventListener("click", function(){
		ctx.font = '40pt Calibri';
		ctx.fillStyle = '#FF0023';
		ctx.fillText('Polygon --------------------------- >', 30, 470);
		
		ctx.font = '10pt Calibri';
		ctx.fillStyle = '#06FF00';
		ctx.fillText('Respawnable', 50, 495);
	
		Line(PAx,PAy,PBx,PBy); // A - B 
		Line(PBx,PBy,PCx,PCy); // B - C
		Line(PCx,PCy,PDx,PDy); // C - D
		Line(PDx,PDy,PEx,PEy); // D - E
		Line(PEx,PEy,PAx,PAy); // E - A
		
		//Shifting Polygon to right by 3 pixels
		PAx = PAx + 3;
		PBx = PBx + 3;
		PCx = PCx + 3;
		PDx = PDx + 3;
		PEx = PEx + 3;
	
},false);
	
	
	var PlAx = 400, PlAy = 590, PlBx = 400, PlBy = 500, PlCx = 470, PlCy = 530, PlDx = 530, PlDy = 500, PlEx = 530, PlEy = 590;
	
polyline.addEventListener("click", function(){
	
		ctx.font = "40pt Calibri";
		ctx.fillStyle = "#FF0023";
		ctx.fillText('Polyline ------ >', 30, 570);
		
		ctx.font = '10pt Calibri';
		ctx.fillStyle = '#06FF00';
		ctx.fillText('Respawnable', 50, 595);
	
	
	/*	Line(400,590,400,500);
		Line(400,500,470,530);
		Line(470,530,530,500);
		Line(530,500,530,590);	*/
		
		Line(PlAx,PlAy,PlBx,PlBy); // A - B
		Line(PlBx,PlBy,PlCx,PlCy); // B - C
		Line(PlCx,PlCy,PlDx,PlDy); // C - D
		Line(PlDx,PlDy,PlEx,PlEy); // D - E
		
		PlAx = PlAx + 3;
		PlBx = PlBx + 3;
		PlCx = PlCx + 3;
		PlDx = PlDx + 3;
		PlEx = PlEx + 3;
	
},false);

