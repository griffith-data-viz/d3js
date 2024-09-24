var data = [100, 200, 300, 400, 800, 0];
var width = 500, barHeight = 20, margin = 1;

var svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", barHeight * data.length);

var scale = d3.scaleLinear()
    .domain([d3.min(data), d3.max(data)])
    .range([100, 400]);

var g = svg.selectAll("g")
    .data(data)
    .enter()
    .append("g")
    .attr("transform", function (d, i) { return "translate(0," + i * barHeight + ")"; });

g.append("text")
    .attr("x", function (d) {
        return scale(d);
    })
    .attr("y", barHeight / 2)
    .attr("dy", ".35em")
    .text(function (d) { return d; });
