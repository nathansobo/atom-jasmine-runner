"use strict";

require("coffee-script").register();

var path = require("path"),
    glob = require("glob");

global.jasmineRequire = require("jasmine-core/lib/jasmine-core/jasmine");
require("jasmine-core/lib/jasmine-core/jasmine-html");
require("jasmine-core/lib/jasmine-core/boot");

var projectPaths = window.location.hash.substr(1).split(':');

for (var projectPath of projectPaths) {
  var specPaths = glob.sync(path.join(projectPath, '**', 'spec', '*-spec.@(js|coffee)'));
  for (var specPath of specPaths) {
    require(specPath);
  }
}
