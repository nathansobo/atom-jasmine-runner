"use strict";

require("coffee-script").register();

var path = require("path"),
    glob = require("glob");

global.jasmineRequire = require("jasmine-core/lib/jasmine-core/jasmine");
require("jasmine-core/lib/jasmine-core/jasmine-html");
require("jasmine-core/lib/jasmine-core/boot");

document.addEventListener('keydown', function (event) {
  var charCode = parseInt(event.keyIdentifier.substr(2), 16)
  var char = String.fromCharCode(charCode)

  if (char === "R" && event.metaKey) {
    window.location.reload();
  }

  if (char === "W" && event.metaKey) {
    window.close();
  }

  if (char === "I" && event.metaKey && event.altKey) {
    require('remote').getCurrentWindow().toggleDevTools()
  }
});

var projectPaths = window.location.hash.substr(1).split(':');

for (var projectPath of projectPaths) {
  var specPaths = glob.sync(path.join(projectPath, 'spec', '**', '*-spec.@(js|coffee)'));
  for (var specPath of specPaths) {
    require(specPath);
  }
}
