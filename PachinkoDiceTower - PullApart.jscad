// title: Pachinko Dice Tower
// author: Ryan Somma
// license: MIT License
// description: a tower for randomizing dice rolls

function main() {
	 return allTogether14x19();
	 //return allTogether();
	 //return pulledApart();
}

function allTogether14x19() {
   return [
      mainBox14x19Front()
        //.union(shutes())
        //.union(buildFunnel())
        //.union(outputs())
        //.union(ramp())
        //.union(catches())
        //.union(pegs().translate([-1,0,0]))
        //.union(hexagonDecoration())
        //.union(waygateLogo())
   ];
}

function allTogether() {
   return [
      mainBox()
        //.union(shutes())
        //.union(buildFunnel())
        //.union(outputs())
        //.union(ramp())
        //.union(catches())
        //.union(pegs())
        //.union(hexagonDecoration())
        //.union(waygateLogo())
   ];
}

function pulledApart() {
   return [
      mainBox()
        //.union(shutes().translate([0,0,20]))
        //.union(buildFunnel().translate([0,0,20]))
        //.union(outputs().translate([0,0,-20]))
        //.union(ramp().translate([0,0,-20]))
        //.union(catches().translate([0,0,-20]))
        //.union(pegs())
        //.union(hexagonDecoration().translate([-10,0,0]))
        //.union(waygateLogo())
   ];
}

function mainBox14x19Front()
{
	 var mainBox = cube({size: [3.5,8,10], center:true})
	 				.translate([0,0,0])
          .subtract(
          	cube({size: [2.25,8,11], center: true})
          )
          //Trim Back
          .subtract(
          	cube({size: [2,8,10], center: true})
          	.translate([-1.9,0,0])
          )
          //Trim Left
          .subtract(
          	cube({size: [3.5,1,10], center: true})
          	.translate([0,4.3,0])
          )
          //Trim Right
          .subtract(
          	cube({size: [3.5,1,10], center: true})
          	.translate([0,-4.3,0])
          )
          //Front Window
          .subtract(
          	cube({size: [2,6,9], round:true, center: true})
          	.translate([1.5,0,0])
          )
          //Slot for Window
          .subtract(
          	cube({size: [0.2,14,19], center: true})
          	.translate([2.8,0,0.75])
          	.scale(0.53)
          )
          .scale(10);
  
  mainBox = mainBox.subtract(shutes()).subtract(outputs());
   
	return mainBox;
}

function mainBox14x19Back()
{
	 var mainBox = cube({size: [3.5,8,10], center:true})
	 				.translate([0,0,0])
          .subtract(
          	cube({size: [2.25,7,11], center: true})
          )
          //Trim Back
          .subtract(
          	cube({size: [1,8,10], center: true})
          	.translate([-1.9,0,0])
          )
          //Trim Left
          .subtract(
          	cube({size: [3.5,1,10], center: true})
          	.translate([0,4.3,0])
          )
          //Trim Right
          .subtract(
          	cube({size: [3.5,1,10], center: true})
          	.translate([0,-4.3,0])
          )
          //Front Window
          .subtract(
          	cube({size: [2,6,9], round:true, center: true})
          	.translate([1.5,0,0])
          )
          //Slot for Window
          .subtract(
          	cube({size: [0.2,14,19], center: true})
          	.translate([2.8,0,0.75])
          	.scale(0.53)
          )
          .scale(10);
  
  mainBox = mainBox.subtract(shutes()).subtract(outputs());
   
	return mainBox;
}

function mainBox()
{
	 var mainBox = cube({size: [4,8,10], center:true, round:true})
	 				.translate([0.25,0,0])
          .subtract(
          	cube({size: [2.25,7,11], center: true})
          )
          .subtract(
          	cube({size: [2,6,9], round:true, center: true})
          	.translate([1.5,0,0])
          )
          .subtract(
          	cube({size: [0.5,7,13.5], center: true})
          	.translate([1.6,0,2])
          )
          .scale(10);
  
  mainBox = mainBox.subtract(shutes()).subtract(outputs());
   
	return mainBox;
}

function shutes()
{
   var shute = cube({size: [2.5,2.4,0.5], center:true})
       .subtract(cube({size: [2.2,2.3,0.5], center: true}))
       .translate([0,0,4.8])
       .scale([10,10,10]);
   
   var shutes = [];
   shutes[0] = shute.translate([0,0,0]);
   shutes[1] = shute.translate([0,23,0]);
   shutes[2] = shute.translate([0,-23,0]);

	return union(shutes);
}

function buildFunnel()
{
  var radius = 25 / 2;
  var thick = 2;
  var height = 40;
  var bottomThick = 2 * thick;

  var jar = funnel(radius, height)
    .subtract(
        funnel(radius,height)
    	.translate([0,0,bottomThick])
    );
    
  return jar
    .subtract(cube({size: [7,7,2],center:true})
        .scale(11)
        .translate([4,0,2])
    )
    .scale([0.825,2.3,0.8])
    .translate([0,0,40]);
}

