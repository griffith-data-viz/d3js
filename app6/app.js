// Select an SVG container 
const svg = d3.select("svg");
// Create a circle 
svg.append("circle")
    .attr("cx", 50) // x-coordinate of the center 
    .attr("cy", 100) // y-coordinate of the center 
    .attr("r", 30) // radius 
    .style("fill", "yellow"); // fill color

// Example: Highlight data points on hover
d3.selectAll("circle")
  .on("mouseover", function () {
    d3.select(this).attr("fill", "red");
  })
  .on("mouseout", function () {
    d3.select(this).attr("fill", "blue");
  });


// Example: Smoothly transition data updates
d3.selectAll("circle")
.transition()
.duration(1000)
.attr("r", d => d);