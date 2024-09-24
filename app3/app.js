// Select an SVG container 
const svg = d3.select("svg");
// Create a circle 
svg.append("circle")
    .attr("cx", 50) // x-coordinate of the center 
    .attr("cy", 100) // y-coordinate of the center 
    .attr("r", 30) // radius 
    .style("fill", "red"); // fill color

// Create a line 
svg.append("line") 
.attr("x1", 200) // x-coordinate of the start point 
.attr("y1", 30) // y-coordinate of the start point 
.attr("x2", 280) // x-coordinate of the end point 
.attr("y2", 110) // y-coordinate of the end point 
.style("stroke", "blue") // stroke color 
.style("stroke-width", 2); // stroke width

// Create a rectangle 
svg.append("rect") 
.attr("x", 100) // x-coordinate of the top-left corner 
.attr("y", 50) // y-coordinate of the top-left corner 
.attr("width", 60) // width 
.attr("height", 40) // height 
.style("fill", "grey"); // fill color


// Create a path 

// Define the path data 
const pathData = "M50 100 L100 150 L150 100 Z";
svg.append("path") 
.attr("d", pathData) 
.attr("fill", "pink");