function funnel(radius, height) {
  var sqrt3 = Math.sqrt(3) / 2;
	var flatBottom = CSG.Polygon.createFromPoints([
	    [5,5], [-5,5], [-5,-5], [5,-5]
	]);

  var hex = flatBottom.solidFromSlices({
	numslices: height
	,callback: function(t) {
		var coef = (t + 0.7)*3;
		return polygon = this
			.translate([0, 0, height * t])
			.scale([coef, coef, 1]);
    }
  });
   
  return hex;
}

function outputs()
{
    var output = cube({size: [2.6,2.4,2.8], center:true})
       .subtract(cube({size: [2.2,2.2,3.5], center: true}).translate([0,0,1]))
       .subtract(cube({size: [2.6,2.2,2.8], center: true}).translate([0.5,0,0]))
       .translate([-0.025,0,-6])
       .scale([10,10,10]);

    var outputs = [];
    outputs[0] = output.translate([0,0,0]);
    outputs[1] = output.translate([0,23,0]);
    outputs[2] = output.translate([0,-23,0]);

   var guideTemplate = linear_extrude({ height: 1 },
        polygon([ [0,2],[1,0],[10,2] ])
        .scale(5)
	    )
	    .rotateX(270)
	    .translate([5,-35,-55]);
    
    var guides = [];
    var yAxis = 0;
    var i=0;

    // 4-Guides
    for(i=0; i<4; i++) {
	    guides[i] = 
	       guideTemplate
	       .translate([0,yAxis,0]);
	    yAxis = yAxis + 23;
    }
	    
	return union(outputs).union(guides);
}

function ramp()
{
     var ramp = linear_extrude({ height: 70 },
        polygon([ [-3,2],[1,0],[12,2] ])
        .scale(5)
	    )
	    .rotateX(270)
	    .translate([-15,-35,-65]);
	    
	    return ramp;
}

function catches()
{
    var catcher = cube({size: [6,2.4,1], center:true})
       .subtract(cube({size: [5.9,2.2,1], center: true}).translate([-0.1,0,0.3]))
       .translate([2.5,0,-7])
       .scale([10,10,10]);

    var catches = [];
    catches[0] = catcher.translate([0,0,0]);
    catches[1] = catcher.translate([0,23,0]);
    catches[2] = catcher.translate([0,-23,0]);

	return union(catches);
}

function pegs()
{
    //********** Cylinder Pegs **********//
    var cylinderTemplate = cylinder({r: 1, h: 10, round: true})
             .rotateX(90)
             .rotateZ(90)
             .scale(2);
    var cylinders = [];
    var cylindersCount = 0;
    var cylinderY;
    var cylinderZ = 40;
    var i=0;
    var j=0;

    // 3-Peg Rows
    for(i=0; i<5; i++) {
       cylinderY = 23;
       for(j=0; j<3; j++) {
          cylinders[cylindersCount] = 
             cylinderTemplate
             .translate([-10,cylinderY,cylinderZ]);
          cylinderY = cylinderY - 23;
          cylindersCount++;
       }
       cylinderZ = cylinderZ - 20;
    }

    // 4-Peg Rows
    cylinderZ = 30;
    for(i=0; i<4; i++) {
       cylinderY = 35;
       for(j=0; j<4; j++) {
          cylinders[cylindersCount] = 
             cylinderTemplate
             .translate([-10,cylinderY,cylinderZ]);
          cylinderY = cylinderY - 23;
          cylindersCount++;
       }
       cylinderZ = cylinderZ - 20;
   }
   //********** End Cylinders **********//
	
	return union(cylinders);
}

function hexagonDecoration() {
   var hexagonTemplate = torus({ fno:6, center:true })
        .rotateX(90)
        .rotateZ(90)
        .scale(1.7)
        .translate([-17,19,13]);

    var hexagons = [];
    var hexagonCount = 0;
    var hexagonY;
    var hexagonZ = 20;
    var i=0;
    var j=0;

    // 1st-Hex Rows
    for(i=0; i<6; i++) {
       hexagonY = 6;
       for(j=0; j<3; j++) {
          hexagons[hexagonCount] = 
             hexagonTemplate
             .translate([0,hexagonY,hexagonZ]);
          hexagonY = hexagonY - 20;
          hexagonCount++;
       }
       hexagonZ = hexagonZ - 12;
    }

    // 2nd-Hex Rows
    hexagonZ = 14;
    for(i=0; i<6; i++) {
       hexagonY = -4;
       for(j=0; j<3; j++) {
          hexagons[hexagonCount] = 
             hexagonTemplate
             .translate([0,hexagonY,hexagonZ]);
          hexagonY = hexagonY - 20;
          hexagonCount++;
       }
       hexagonZ = hexagonZ - 12;
    }

		return union(hexagons);
}

function waygateLogo() {
    var box = rectangular_extrude(
            [ [10,10], [-10,10], [-20,0], [-10,-10], [10,-10], [20,0] ],  // path is an array of 2d coords
            {w: 2, h: 5, closed: true})
            .translate([13,4,0])
            .scale([8,2,1]);

		var l = vector_text(2,0,"waygate.com");   // l contains a list of polylines to be drawn
		var o = [];
		l.forEach(function(pl) {                   // pl = polyline (not closed)
		   o.push(rectangular_extrude(pl, {w: 3, h: 5}));   // extrude it to 3D
		});
        
		return union(o).union(box).scale(0.20)
			.rotateX(26).rotateZ(-90)
			.translate([-23,21,-72]);
}
