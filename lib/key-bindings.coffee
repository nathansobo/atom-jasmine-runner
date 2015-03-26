document.addEventListener 'keydown', (event) ->
  charCode = parseInt(event.keyIdentifier.substr(2), 16)
  char = String.fromCharCode(charCode)

  if char is "R" and event.metaKey
    window.location.reload()

  if char is "W" and event.metaKey
    window.close()

  if char is "I" and event.metaKey and event.altKey
    require('remote').getCurrentWindow().toggleDevTools()
