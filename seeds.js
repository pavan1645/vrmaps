var graphObj = require('./graph');

function seedDB() {
	graphObj.addNode("pano3", "pano1");
	graphObj.addNode("pano1", "pano4");
	graphObj.addNode("pano4", "pano1");
	graphObj.addNode("pano1", "pano3");
	graphObj.addNode("pano4", "pano5");
	graphObj.addNode("pano5", "pano4");
}

module.exports = seedDB;