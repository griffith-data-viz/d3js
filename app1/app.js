// Select the container element 
const svgContainer = d3.select("#viz-container");

// Create an SVG element 
const svg = svgContainer.append("svg")
    .attr("width", 500).attr("height", 300);

// Add a circle to the SVG 
svg.append("circle").attr("cx", 100).attr("cy", 100).attr("r", 50).style("fill", "blue");

