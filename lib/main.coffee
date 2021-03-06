module.exports =
  activate: ->
    atom.commands.add "atom-workspace", "jasmine-runner:run-specs", ->
      remote = require 'remote'
      BrowserWindow = remote.require 'browser-window'

      runnerWindow = new BrowserWindow(width: 800, height: 600)
      projectPaths = atom.project.getPaths().join(':')
      runnerWindow.loadUrl("file://#{require.resolve("./index.html")}##{projectPaths}")
