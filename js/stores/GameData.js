let GameData;

const reset = function () {
  GameData = {
    assets: {},
    players: [
      // Champion: class
    ],
  };
};

reset();

const addAsset = function (key, asset) {
  GameData.assets[key] = asset;
};
const getAsset = function (key) {
  return GameData.assets[key];
};

export { GameData, addAsset, getAsset };
