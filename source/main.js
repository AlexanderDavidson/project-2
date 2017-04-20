// fake data
var data = [ 10, 20, 30, 15, 25, 35, 40,45, 50, 70, 100, 120, 130, 12, 18, 22, 29, 33, 44, 59, 200]

var scene = d3.select("a-scene")

var cubes = scene.selectAll("a-box.bar").data(data)
cubes.enter().append("a-box").classed("bar", true)
cubes.attr({
  position: function(d,i) {
    var x = i*2
    var y = 0
    var z = -4
    return x + " " + y + " " + z
  }
})
