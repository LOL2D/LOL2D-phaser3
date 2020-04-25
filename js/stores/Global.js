const Global = {
  assets: {
    p5Images: {},
  },
  players: [
    // Champion: class
  ],
};

export function addAssetP5Image(key, image) {
  Global.assets.p5Images[key] = image;
}

export function getAssetP5Image(key) {
  return Global.assets.p5Images[key];
}
