import Dom from '../utils/Dom.js';
import { Menu } from './Menu.js';
import { assetUrls } from '../stores/Config.js';
import { addAsset } from '../stores/GameData.js';

const Loading = function (_) {
  const assetsCount = Object.keys(assetUrls).length;
  let loadedCount = 0;

  this.enter = function () {
    const checkFinish = () => {
      if (loadedCount === assetsCount) {
        Dom.hide(Dom.loadingDiv);
        this.sceneManager.showScene(Menu);
      }
    };

    for (let key in assetUrls) {
      let url = assetUrls[key];

      const image = _.loadImage(
        url,
        // on success
        (e) => {
          loadedCount++;
          checkFinish();
        },
        // on error
        (error) => {
          loadedCount++;
          checkFinish();
        },
        // on loading
        (e) => {
          console.log(e);
        }
      );

      addAsset(key, image);
    }
  };
};

export { Loading };
