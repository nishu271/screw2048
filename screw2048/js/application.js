// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  //window.alert("request animation");
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
  //window.alert("initialized gamemanager");
});
