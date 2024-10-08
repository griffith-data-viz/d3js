var width = 400, height = 400; 
var data = [100, 150, 200, 250, 280, 300]; 
var svg = d3.select("body") 
.append("svg") 
.attr("width", width) 
.attr("height", height);

var xscale = d3.scaleLinear() 
.domain([0, d3.max(data)]) 
.range([0, width - 100]); 

var yscale = d3.scaleLinear()
.domain([0, d3.max(data)]) 
.range([height / 2, 0]);

var x_axis = d3.axisBottom() 
.scale(xscale);

var y_axis = d3.axisLeft() 
.scale(yscale);


svg.append("g") 
.attr("transform", "translate(50, 10)") // Adjust the position as needed 
.call(y_axis);


var xAxisTranslate = height / 2 + 10; 
svg.append("g") 
.attr("transform", "translate(50, " + xAxisTranslate + ")") 
.call(x_axis);
