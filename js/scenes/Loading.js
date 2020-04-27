import { Dom } from '../utils/Dom.js';
import { Menu } from './Menu.js';
import { assetUrls } from '../stores/Config.js';
import { Global } from '../stores/Global.js';

const Loading = function () {
  const assetsCount = Object.keys(assetUrls).length;

  this.enter = function () {
    Dom.utils.show(Dom.elements.loadingDiv);

    let loadedCount = 0;

    const checkFinish = () => {
      if (loadedCount === assetsCount) {
        setTimeout(() => {
          this.sceneManager.showScene(Menu);
        }, 0);
      }
    };

    for (let key in assetUrls) {
      let url = assetUrls[key];

      const image = Global.p5.loadImage(
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

      Global.assets[key] = image;
    }

    Global.p5.background(30);
  };

  this.exit = function () {
    Dom.utils.hide(Dom.elements.loadingDiv);
  };
};

export { Loading };
