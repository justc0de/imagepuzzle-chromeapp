/**
 * Listens for the app launching then creates the window
 */
chrome.app.runtime.onLaunched.addListener(function() {
  // Center window on screen.
  var screenWidth = screen.availWidth;
  var screenHeight = screen.availHeight;
  var width = 1200;
  var height = 800;

  chrome.app.window.create('imagepuzzle/index.html', {
    id: "imagepuzzle-chromeapp",
    outerBounds: {
      width: width,
      height: height,
      left: Math.round((screenWidth-width)/2),
      top: Math.round((screenHeight-height)/2)
    }
  });
});
