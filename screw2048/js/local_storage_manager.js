window.fakeStorage = {
  _data: {},

  setItem: function (id, val) {
    return this._data[id] = String(val);
  },

  getItem: function (id) {
    return this._data.hasOwnProperty(id) ? this._data[id] : undefined;
  },

  removeItem: function (id) {
    return delete this._data[id];
  },

  clear: function () {
    return this._data = {};
  }
};

function LocalStorageManager() {
  this.bestScoreKey     = "bestScore";
  this.minMovesKey		= "minMoves";
  this.gameStateKey     = "gameState";
  var supported = this.localStorageSupported();
  this.storage = supported ? window.localStorage : window.fakeStorage;
}

LocalStorageManager.prototype.localStorageSupported = function () {
  var testKey = "test";
  var storage = window.localStorage;

  try {
    storage.setItem(testKey, "1");
    storage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
};
// Best score getters/setters
LocalStorageManager.prototype.getMinMoves = function () {
	var ret = this.storage.getItem(this.minMovesKey);
	//window.alert(ret);
  if (ret) return ret;
  else return 100000;
};

// Best score getters/setters
LocalStorageManager.prototype.getBestScore = function () {
	var ret = this.storage.getItem(this.bestScoreKey);
	//	window.alert(ret);
  if (ret) return ret;
  else return 100000;
};

LocalStorageManager.prototype.setMinMoves = function (moves) {
  this.storage.setItem(this.minMovesKey, moves);
};

LocalStorageManager.prototype.setBestScore = function (score) {
  this.storage.setItem(this.bestScoreKey, score);
};

// Game state getters/setters and clearing
LocalStorageManager.prototype.getGameState = function () {
  var stateJSON = this.storage.getItem(this.gameStateKey);
  return stateJSON ? JSON.parse(stateJSON) : null;
};

LocalStorageManager.prototype.setGameState = function (gameState) {
  this.storage.setItem(this.gameStateKey, JSON.stringify(gameState));
};

LocalStorageManager.prototype.clearGameState = function () {
  this.storage.removeItem(this.gameStateKey);
};
