var fs = require("fs"),
    path = require("path"),
    Canvas = require("canvas"),
    getRenderer = require("../renderer/"),
    serverSettings = require("../settings/");

function initializeCanvas(options, cb) {

  // Fonts pre-registered in bin/worker

  var canvas = new Canvas(options.width, options.height),
      context = canvas.getContext("2d"),
      renderer = getRenderer(context).update(options);

  renderer.caption = options.caption;

  if (!options.backgroundImage) {
    return cb(null, renderer);
  }

  var bg = new Image();
  bg.src = options.backgroundImage;
  renderer.backgroundImage = bg;
  debugger;

  return cb(null, renderer);

}

module.exports = initializeCanvas;
