

// fake data
var data = [ 10, 20, 30, 15, 25, 35, 40,45, 50, 70, 100, 120, 130, 12, 18, 22, 29, 33, 44, 59, 200]

var scene = d3.select("a-scene")

var cubes = scene.selectAll("a-box.bar").data(data)
cubes.enter()
  .append("a-box")
  .classed("bar", true)
  .attr("position", function(d,i) {
    var x = i*2
    var y = 3
    var z = -9
    return x + " " + y + " " + z
  }
)

var width = 960,
    height = 500;

var projection = d3.geoMercator()
    .center([0, 5 ])
    .scale(150)
    .rotate([-180,0]);

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

var path = d3.geoPath()
    .projection(projection);

var g = svg.append("g");

// load and display the World
d3.json("world-110m2.json", function(error, topology) {
    g.selectAll("path")
      .data(topojson.topology(topology, topology.objects.countries)
          .geometries)
    .enter()
      .append("path")
      .attr("d", path)
});

// zoom and pan
var zoom = d3.zoom()
    .on("zoom",function() {
        g.attr("transform","translate("+
            d3.translate.join(",")+")scale("+d3.scale+")");
        g.selectAll("path")
            .attr("d", path.projection(projection));
  });

svg.call(zoom)

AFRAME.registerComponent('draw-canvas', {
    schema: {default: ''},
    init: function () {
      this.canvas = document.getElementById(this.data);
      this.ctx = this.canvas.getContext('2d');
      // Draw on canvas...
    }
  });
