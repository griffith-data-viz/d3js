// Select the container element 
const svgContainer = d3.select("#viz-container");

// Create an SVG element 
const svg = svgContainer.append("svg")
    .attr("width", 500).attr("height", 300);

// Add a circle to the SVG 
svg.append("circle").attr("cx", 100).attr("cy", 100).attr("r", 50).style("fill", "blue");


// Selecting a single element 
// const svgContainer = d3.select("#viz-container"); // Selecting multiple elements 
const circles = svgContainer.selectAll("circle");

// Binding data to selected elements 
const data = [10, 20, 30, 40, 50];
const circlesWithData = circles.data(data);

// Enter Selection
const enterSelection = circlesWithData.enter();
// Exit Selection
const exitSelection = circlesWithData.exit();

// Updating existing elements 
circlesWithData.attr("r", d => d);

// Creating new elements for data without corresponding elements
enterSelection 
.append("circle") 
.attr("r", d => d) 
.style("fill", "green");

// // Removing elements without corresponding data 
// exitSelection.remove();
