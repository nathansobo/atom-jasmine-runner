path = require "path"
glob = require "glob"

global.jasmineRequire = require "jasmine-core/lib/jasmine-core/jasmine"
require "jasmine-core/lib/jasmine-core/jasmine-html"
require "jasmine-core/lib/jasmine-core/boot"
require "./key-bindings"

projectPaths = window.location.hash.substr(1).split(':')
for projectPath in projectPaths
  for helperPath in glob.sync(path.join(projectPath, 'spec', '**', '*-helper?(s).@(js|coffee)'))
    require(helperPath)

  for specPath in glob.sync(path.join(projectPath, 'spec', '**', '*-spec.@(js|coffee)'))
    require(specPath)
