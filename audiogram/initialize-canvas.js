var fs = require("fs"),
    path = require("path"),
    Canvas = require("canvas"),
    getRenderer = require("../renderer/");

function initializeCanvas(theme, cb) {

  // Fonts pre-registered in bin/worker
  var renderer = getRenderer(theme);

  if (!theme.backgroundImage) {
    return cb(null, renderer);
  }

    var bg = new Canvas.Image;
    bg.src = theme.backgroundImage;
    renderer.backgroundImage(bg);
    
    return cb(null, renderer);

}

module.exports = initializeCanvas;
